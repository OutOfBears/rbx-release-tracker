const htmlParser = require("node-html-parser");
const fs = require("fs");

if (typeof fetch !== "function") {
  throw new Error("Global fetch() not found. Use Node 18+ (Node 20 recommended).");
}

const fetchNextData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Request failed ${res.status} ${res.statusText} for ${url}`);
  }

  const html = await res.text();
  const parsedData = htmlParser.parse(html);
  const dataElement = parsedData.querySelector("#__NEXT_DATA__");

  if (!dataElement) throw new Error("No __NEXT_DATA__ found.");

  const jsonData = JSON.parse(dataElement.rawText);
  if (!jsonData) throw new Error("No JSON data found in __NEXT_DATA__.");

  return jsonData;
};

const extractVersion = (path) => {
  const m = (path ?? "").match(/release-notes-(\d+)/);
  return m ? Number(m[1]) : null;
};

const getCurrentVersions = async () => {
  const data = await fetchNextData(
    "https://create.roblox.com/docs/en-us/reference/engine"
  );

  const navigation =
    data?.props?.pageProps?.navigation?.navigationContent ?? [];

  const releaseNotes = navigation.find((item) => item.heading === "Release notes");
  if (!releaseNotes) throw new Error("No release notes found.");

  const nav = releaseNotes.navigation ?? [];

  const currentVersion = extractVersion(nav?.[0]?.path);
  if (!Number.isFinite(currentVersion)) {
    throw new Error("Could not parse current release-notes version.");
  }

  const otherVersions = (nav?.[1]?.section ?? [])
    .map((section) => extractVersion(section.path))
    .filter((v) => Number.isFinite(v));

  // keep it reasonable (current + 5 others)
  const versions = [currentVersion, ...otherVersions]
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .slice(0, 6);

  return versions;
};

const parseContents = (contents) => {
  let content = "";

  for (const item of contents ?? []) {
    if (!item) continue;

    if (item.type === "text") {
      content += item.value ?? "";
    } else if (item.type === "element") {
      if (item.tagName === "p") content += parseContents(item.children);
      else {
        content += `<${item.tagName}>${parseContents(item.children)}</${item.tagName}>`;
      }
    }
  }

  return content;
};

const colors = {
  Live: "009E57",
  Pending: "DEA517",
};

const getBadge = (status, color) => {
  const safeStatus = status ?? "Pending";
  const safeColor = color ?? colors[safeStatus] ?? "DEA517";
  return `![${safeStatus}](https://img.shields.io/badge/${safeStatus}-${safeColor}?style=flat) `;
};

const contentsToMarkdown = (id, contents) => {
  let markdown = `# Release notes for ${id}\n\n`;

  const itemGroups = (contents ?? []).reduce((acc, item) => {
    const type = item?.type ?? "Other";
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {});

  for (const type in itemGroups) {
    markdown += `## ${type}\n\n`;
    markdown += "| Status | Note |\n|--------|------|\n";

    itemGroups[type].forEach((item) => {
      const content = (item.content ?? "")
        .replace(/\n/g, "<br>")
        .replace(/\|/g, "\\|");

      markdown += `| ${getBadge(item.status, colors[item.status])} | ${content} |\n`;
    });

    markdown += "\n";
  }

  return markdown;
};

const fetchVersionData = async (version) => {
  const data = await fetchNextData(
    `https://create.roblox.com/docs/en-us/release-notes/release-notes-${version}`
  );

  const contents =
    data?.props?.pageProps?.data?.releaseNoteContents?.content ?? [];

  const notes = contents.map((item) => ({
    status: item?.Status ?? "Pending",
    type: item?.ReleaseNotesType ?? "Other",
    content:
      typeof item?.ReleaseNotesText === "string"
        ? item.ReleaseNotesText
        : parseContents(item?.ReleaseNotesText?.children),
  }));

  return notes;
};

function ensureDirs() {
  fs.mkdirSync("data", { recursive: true });
  fs.mkdirSync("docs", { recursive: true });
  fs.mkdirSync("data/Old", { recursive: true });
  fs.mkdirSync("docs/Old", { recursive: true });
}

function moveExistingRootReleasesToOld(latestVersion) {
  // Move existing root files into Old/ (except latest)
  for (const f of fs.readdirSync("data")) {
    const m = f.match(/^release-(\d+)\.json$/);
    if (m && Number(m[1]) !== latestVersion) {
      const src = `data/${f}`;
      const dst = `data/Old/${f}`;
      try { fs.rmSync(dst); } catch {}
      fs.renameSync(src, dst);
    }
  }

  for (const f of fs.readdirSync("docs")) {
    const m = f.match(/^release-(\d+)\.md$/);
    if (m && Number(m[1]) !== latestVersion) {
      const src = `docs/${f}`;
      const dst = `docs/Old/${f}`;
      try { fs.rmSync(dst); } catch {}
      fs.renameSync(src, dst);
    }
  }
}

async function main() {
  ensureDirs();

  const versions = await getCurrentVersions();
  const versionsData = await Promise.all(
    versions.map(async (version) => ({
      version,
      data: await fetchVersionData(version),
    }))
  );

  versionsData.sort((a, b) => b.version - a.version);

  const latestVersion = versionsData[0]?.version;
  console.log("Latest version: " + latestVersion);

  // Update README pointers to the latest *versioned* release files
  const readMeContent = fs.readFileSync("README.md", "utf8");
  const newReadMeContent = readMeContent
    .replace(/data\/release-\d+/g, `data/release-${latestVersion}`)
    .replace(/docs\/release-\d+/g, `docs/release-${latestVersion}`);
  fs.writeFileSync("README.md", newReadMeContent);

  // Clean up existing root releases by moving them into Old/
  moveExistingRootReleasesToOld(latestVersion);

  // Write fetched versions: latest stays in root, others go into Old/
  versionsData.forEach(({ version, data }) => {
    const isLatest = version === latestVersion;

    const dataPath = isLatest
      ? `data/release-${version}.json`
      : `data/Old/release-${version}.json`;

    const docsPath = isLatest
      ? `docs/release-${version}.md`
      : `docs/Old/release-${version}.md`;

    fs.writeFileSync(dataPath, JSON.stringify(data, null, 4));
    fs.writeFileSync(docsPath, contentsToMarkdown(version, data));
  });

  // Stable "latest" aliases (super easy to find)
  fs.writeFileSync("data/New.json", JSON.stringify(versionsData[0].data, null, 4));
  fs.writeFileSync("docs/New.md", contentsToMarkdown(latestVersion, versionsData[0].data));
}

main().catch(console.error);
