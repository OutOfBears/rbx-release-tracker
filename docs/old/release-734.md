# Release notes for 734

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a new Instance type called `ViewportCamera` that inherits from `Class.Camera` but replicates, allowing it to be used without issue for ThumbnailCameras in Team Create and `Class.ViewportFrame` objects set up at design time. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Moves collision group APIs from `Class.PhysicsService` to `Class.WorldRoot` so that each `Class.WorldModel` can register and configure its own collision groups independently of `Class.Workspace`. Enable `Class.WorldModel.UseWorkspaceCollisionGroups\|UseWorkspaceCollisionGroups` to have a `Class.WorldModel` use `Class.Workspace` collision groups for simulation instead of its own. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New entry point for Collections API. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Classes and services with `AcousticSimulationEnabled`, such as `Class.SoundService`, now have subcategories where you can enable or disable `Occlusion` and `Reverb` independently. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows `Class.TextBox` objects with `TextEditable` = `false` to copy the `Class.TextBox.Text` on mobile devices without showing the native keyboard. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds new `Class.EditableImage` function called `SampleImageProjected` that's the opposite of `Class.EditableImage.DrawImageProjected\|DrawImageProjected`, with the projection defining how to sample texels from the source texture onto the decal texture. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds additional `Class.EditableImage` blending mode: `ImageCombineType.Subtract`. Subtract subtracts source image color and alpha from the destination image. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.UIShadow.Inset`,  which allows you to specify a `UIShadow` to be rendered above and within the parent element, and `UIShadow.ShowBehindParent`, which allows you to show or hide the part of `UIShadow` that's behind the parent element. |
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
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New `InputSink` property for UI that allows for the deprecation of the "Active" property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves mouse click handling on Xbox. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where animation retargeting could produce incorrect results when avatar limbs are missing. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in `Class.Workspace.PlayerScriptsUseInputActionSystem` player scripts where the TouchJump button occasionally started invisible. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where accessory `Class.SurfaceAppearance.Color` was not applied in the website 3D catalog view. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where clients running above 60FPS would encounter more movement mispredictions when `Class.Workspace.AuthorityMode` was set to `Server`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue where the Windows system’s keyboard layout would switch to English on launch for players who didn’t have US QWERTY installed. The active input language is now left untouched, so typing in chat and search uses your own layout. Keybinds such as WASD continue to follow physical key positions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Automatically predict (`Enum.PredictionMode.On`) unstitched instances created in `Class.RunService.BindToSimulation\|BindToSimulation`, unless overridden by `Class.RunService:SetPredictionMode`. When stitched, the instances will default back to `Enum.PredictionMode.Automatic`, unless they've been overridden. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where looping sounds could loop-back prematurely. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where assigning `Class.Sound.PlaybackRegion` and `Class.AudioPlayer.PlaybackRegion` could stall the audio engine. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.InputAction` objects would incorrectly fire signals on rollback. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, we now correctly report type mismatches with the correct location on a function call that is passed as an argument to another function call, and the receiving function expects a different type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where changing `Class.SoundService.RolloffScale` might not affect a `Class.Sound` until it or the listener moves. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes OverlapParams not being sent via `Class.Actor:SendMessage`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where right-clicking on Mac Studio sometimes wouldn't close context menus. |

