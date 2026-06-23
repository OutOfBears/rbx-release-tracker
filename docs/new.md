# Release notes for 726

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Logs more descriptive errors when attempting to build `Class.EditableMesh` objects through `Class.AssetService:CreateDataModelContentAsync`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Class.Animation.AnimationContent`, `Class.FileMesh.MeshContent`, `Class.FileMesh.TextureContent`, `Class.Beam.TextureContent`, and `Class.ParticleEmitter.TextureContent` properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.GroundController.AccelerationTime` and `Class.GroundController.DecelerationTime` now only affect linear acceleration, not turning acceleration. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added new "Mannequin" option to the Studio Avatar Rig Generator. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a visual debugger for `Class.Instance` stitching to the Server Authority debugger. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.GroupService:GetRolesInGroupAsync(userId, groupId)` engine API returning all roles a user holds in a group, supporting multi-role assignment case. Deprecates `Class.Player:GetRankInGroupAsync()` and `Class.Player:GetRoleInGroupAsync()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.SoundService.ListenerType`, `Class.SoundService.ListenerCFrame`, and `Class.SoundService.ListenerObject` for setting the global listener position at edit time. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fix some erroneous cases of "generic bounds mismatches" involving nilable generic types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added options to Studio to display animation skeletons. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.DataModel.ServerRestartScheduled` event. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Enables Segmentation for `/generate_mesh` and `/generate_procedural_model` tools in Assistant. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Animation Graph Editor - Fixes trigger parameters not working with Sequence. |

## Fixes

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Ellipsis now appear correctly when using wrap and truncate within a TextLabel. Both flows were fixed, rich text and non rich text. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM support for emissive maps in `Class.SurfaceAppearance` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.AudioPlayer.AutoPlay` wouldn't work correctly in a Team Create session. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds two additional Gradient Types: Radial, Conical. Adds support for gradient tile modes: Clamp, Mirror, Repeat. Adds support for gradient scale. Adds support for gradients on Path2D instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix server authority solver behavior when using external forces. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in the AnimationGraph where setting a node property with NaN via `AnimationTrack.SetParameter` would lead to a hard crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the Studio VR Emulator would error on session start. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Animation Graph Editor - Pressing undo after a property slide will now go back to that value, rather than along that value. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Animation Graph Editor - Double-clicking to rename is now restricted to the title bar, rather than the whole node. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes the ProceduralModel template script to respect the `Tab Width` and `Indent Using Spaces` script editor settings. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an issue in Windows version of Studio where GetPropertyChangedSignal continuously fires for some held keys on. |

