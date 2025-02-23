const redis = require("redis");
const pino = require("pino");
const git = require("simple-git")();

require("dotenv").config();

const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

const pubSubClient = redis.createClient({
  url: process.env.REDIS_URL,
});
const client = redis.createClient({
  url: process.env.REDIS_URL,
});

async function getChangedFiles() {
  await git.fetch("origin", "HEAD:refs/remotes/origin/HEAD");

  const allDiffs = {};
  const files = (await git.diff(["HEAD", "HEAD~1", "--name-only"]))
    .trim()
    .split("\n")
    .filter((file) => file.endsWith(".json"));

  await Promise.all(
    files.map(async (file) => {
      const release = file.match(/data\/release-(\d+)\.json/)[1];
      if (!release) return;

      const newContent = await git.show([`HEAD:${file}`]);
      const cachedContent = await client.get(release);

      if (newContent === cachedContent) return;
      // await client.set(release, newContent);

      const past = JSON.parse(await git.show([`HEAD~1:${file}`]));
      const present = JSON.parse(await git.show([`HEAD:${file}`]));
      const diffs = { added: [], removed: [], modified: [] };

      past.forEach((value) => {
        const content = value.content;
        const existed = present.find((item) => item.content === content);
        if (!existed) diffs.removed.push(value);
      });

      present.forEach((value) => {
        const content = value.content;
        const status = value.status;
        const existed = past.find((item) => item.content === content);

        if (!existed) diffs.added.push(value);
        else {
          if (existed.content === content && status !== existed.status) {
            diffs.modified.push({ value, oldStatus: existed.status });
          }
        }
      });

      if (
        !diffs.added.length &&
        !diffs.removed.length &&
        !diffs.modified.length
      )
        return;

      allDiffs[release] = diffs;
    })
  );

  return allDiffs;
}

async function run() {
  await client.connect();
  await pubSubClient.connect();
  logger.info("connected to Redis");

  const changedFiles = await getChangedFiles();
  const changeVersions = Object.keys(changedFiles);

  if (!changeVersions.length) {
    logger.info("no changed files, aborting...");
    process.exit(-1);
    return;
  }

  logger.info(`versions changed: ${changeVersions.join(", ")}`);

  for (const release in changedFiles) {
    const diffs = changedFiles[release];

    logger.info(
      `publishing diffs for release ${release} (#${diffs.added.length} added, #${diffs.removed.length} removed, #${diffs.modified.length} modified)`
    );

    await pubSubClient.publish("update", JSON.stringify({ release, diffs }));
  }

  process.exit(0);
}

if (process.env.REDIS_URL)
  run().catch((err) => {
    logger.error(err);
    process.exit(-1);
  });
else {
  logger.error("No Redis URL provided");
  process.exit(-1);
}
