# Release notes for 734

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a new Instance type called `ViewportCamera` that inherits from `Class.Camera` but replicates, allowing it to be used without issue for ThumbnailCameras in Team Create and `Class.ViewportFrame` objects set up at design time. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Moves collision group APIs from `Class.PhysicsService` to `Class.WorldRoot` so that each `Class.WorldModel` can register and configure its own collision groups independently of `Class.Workspace`. Enable `Class.WorldModel.UseWorkspaceCollisionGroups\|UseWorkspaceCollisionGroups` to have a `Class.WorldModel` use `Class.Workspace` collision groups for simulation instead of its own. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the language of the error diagnostics for type mismatch errors in Luau to be more succinct and easier to understand. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an issue where inferring an indexer on a table would result in `unknown` rather than the actual indexer type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces a new Studio Beta called Collections. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows the `AnimationId` field in the `Enum.AnimationNodeType.ClipNode` to connect to a parameter and set at runtime via `Class.AnimationTrack.SetParameter\|AnimationTrack:SetParameter`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows the use of `pcall` and `xpcall` inside Luau's user-defined type functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes the parameter count limit for an animation graph from a hard limit that prevents the graph from playing to a soft limit that allows the graph to continue with a warning about incompatibility with Server Authority. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Significant optimizations to notifyVisuallyMoving. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where assigning `Class.Sound.PlaybackRegion` and `Class.AudioPlayer.PlaybackRegion` could stall the audio engine. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes OverlapParams not being sent via `Class.Actor:SendMessage`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where animation retargeting could produce incorrect results when avatar limbs are missing. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in `Class.Workspace.PlayerScriptsUseInputActionSystem` player scripts where the TouchJump button occasionally started invisible. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where accessory `Class.SurfaceAppearance.Color` was not applied in the website 3D catalog view. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Automatically predict (`Enum.PredictionMode.On`) unstitched instances created in `Class.RunService.BindToSimulation\|BindToSimulation`, unless overridden by `Class.RunService:SetPredictionMode`. When stitched, the instances will default back to `Enum.PredictionMode.Automatic`, unless they've been overridden. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where looping sounds could loop-back prematurely. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.InputAction` objects would incorrectly fire signals on rollback. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, we now correctly report type mismatches with the correct location on a function call that is passed as an argument to another function call, and the receiving function expects a different type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where changing `Class.SoundService.RolloffScale` might not affect a `Class.Sound` until it or the listener moves. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where right-clicking on Mac Studio sometimes wouldn't close context menus. |

