# Release notes for 673

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Ensures that subtyping errors are reported correctly. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Speeds up animation curve evaluation by enabling caching for animation curve sampling. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In "Next Gen Explorer" beta, fixes several issues of actions showing when they shouldn't, or not showing when they should. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The keyboard shortcuts for cut and copy can now be triggered in the Script Editor with no text selected. If a cursor has no selected text, the cut and copy actions will place the entire line the cursor is on into the clipboard.<br>Pasting a clipboard item sourced from a single line cut or copy will place it on the previous editor line. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Pressing <kbd>Enter</kbd> or <kbd>F2</kbd> to rename an instance can now be done after selecting from the viewport, without having to click on the Explorer window. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, fixes a bug where the <code>index</code>, <code>rawget</code>, and <code>setmetatable</code> type functions mistakenly had a default value for their second type parameter. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with lighting property migration when enabling the "Unified Lighting" beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Some mice such as "Microsoft Ergonomic Mouse" send scroll deltas other than -1 or 1 which tricks the input stack into thinking their scroll is a trackpad scroll disabling smooth scrolling in the Windows client.<br>Use a better heuristic to avoid this. |
