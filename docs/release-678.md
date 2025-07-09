# Release notes for 678

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Textures displaying `Class.EditableImage\|EditableImages` now switch to low resolution when the system is low on memory, with no changes to the actual image data. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a `Enum.InputActionType\|Direction3D` enum option for use with `Class.InputAction.Type`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, autocomplete now suggests individual string literal keys for table index expressions when appropriate. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates the Script Capability system to extend availability of instances under existing capabilities. See the DevForum announcement for specifics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, improves error messages for table literals in assignments while still allowing imperative table updates. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer beta: the true option will now auto-sort to the top when doing searches like `anchored=t`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Makes the camera speed lock in the "New Studio Camera Controls" beta persistent. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Extends type checker in the New Type Solver to check associated generics of function types. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes occasional crashes on macOS when a user unplugs a game controller. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Various fixes: A) Fixes a bug where certain meshes could be stuck in `Enum.CollisionFidelity\|Default` or `Enum.CollisionFidelity\|Box` collision fidelity; B) Fixes a bug where an initial size of `0, 0, 0` could force a mesh to have a large `Class.MeshPart.ExtentsSize\|ExtentsSize`; C) Optimizes setting `Class.MeshPart.Size` and `Class.TriangleMeshPart.Size`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - Now returns temporary script settings. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where some text in the `Class.AudioCompressor` editor renders incorrectly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a visual issue with the default `Class.TextChatService` UI that would sometimes flash a grey square on startup. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Adds back Team Create selection indicators. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Fixes an error where you could rename an object even if it was deleted before you clicked it in the Explorer window. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Fixes several cases where context menu items could disappear. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in which the "You've made script changes while playing " dialog keeps reappearing even after dismissed with no new script changes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The Save Place dialog now always displays on top when closing a place where the Add Tools window is open. |
