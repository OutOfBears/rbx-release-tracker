# Release notes for 666

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds new <code>Enum.AlphaMode\|TintMask</code> alpha blend mode for <code>Class.SurfaceAppearance</code>. Additionally, streaming LoD meshes more accurately represent the <code>Class.SurfaceAppearance</code> alpha blend modes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Autocomplete and typechecking is now available inside Luau type functions (feature of Luau's New Type Solver). |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improved experience join times. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Enables localized autocomplete documentation. Most documentation will be translated according to the set Studio language. Content that has not yet been translated will continue to show up in English. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, improves the rendering of type errors to significantly increase comprehension of subtyping failures with multiple underlying reasons. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | MicroProfiler on-screen UI can be easily closed now. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug on consoles where attempting to purchase an item while having enough Robux would cause gamepad selection to stop working in experiences with the virtual cursor disabled. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Narrows return types for multiple <code>Class.WorldModel</code> APIs from <code>{Instance}</code> to <code>{BasePart}</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue on PlayStation where logging into the user that launched Roblox on another controller could cause the gamepad disconnect modal to stay on the screen. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue on console chat where chat tags weren't being rendered correctly due to up-scaled text size. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Audio discovery plugin now discovers new asset IDs where it previously did not. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | <kbd>Ctrl</kbd><kbd>Z</kbd> (<kbd>⌘</kbd><kbd>Z</kbd>) now performs an undo in text input boxes. Similarly, <kbd>Ctrl</kbd><kbd>Y</kbd> (<kbd>⌘</kbd><kbd>Y</kbd>) or <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>Z</kbd> (<kbd>⌘</kbd><kbd>Shift</kbd><kbd>Z</kbd>) now performs a redo in text input boxes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Holding <code>Alt</code> no longer disables scrolling in Studio for Windows. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in the "Next Gen Explorer" beta with inconsistent cursor state of hovering when you aren't actually hovering. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Terrain APIs now print warnings if the region is not aligned to the voxel grid as per documentation. Please use <code>Datatype.Region3:ExpandToGrid()</code> to make regions aligned, as this will become an error in the future. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, the <code>index</code> type function now returns the type <code>any</code> when indexing an error-suppressing type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, the <code>index</code> type function no longer crashes when looking up a missing property in a cyclic metatable. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, the <code>index</code> type function now computes the result type of an index when using a metatable with a function as the <code>__index</code> metamethod. |
