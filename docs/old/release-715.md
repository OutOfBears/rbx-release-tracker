# Release notes for 715

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Significantly improves performance for large filter lists that use `ExcludeInstances` or `IgnoreInstances`, with up to 10x faster performance than FilterDescendantsInstances when using 10,000 instances in `ExcludeInstances`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates the error message in `ContentBridge::fromObject` when you try to create `Content`  from `nil` . |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Releases beta version of device blocking for the Creator Ban API. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the messages for Data Store Request Queued Warning. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.SoundService.GetMixerTime\|GetMixerTime` and optional timestamps to `Class.AudioPlayer.Play\|Play` and `Class.AudioPlayer.Stop\|Stop`. This allows audio to be scheduled to start and stop at sample-accurate, frame rate-independent times. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the Luau New Type Solver, fixes a crash that could occur when using generics and type functions, specifically the `index` and `keyof` type functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes plugin debugging functionality when running plugins during place load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds ProceduralModel Instance type. ProceduralModel is the entrypoint for edit time procedural objects, which can generate Instances in response to parameter changes. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Caps stack depth of in-game microprofiler to avoid buffer overrun crash. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Automatically selects the `RobustRetargeter` when `Class.HumanoidRigDescription` data is present in an `AnimationRig`, while maintaining backward compatibility with legacy rigs. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash that would happen when exporting ` .obj`  files. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where very large mesh parts could be treated as persistent in streaming enabled experiences. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `Class.AudioPlayer.TimePosition` and `Class.Sound.TimePosition` could get stuck at `Class.Sound.PlaybackRegion.Max` and `Class.AudioPlayer.PlaybackRegion.Max`, respectively. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where Acoustic Simulation's diffraction pathfinding would sometimes path through walls without applying any muffling. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a rare crash that can occurr when `AudioPlayer:GetWaveformAsync` aggressively downsamples long files. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes geometry of ball-shaped `Part` instances that are parented to the player. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the Luau New Type Solver, type errors are now clearer when passing unsupported types to type functions. |

