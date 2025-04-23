# Release notes for 669

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Changes the <code>Class.Plugin</code> type, as well as many related Instance types, to be plugin-level security. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed a bug causing the Explorer to get stuck in a dragging state. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces support for the <code>deprecated</code> attribute. Luau functions and table methods marked for deprecation lead to linter warnings when used. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces three-phase rollout for updates to the physics sleep system. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves performance for mouse raycast check. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When using Script Capabilities to sandbox instances, properties of a base class can be read in a derived class using base class capability requirements. Some read-only methods like <code>IsA</code> can also be called. For example, even with <code>FlagStand</code> being Unassigned today, properties defined on Part can be read. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The following <code>Class.WrapLayer</code> and <code>Class.WrapTarget</code> properties that are used to adjust the layered clothing (LC) fit and how the avatar body conforms to it are no longer needed and will be deprecated with this release:<br><ul><br><li><code>Class.WrapLayer.Puffiness</code></li><br><li><code>Class.WrapLayer.ShrinkFactor</code></li><br><li><code>Class.WrapTarget.Stiffness</code></li><br></ul><br>These properties are ignored on existing LC assets and body parts with non-default values set. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixed a class of issue where comparisons would cause non-<code>nil</code> values to suddenly become <code>nil</code> unexpectedly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Make <code>Class.Humanoid:BuildRigFromAttachments()</code> respect the AvatarJointUpgrade rollout |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixed potential memory corruption when using <code>table.freeze</code> as a first class function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer beta: holding shift while scrolling will now scroll Explorer by page |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Avatar auto setup no longer uploads models as input which stops you from being moderated twice for the same asset. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates logo for Roblox Studio. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - Fixed several issues relating to box select. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.ContentProvider:PreloadAsync()</code> now supports <code>Class.SurfaceAppearance</code> and <code>Class.MaterialVariant</code> objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.RunService:IsRunMode()</code> no longer incorrectly returns true when run on a server started from Play mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an issue where Unicode in the user directory name could cause sound files to fail to load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Automatically fix corrupted animation curves for curves with encoding version 1. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The in-Studio Solid Modeling buttons should now be enabled/disabled as appropriate when selecting parts using the Explorer view. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix ImproveSearch cut through wall issue. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed issue in EditableMesh where removing faces could sometimes corrupt the internal mesh data structure and cause crashes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Datatype.Ray:ClosestPoint()</code> and <code>Datatype.Ray:Distance()</code> now produce the expected values. Both methods now use a unit vector to perform the projection in the underlying computation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with lighting property migration when enabling the Unified Lighting Studio beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes the lowest LOD of a SurfaceAppearance to use the specular value as the average value of the roughness texture, rather than have all SurfaceAppearances use a the same constant value |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer beta no longer makes GUI selection highlights fail to render. |
