# Release notes for 676

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Optimized module script loading leading to reduced memory usage, especially for Windows users. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau user-defined type functions, it is now possible to reference regular type aliases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.Bone.LocalCFrame</code> and <code>Class.Bone.WorldCFrame</code> properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows <code>Class.Attachment</code> objects to have any parent. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | You can now visualize <code>Class.WrapTarget</code> cage mesh vertices before and after deformation with <code>Class.WrapDeformer</code>. By default, visualization shows post-deformation vertices, but the new debug visualization setting <code>Enum.WrapTargetDebugMode.PreWrapDeformerCage</code> lets you view the <code>Class.WrapTarget</code> cage vertices prior to deformation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves replication of simulated physics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a "Default" device option when selecting input and output audio devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes meshes not getting rendered on some GPUs running GLES3. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, autocomplete for assignments should provide more helpful suggestions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updated the type signature of the <code>setmetatable</code> builtin to use the <code>setmetatable</code> type function. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes bugs that could cause the pathfinding navigation mesh visualization to flicker or fail to render under certain conditions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - Fixed a rare <code>direction == 0</code>, which would imply <code>target == anchor</code> bug. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix scrolling of <code>Class.ScrollingFrame\|ScrollingFrames</code> in <code>Class.BillboardGui\|BillboardGuis</code> via the mouse wheel. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in <code>Class.Textbox</code> where text is duplicated when long sequences of whitespace are present. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Smooth-skinned avatars no longer have seams at part boundaries when undergoing deformation by <code>Class.WrapDeformer\|WrapDeformers</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where unicode in the user directory name could cause sound files to fail to load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Parts created on the client are now destroyed when they hit the killplane. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Makes <code>Class.AudioEcho.RampTime</code> use 50% less CPU. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Makes accessories for R6 avatars have <code>Class.BasePart.AudioCanCollide</code> set to false by default. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves incremental autocomplete’s support for completions on union types in Luau’s old Type Solver. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where Sounds and AudioPlayers can fail to play properly when calling <code>Stop()</code> and <code>Play()</code> in quick succession. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes a bug where generic type packs would erroneously produce unknown symbol errors. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where a freshly-created <code>Class.AudioEmitter</code> or <code>Class.AudioListener</code> that uses custom distance or angle attenuation curves produces an audible click. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds PackageLink as instance to ignore when cloning for Texture Generator |
