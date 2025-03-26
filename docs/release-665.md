# Release notes for 665

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - Changes styling of dragging and dropping indicators to be less obtrusive. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Optimizes <code>Class.Instance:FindFirstChildWhichIsA()</code> 20x for parent instances with many children. Optimizes <code>Class.Object:IsA()</code> 30%. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves memory usage of <code>Class.EditableImage</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the <code>Class.IKControl</code> solver for the two-bone case. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Enables physics/datamodel/scripts to all re-simulate together. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves shader load times on DirectX. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Terrain updates:<br><ul><br><li>Grass blades on terrain now are more randomly distributed with less apparent repetition.</li><br><li>Fixes a bug that caused straight lines with shorter or missing grass blades to appear on terrain.</li><br><li>When editing terrain in Roblox Studio, the grass blade positions are updated continuously and not just after large changes.</li><br></ul> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Explorer no longer smooth scrolls. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - Fixes long names not giving a horizontal scroll bar again. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - Scrolling now works on Windows while dragging. For Qt users: Qt has no native way to solve this, you need to use <code>SetWindowsHookEx</code> to capture the scroll input. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where installed fonts disappear in dropdown list. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, users will be less likely to see blocked types and "constraint solving incomplete" errors when doing basic math. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with require-by-string's autocomplete not inserting escape characters like <code>\\</code>, <code>\"</code>, and <code>\'</code> when necessary. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that causes autocomplete to insert invalid Instance names when using require-by-string. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>PreloadAsync</code> call will fail on a <code>Class.VideoFrame</code> instance that is not in a DataModel. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Fixes bugs relating to clearing searches, especially with debugger open. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue where Avatar Setup gets stuck on the uploading stage for non-humanoid avatars. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes "Game Settings" and "Download as Copy" being disabled when the Script Editor is open. |
