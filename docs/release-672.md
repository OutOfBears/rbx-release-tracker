# Release notes for 672

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, local variables captured in a lambda are no longer allowed to change types via assignment. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Textures displaying <code>Class.EditableImage\|EditableImages</code> now switch to low resolution when the system is low on memory, with no changes to the actual image data. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>CapabilityControl</code> capability to allow sandboxed scripts to modify the capabilities and sandboxing of other instances, and updates the rules to keep sandboxing safe when properties are changed. In general, a script can't modify capabilities of an instance if the resulting capabilities exceed that original script's own capabilities. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a preset selection to the visual editor for <code>Class.AudioEmitter.DistanceAttenuation</code> and <code>Class.AudioListener.DistanceAttenuation</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.WireframeHandleAdornment.Thickness</code> to enable drawling lines of different thicknesses. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.PartOperation.SmoothingAngle\|SmoothingAngle</code> on <code>Class.PartOperation</code> in Studio now affects smoothing of all edges, not just the boundaries between parts. It also does a much cleaner job of smoothing overall. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces <code>Class.EditableMesh</code> skinning & FACS Studio beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, type inference now understands that returning (or breaking/continuing in a loop) will short circuit control flow. This allows you to write patterns like "exit early from a function if a variable does not have a particular type." |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, adds a library function <code>types.optional</code> for constructing optional types in a user-defined type function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Renamed the <code>?</code> tab in MicroProfiler HTML dumps to <code>Info</code> for better clarity. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for multiple controllers on Xbox and PlayStation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In "Next Gen Explorer" beta, fixes several issues of actions showing when they shouldn't, or not showing when they should. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In "Next Gen Explorer" beta, changes <kbd>Shift</kbd>-click behavior to one simpler rule: If two things being selected are on the same depth level, only things between with that same depth level are selected; otherwise, everything is selected. Also, the anchor is now the last thing you selected before <kbd>Shift</kbd>-clicking; for example, if there are four consecutive instances (<code>A</code>, <code>B</code>, <code>C</code>, <code>D</code>) and you <kbd>Shift</kbd>-click from <code>A</code> to <code>D</code>, then you <kbd>Shift</kbd>-click <code>C</code>, it'll only select <code>A</code> to <code>C</code>. |
## Fixes

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, the new non-strict mode now reports unknown symbol errors for annotations of non-existent types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes three issues in <code>Class.EditableMesh</code>: A) <code>Class.EditableMesh:FindClosestVertex()\|FindClosestVertex()</code> only returns vertices that are part of triangles; B) <code>Class.EditableMesh:FindClosestPointOnSurface()\|FindClosestPointOnSurface()</code> does not work for query points inside mesh; C) <code>Class.EditableMesh:FindClosestPointOnSurface()\|FindClosestPointOnSurface()</code> sometimes returns incorrect barycentric coordinates. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Smooth-skinned avatars should no longer have seams at part boundaries when undergoing deformation by <code>Class.WrapDeformer\|WrapDeformers</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a regression in improved pathfinding where the path would stick to the edges of high-cost areas. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where unicode in the user directory name could cause sound files to fail to load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with lighting property migration when enabling the "Unified Lighting" beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bugs that could cause the pathfinding navigation mesh visualization to flicker or fail to render under certain conditions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where pixels would shift on R15 humanoid heads in non-PBR cases. While final pixels on heads might render slightly offset, this is the correct and expected behavior, ensuring the result in terms of diffuse textures is the same whether a head is rendered with PBR or not. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where <code>Class.AudioCompressor</code> does not properly compress when the <code>Input</code> and <code>Sidechain</code> streams use a different number of channels. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where rapidly changing <code>Class.AudioPlayer.Asset</code> could cause the wrong asset to be loaded. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes some of the instances of Roblox types getting refined to <code>never</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In "Next Gen Explorer" beta, hotkeys bound to "expand all" and "collapse all" now work as expected. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Amends fix for GUI selection highlights with "Next Gen Explorer" beta enabled (some cases with previous fix were still not working correctly). |
