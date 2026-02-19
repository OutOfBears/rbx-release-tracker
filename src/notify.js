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
  const allDiffs = {};

  let diffText = "";
  try {
    diffText = await git.diff(["HEAD", "HEAD~1", "--name-only"]);
  } catch {
    // first commit / shallow clone / no HEAD~1
    return allDiffs;
  }

  const files = diffText
    .trim()
    .split("\n")
    .filter(Boolean)
    .filter((file) => file.endsWith(".json"));

  await Promise.all(
    files.map(async (file) => {
      // Matches:
      // - data/release-702.json
      // - data/Old/release-679.json
      // Ignores:
      // - data/New.json
      // - package.json
      const m = file.match(/data\/(?:Old\/)?release-(\d+)\.json$/);
      if (!m) return;
      const release = m[1];

      let newContent;
      try {
        newContent = await git.show([`HEAD:${file}`]);
      } catch {
        return;
      }

      const cachedContent = await client.get(release);
      if (newContent === cachedContent) return;

      await client.set(release, newContent);

      let present;
      try {
        present = JSON.parse(newContent);
      } catch {
        logger.warn({ file }, "invalid JSON in HEAD, skipping");
        return;
      }

      let past = [];
      try {
        past = JSON.parse(await git.show([`HEAD~1:${file}`]));
      } catch {
        past = [];
      }

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
        else if (status !== existed.status) {
          diffs.modified.push({ value, oldStatus: existed.status });
        }
      });

      if (!diffs.added.length && !diffs.removed.length && !diffs.modified.length)
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

  try {
    const changedFiles = await getChangedFiles();
    const changeVersions = Object.keys(changedFiles);

    if (!changeVersions.length) {
      logger.info("no changed files, aborting...");
      process.exitCode = 1;
      return;
    }

    logger.info(`versions changed: ${changeVersions.join(", ")}`);

    for (const release of changeVersions) {
      const diffs = changedFiles[release];

      logger.info(
        `publishing diffs for release ${release} (#${diffs.added.length} added, #${diffs.removed.length} removed, #${diffs.modified.length} modified)`
      );

      await pubSubClient.publish("update", JSON.stringify({ release, diffs }));
    }

    process.exitCode = 0;
  } finally {
    await Promise.allSettled([client.quit(), pubSubClient.quit()]);
  }
}

if (process.env.REDIS_URL) {
  run().catch((err) => {
    logger.error(err);
    process.exit(1);
  });
} else {
  logger.error("No Redis URL provided");
  process.exit(1);
}
