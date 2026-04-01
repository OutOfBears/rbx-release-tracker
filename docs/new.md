# Release notes for 714

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where the Audio API's `WiringChanged` events often receive a `nil` wire. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Releases beta version of device blocking for the Creator Ban API. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the UX of enabling Server Authority under Workspace. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Class.UIShadow` component, which adds drop shadows to parent UI instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Scaling an avatar with layered clothing no longer retriggers layered clothing fitting, resulting in significantly improved performance. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `SensedMaterial` to `Class.ControllerManager.GroundSensor\|GroundSensor`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Significantly improves performance for large filter lists that use `ExcludeInstances` or `IgnoreInstances`, with up to 10x faster performance than FilterDescendantsInstances when using 10,000 instances in `ExcludeInstances`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.SoundService.GetMixerTime\|GetMixerTime` and optional timestamps to `Class.AudioPlayer.Play\|Play` and `Class.AudioPlayer.Stop\|Stop`. This allows audio to be scheduled to start and stop at sample-accurate, frame rate-independent times. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the error message in `ContentBridge::fromObject` when you try to create `Content`  from `nil` . |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new `RenderBreakdown` category to the `Class.Stats` service, including new triangle and draw call breakdowns such as Opaque, Transparent, Terrain, Grass, and Particles. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adding "Graph Editor" ribbon button in Avatar tab |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash that would happen when exporting ` .obj`  files. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.ScreenGui\|ScreenGuis` with nested `Class.UIPadding` and `Class.UIScale` would add unintended right and bottom padding when only left and top padding were set and the `UIScale` value was not 1. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.UITableLayout` sometimes incorrectly sized descendants when `FillEmptySpaceRows` or `FillEmptySpaceColumns` was set to `true`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Executing remote events that are not attached to the DataModel no longer has an error message. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.UIScale` objects now correctly scale their parent `Class.ImageLabel` or `Class.ImageButton` without affecting the `TileSize` property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM handling of legacy Surface Types on `Class.SpecialMesh` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Automatically selects the `RobustRetargeter` when `Class.HumanoidRigDescription` data is present in an `AnimationRig`, while maintaining backward compatibility with legacy rigs. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug that caused a crash by setting a breakpoint on native compiled function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a fix for an audio crash on Mac. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.AudioPitchShifter` would briefly play a portion of the previous audio stream when a new stream was played. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a small volume boost in the pitch shifter effects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes incorrect AO application for transparent materials, and fixes AO artifacts for `Class.MaterialVariant.AlphaMode\|AlphaMode`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: read-only properties now produce type errors when written to via a compound assignment. For example, `dog.barks += 67`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where very large mesh parts could be treated as persistent in streaming enabled experiences. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where filtered-out links in the Output Window were still clickable. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the option to pre-select the owner group in Studio's "Save to Roblox" dialog. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Explorer now more consistently shows the correct context menu, especially when right-clicking previously unselected instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adding an Attachment parented directly to the Workspace no longer causes performance issues in larger places. |

