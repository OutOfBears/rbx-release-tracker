# Release notes for 672

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, adds a library function `types.optional` for constructing optional types in a user-defined type function. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds support for multiple controllers on Xbox and PlayStation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, local variables captured in a lambda are no longer allowed to change types via assignment. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `CapabilityControl` capability to allow sandboxed scripts to modify the capabilities and sandboxing of other instances, and updates the rules to keep sandboxing safe when properties are changed. In general, a script can't modify capabilities of an instance if the resulting capabilities exceed that original script's own capabilities. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a preset selection to the visual editor for `Class.AudioEmitter.DistanceAttenuation` and `Class.AudioListener.DistanceAttenuation`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.WireframeHandleAdornment.Thickness` to enable drawling lines of different thicknesses. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.PartOperation.SmoothingAngle\|SmoothingAngle` on `Class.PartOperation` in Studio now affects smoothing of all edges, not just the boundaries between parts. It also does a much cleaner job of smoothing overall. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces `Class.EditableMesh` skinning & FACS Studio beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, type inference now understands that returning (or breaking/continuing in a loop) will short circuit control flow. This allows you to write patterns like "exit early from a function if a variable does not have a particular type." |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In "Next Gen Explorer" beta, changes <kbd>Shift</kbd>-click behavior to one simpler rule: If two things being selected are on the same depth level, only things between with that same depth level are selected; otherwise, everything is selected. Also, the anchor is now the last thing you selected before <kbd>Shift</kbd>-clicking; for example, if there are four consecutive instances (`A`, `B`, `C`, `D`) and you <kbd>Shift</kbd>-click from `A` to `D`, then you <kbd>Shift</kbd>-click `C`, it'll only select `A` to `C`. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes three issues in `Class.EditableMesh`: A) `Class.EditableMesh:FindClosestVertex()\|FindClosestVertex()` only returns vertices that are part of triangles; B) `Class.EditableMesh:FindClosestPointOnSurface()\|FindClosestPointOnSurface()` does not work for query points inside mesh; C) `Class.EditableMesh:FindClosestPointOnSurface()\|FindClosestPointOnSurface()` sometimes returns incorrect barycentric coordinates. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `Class.AudioCompressor` does not properly compress when the `Input` and `Sidechain` streams use a different number of channels. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where rapidly changing `Class.AudioPlayer.Asset` could cause the wrong asset to be loaded. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, fixes some of the instances of Roblox types getting refined to `never`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, the new non-strict mode now reports unknown symbol errors for annotations of non-existent types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a regression in improved pathfinding where the path would stick to the edges of high-cost areas. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In "Next Gen Explorer" beta, hotkeys bound to "expand all" and "collapse all" now work as expected. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Amends fix for GUI selection highlights with "Next Gen Explorer" beta enabled (some cases with previous fix were still not working correctly). |
