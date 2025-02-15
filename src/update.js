const htmlParser = require("node-html-parser");
const fs = require("fs");

const fetchNextData = (url) => {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const parsedData = htmlParser.parse(data);
      const dataElement = parsedData.querySelector("#__NEXT_DATA__");

      if (!dataElement) {
        throw new Error("No data found.");
      }

      const jsonData = JSON.parse(dataElement.rawText);
      if (!jsonData) {
        throw new Error("No JSON data found.");
      }

      return jsonData;
    });
};

const getCurrentVersions = () => {
  return fetchNextData(
    "https://create.roblox.com/docs/en-us/reference/engine"
  ).then((data) => {
    const navigation = data.props.pageProps.navigation.navigationContent;
    const releaseNotes = navigation.find(
      (item) => item.heading === "Release notes"
    );

    if (!releaseNotes) {
      throw new Error("No release notes found.");
    }

    const currentVersion = Number(
      releaseNotes.navigation[0].path.match(/release-notes-(\d+)/)[1]
    );
    const otherVersions = releaseNotes.navigation[1].section.map((section) => {
      return Number(section.path.match(/release-notes-(\d+)/)[1]);
    });

    return [currentVersion, ...otherVersions];
  });
};

const parseContents = (contents) => {
  let content = "";

  for (const idx in contents) {
    const item = contents[idx];

    if (item.type === "text") {
      content += item.value;
    } else if (item.type === "element") {
      if (item.tagName === "p") content += parseContents(item.children);
      else
        content += `<${item.tagName}>${parseContents(item.children)}</${
          item.tagName
        }>`;
    }
  }

  return content;
};

const colors = {
  Live: "009E57",
  Pending: "DEA517",
};
const getBadge = (status, color) => {
  color = color ?? "DEA517";
  return `![${status}](https://img.shields.io/badge/${status}-${color}?style=flat) `;
};

const contentsToMarkdown = (id, contents) => {
  let markdown = `# Release notes for ${id}\n\n`;

  const itemGroups = contents.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {});

  for (const type in itemGroups) {
    markdown += `## ${type}\n\n`;
    itemGroups[type].forEach((item, idx) => {
      const content = item.content.replace(/\n/g, "<br>").replace(/\|/g, "\\|");

      if (idx === 0) {
        markdown += "| Status | Note |\n|--------|------|\n";
        markdown += `| ${getBadge(
          item.status,
          colors[item.status]
        )} | ${content} |\n`;
      } else {
        markdown += `| ${getBadge(
          item.status,
          colors[item.status]
        )} | ${content} |\n`;
      }
    });
  }

  return markdown;
};

const fetchVersionData = (version) => {
  return fetchNextData(
    `https://create.roblox.com/docs/en-us/release-notes/release-notes-${version}`
  ).then((data) => {
    const notes = [];
    const contents = data.props.pageProps.data.releaseNoteContents.content;

    for (const idx in contents) {
      const item = contents[idx];

      notes.push({
        status: item.Status,
        type: item.ReleaseNotesType,
        content: parseContents(item.ReleaseNotesText.children),
      });
    }

    return notes;
  });
};

if (!fs.existsSync("data")) fs.mkdirSync("data");
if (!fs.existsSync("docs")) fs.mkdirSync("docs");

getCurrentVersions()
  .then((versions) => {
    return new Promise((resolve, reject) => {
      const data = [];
      Promise.all(
        versions.map((version) => {
          return fetchVersionData(version).then((versionData) => {
            data.push({ version, data: versionData });
          });
        })
      )
        .then(() => {
          data.sort((a, b) => b.version - a.version);
          resolve(data);
        })
        .catch(reject);
    });
  })
  .then((versionsData) => {
    const latestVersion = versionsData[0].version;
    console.log("Latest version: " + latestVersion);

    const readMeContent = fs.readFileSync("README.md", "utf8");
    const newReadMeContent = readMeContent
      .replaceAll(/data\/release-\d+/g, `/data/release-${latestVersion}`)
      .replaceAll(/docs\/release-\d+/g, `/data/release-${latestVersion}`);
    fs.writeFileSync("README.md", newReadMeContent);

    versionsData.forEach((versionData) => {
      fs.writeFileSync(
        `data/release-${versionData.version}.json`,
        JSON.stringify(versionData.data, null, 4)
      );
      fs.writeFileSync(
        `docs/release-${versionData.version}.md`,
        contentsToMarkdown(versionData.version, versionData.data)
      );
    });
  })
  .catch(console.error);
