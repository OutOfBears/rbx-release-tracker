# Release notes for 725

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Windows Accessibility Hotkeys to enable Filter Keys, Sticky Keys, and Toggle Keys no longer create a pop-up dialog if activated during runtime.  This change only affects the pop-up dialog. If the accessibility feature was enabled via Windows OS, the feature will continue to behave exactly the same as before. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds `Class.UserService:GetUserFromGlobalUserIdAsync()` method. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.CharacterMesh.MeshContent`, `Class.CharacterMesh.BaseTextureContent`, and `Class.CharacterMesh.OverlayTextureContent` properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Class.Animation.AnimationContent`, `Class.FileMesh.MeshContent`, `Class.FileMesh.TextureContent`, `Class.Beam.TextureContent`, and `Class.ParticleEmitter.TextureContent` properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.GroundController.AccelerationTime` and `Class.GroundController.DecelerationTime` now only affect linear acceleration, not turning acceleration. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an error where Luau script analysis would sometimes incorrectly infer that `Library.table.unpack` returns `...unknown`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Validates `Class.AnimationGraphDefinition` and log errors in the Developer Console if there are violations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.GroupService:GetRolesInGroupAsync(userId, groupId)` engine API returning all roles a user holds in a group, supporting multi-role assignment case. Deprecates `Class.Player:GetRankInGroupAsync` and `Class.Player:GetRoleInGroupAsync`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Logs more descriptive errors when attempting to build `Class.EditableMesh` objects through `Class.AssetService:CreateDataModelContentAsync`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for `export` being highlighted in the Script Editor when applied to `export local`, `export const` and `export function`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds an `Class.EditableMesh:Clear()` method that provides you a way to remove all vertex data, bones, and FACS data without removing the `Class.EditableMesh` or its allocated space. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Enables Segmentation for `/generate_mesh` and `/generate_procedural_model` tools in Assistant. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Animation Graph Editor - Fixes trigger parameters not working with Sequence. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | When a GuiObject scales to fullscreen because of `Class.ScreenGui.SafeAreaCompatibility`, it now retains its aspect ratio if it is affected by a `Class.UIAspectRatioConstraint`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with cylinder part UVs being rotated 180 degrees on the back face. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Particle emitters with `Enum.ParticleOrientation` set to `VelocityPerpendicular` now behave correctly with rotations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `TextBounds` property is now correct for text instances parented to a `Class.BillboardGui`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Displays a proper error message when the fallback engine font doesn't load correctly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where a UI element re-parented into a `Class.Frame` inside a `Class.ScrollingFrame` could appear pinned in place when slowly scrolled out of view. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes flag emoji not being handled correctly by `Library.utf8.graphemes()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where a `Class.Sky` object parented to a `Class.ViewportFrame` object could be influenced by the `Class.Sky` object in the `Class.Lighting` service, causing unintended lighting changes in the viewport. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes lags while loading terrain. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM support for emissive maps in `Class.SurfaceAppearance` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves decal rendering. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.AudioPlayer.AutoPlay` wouldn't work correctly in a Team Create session. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash that would occur when there were many `Class.AudioEmitter.AudioInteractionGroup\|AudioEmitter` audio interaction groups. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in `Class.UserInputService.GetStringForKeyCode` that would return "A" (or keyboard equivalent) for unrecognized KeyCodes on MacOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where an `Enum.AnimationNodeType.ClipNode` with a large `Speed` value would cause Studio to hang. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Animation Graph Editor: Fixes a bug so that having the Script Editor open no longer blocks actions like delete. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Animation Graph Editor: Fixes a bug where dragging from an enum pin would create a broken parameter. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Animation Graph Editor: Fixes an error when pressing the delete/backspace button. |

