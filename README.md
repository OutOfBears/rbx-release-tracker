# Roblox Release Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Build Status](https://github.com/outofbears/rbx-release-tracker/actions/workflows/update.yml/badge.svg)](https://github.com/outofbears/rbx-release-tracker/actions)
[![Last Commit](https://img.shields.io/github/last-commit/outofbears/rbx-release-tracker.svg)](https://github.com/outofbears/rbx-release-tracker/commits/main)
[![Issues](https://img.shields.io/github/issues/outofbears/rbx-release-tracker.svg)](https://github.com/outofbears/rbx-release-tracker/issues)

## Quick Links

- **[Jump to Current Version](/docs/release-707.md)**
- **[Current Version JSON](/data/release-707.json)**

## Overview

**Roblox Release Tracker** is dedicated to monitoring Roblox release notes with a focus on tracking the status of individual features for each version. Each release (e.g., `release-650`) includes detailed notes where every feature is tagged as either **Pending** or **Live**, providing a clear view of which features are active and which are still under development.

## What’s Tracked

- **Versioned Releases:**  
  Releases follow a standardized format (e.g., `release-650`).

- **Feature Status:**  
  Within each release, individual features are labeled with one of the following statuses:
  - **Pending**
  - **Live**

- **Dual Representations:**  
  For every release version, two files are maintained:
  - A **Markdown file** for a user-friendly display of the release notes and feature statuses.
  - A **JSON file** containing the raw data for integration or further analysis.

## File Structure

Each release version is represented by two separate files, ensuring both readability and ease of data parsing. A typical directory structure looks like this:

```
/releases/
├── release-650.md
├── release-650.json
├── release-649.md
├── release-649.json
└── ...
```

*Note:* Up to six recent versions are tracked at any given time.

## Usage

Browse the repository to check out the latest release notes in Markdown or refer to the JSON files for raw data. Whether you're a developer integrating release information or a fan tracking feature statuses, **Roblox Release Tracker** offers a clear and organized overview of Roblox's evolving feature landscape.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or additional insights to enhance this project, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to explore the repository and stay updated on the status of features across Roblox releases!
