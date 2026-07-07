# Release notes for 724

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Added `UIShadow.Enabled`, allowing `UIShadow`s to be individually toggled. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | When deleting or renaming attributes in the Generator module of a ProceduralModel, Studio will automatically remove the old attributes from the ProceduralModel to avoid stale attributes accumulating as you edit. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The `export` keyword has been extended to support variables and functions. This works by constructing an export table and returning it from the module with the respective fields set, providing a new, consistent way for users to expose a stable API from a module. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves terrain handling. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a read only Studio UI property `IsInSandbox` to sandbox-able instances. This property represents if the given instance or its ancestors has sandboxing enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.AvatarEditorService:PromptCreateOutfit` now accepts two new optional parameters (`outfitOptions` and `outfitType`) that let you create Makeup outfits in addition to regular Avatar outfits. When outfitType is omitted, the engine infers the correct type from the HumanoidDescription contents. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds "Segment By Part" beta feature. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improve error messages for Sandboxing & Capabilities interactions |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `TextLabel` with auto-scaled rich text may disappear under small scales. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes animation graph bug where a sequence or select node (`Enum.AnimationNodeType.SequenceNode`, `Enum.AnimationNodeType.PrioritySelect`, `Enum.AnimationNodeType.RandomSequenceNode`, `Enum.AnimationNodeType.Select`) do not advance with a 0-duration clip. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug with `Class.CurveAnimation`, where adding a marker on the last keyframe of a curve didn't fire. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes thumbstick directional keycodes in the Input Action System to apply Response Curve and Deadzone calculations properly. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue causing some properties of the following types to have incorrect default values when created in Studio: `Sound`, `BloomEffect`, `UIGridLayout`, `UIListLayout`, `UIPageLayout`, `UITableLayout`, `UIShadow`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `Class.AudioListener` would flip its front/back channels in surround-sound formats. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Output Window now stacks prints that include links to Instances (e.g. "▶ Baseplate (x2)"). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, type inference of function statements on tables are now more tolerant to generic functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM rendering visible from inside large buildings. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where a client could fail to create a tool weld after re-equipping. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where rejoining voice chat could bypass the Audio API (e.g. `Class.AudioDeviceInput`). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a pop-up when a user is kicked from a play test that mirrors the message a player receives in-game. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Animation Graph Editor: Fixed crash when graph contains a clip you don't have permissions for |

