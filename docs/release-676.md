# Release notes for 676

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau user-defined type functions, it is now possible to reference regular type aliases. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Optimized module script loading leading to reduced memory usage, especially for Windows users. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updated the type signature of the `setmetatable` builtin to use the `setmetatable` type function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows `Class.Attachment` objects to have any parent. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves replication of simulated physics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes meshes not getting rendered on some GPUs running GLES3. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, autocomplete for assignments should provide more helpful suggestions.  |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fix scrolling of `Class.ScrollingFrame\|ScrollingFrames` in `Class.BillboardGui\|BillboardGuis` via the mouse wheel. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes bugs that could cause the pathfinding navigation mesh visualization to flicker or fail to render under certain conditions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Makes `Class.AudioEcho.RampTime` use 50% less CPU. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, fixes a bug where generic type packs would erroneously produce unknown symbol errors. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where a freshly-created `Class.AudioEmitter` or `Class.AudioListener` that uses custom distance or angle attenuation curves produces an audible click. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - Fixed a rare `direction == 0`, which would imply `target == anchor` bug. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in `Class.Textbox` where text is duplicated when long sequences of whitespace are present. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Smooth-skinned avatars no longer have seams at part boundaries when undergoing deformation by `Class.WrapDeformer\|WrapDeformers`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Makes accessories for R6 avatars have `Class.BasePart.AudioCanCollide` set to false by default. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves incremental autocomplete’s support for completions on union types in Luau’s old Type Solver. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where Sounds and AudioPlayers can fail to play properly when calling `Stop()` and `Play()` in quick succession. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds PackageLink as instance to ignore when cloning for Texture Generator |
