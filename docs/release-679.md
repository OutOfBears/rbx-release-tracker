# Release notes for 679

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau autocomplete now prioritizes showing table properties in index expressions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new `Class.Decal.TextureContent` property so that `EditableImage` can be used with decals.  |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.Bone.LocalCFrame` and `Class.Bone.WorldCFrame` properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.ScrollingFrame.TopImageContent`, `Class.ScrollingFrame.MidImageContent`, and `Class.ScrollingFrame.BottomImageContent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | You can now visualize `Class.WrapTarget` cage mesh vertices before and after deformation with `Class.WrapDeformer`. By default, visualization shows post-deformation vertices, but the new debug visualization setting `Enum.WrapTargetDebugMode.PreWrapDeformerCage` lets you view the `Class.WrapTarget` cage vertices prior to deformation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new Net Asset section to the Network Diagnostics Debug panel. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a "Default" device option when selecting input and output audio devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `UIContainerQuery` to Studio Explorer. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an instance where refining an intersection of tables resulted in the `never` type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, table literals within function calls now have more precise errors. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau type solver, the `keyof` type function now respects empty string properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Tuned the Scaling behavior of Unified Lighting. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer: Pressing tab/shift-tab while renaming now lets you rename the next/previous instance. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where unicode in the user directory name could cause sound files to fail to load. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with lighting property migration when enabling the "Unified Lighting" beta. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where pixels would shift on R15 humanoid heads in non-PBR cases. While final pixels on heads might render slightly offset, this is the correct and expected behavior, ensuring the result in terms of diffuse textures is the same whether a head is rendered with PBR or not. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue in the Next Gen Studio Preview beta where the Move Left and Move Right options on the buttons of a custom tab didn't always work on the first try. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, refinements on table index expressions no longer prevent you from assigning to the same expression. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Parts created on the client are now destroyed when they hit the killplane. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug that caused Studio to become unresponsive and crash if a script attempted to perform pathfinding when the `Class.Path` object's `WaypointSpacing` was set to zero. Also fixes a bug that caused path waypoints to be generated in the wrong direction if a script attempted to perform pathfinding when the `Class.Path` object's `WaypointSpacing` was set to a negative number. `WaypointSpacing` values near or less than zero are now clamped to the minimum spacing distance of 0.1. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that caused streaming to be very slow when an experience uses a large amount of model LoD. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the Luau Heap report displayed the same path information in the Unique References section. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.ParticleEmitter\|ParticleEmitters` and Lights don't follow Detached `Class.Attachment\|Attachments` |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where move/rotate/scale draggers don't work with Detached `Class.Attachment\|Attachments`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that caused the Studio camera to move when zooming in or out with the Avatar Setup camera. |
