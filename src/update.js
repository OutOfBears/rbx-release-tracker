const htmlParser = require("node-html-parser");
const fs = require("fs");

if (typeof fetch !== "function") {
  throw new Error("Global fetch() not found. Use Node 18+ (recommended Node 20).");
}

const fetchNextData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Request failed ${res.status} ${res.statusText} for ${url}`);
  }

  const html = await res.text();
  const parsed = htmlParser.parse(html);
  const dataElement = parsed.querySelector("#__NEXT_DATA__");

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
  const data = await fetchNextData("https://create.roblox.com/docs/en-us/reference/engine");

  const navigation =
    data?.props?.pageProps?.navigation?.navigationContent ?? [];

  const releaseNotes = navigation.find((item) => item.heading === "Release notes");
  if (!releaseNotes) throw new Error("No release notes found in navigation.");

  const nav = releaseNotes.navigation ?? [];

  const currentVersion = extractVersion(nav?.[0]?.path);
  if (!Number.isFinite(currentVersion)) {
    throw new Error("Could not parse current release-notes version.");
  }

  const sections = nav?.[1]?.section ?? [];
  const otherVersions = sections
    .map((s) => extractVersion(s.path))
    .filter((v) => Number.isFinite(v));

  
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

// Ensure output dirs
fs.mkdirSync("data", { recursive: true });
fs.mkdirSync("docs", { recursive: true });

async function main() {
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

  // Update README pointers to latest
  const readMeContent = fs.readFileSync("README.md", "utf8");
  const newReadMeContent = readMeContent
    .replace(/data\/release-\d+/g, `data/release-${latestVersion}`)
    .replace(/docs\/release-\d+/g, `docs/release-${latestVersion}`);
  fs.writeFileSync("README.md", newReadMeContent);

  // Write files
  versionsData.forEach(({ version, data }) => {
    fs.writeFileSync(`data/release-${version}.json`, JSON.stringify(data, null, 4));
    fs.writeFileSync(`docs/release-${version}.md`, contentsToMarkdown(version, data));
  });
}

main().catch(console.error);
