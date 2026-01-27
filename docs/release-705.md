# Release notes for 705

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Binary size reduction, varies by platform. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Removes the `reason` argument from the `Class.NetworkClient.ConnectionFailed` event. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves error message around `Class.AnimationTrack` limit being reached. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds an option for logging input to the Studio camera service to assist with debugging. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `print(meshPart.MeshContent)` will now include the `Datatype.Content` source type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue with the Input Action System registering mouse clicks on UI buttons and in-menu. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.KeyCode.Touch` for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, bidirectional inference of lambdas are now slightly less sensitive to generics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves support for importing an emissive map from `.fbx` files. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates hover types to be less verbose. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Type functions will no longer allow you to attempt to mutate top-level type aliases. This was never possible but you could previously write code that, confusingly, looked like it would do so. This will now raise an error. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a spurious strict mode script analysis warning that would pop up when calling `Datatype.UDim2.new()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, the error "Recursive type being used with different parameters" is now more precise. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.MaterialVariant.AlphaMode` beta feature to Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, hover type are now more accurate with respect to overloaded functions that can take type packs. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver's `strict` mode, no warning is issued when `nil` is assigned to `Class.Instance.Parent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a `Serialized` boolean to classes and the `Owner` classname to properties output by `Class.ReflectionService`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the appearance of thumbnails with transparent materials (like ice) to look more accurate and less washed out. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <kbd>I</kbd> as a hotkey to zoom in. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes the Input Action System `Enum.InputActionType.Direction3D` forward/backward to use right-handed coordinate system. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug caused by a `Class.FluidForceSensor` attached to an anchored part which led to some functionality of Studio being broken. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where the input audio device selection gets reset between play sessions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Logpoints are no longer ignored in non-yieldable code. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Attempting to set breakpoints on old script versions no longer leads to a crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Setting accessories on a `Class.Humanoid` with an `Class.AccessoryDescription` no longer uses `Class.AccessoryDescription.IsLayered\|IsLayered` set in the accessory data, and instead relies on a `Class.WrapLayer` existing under the `Handle`. This fixes a bug where `Class.AccessoryDescription.IsLayered\|IsLayered` should not be considered while setting. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds throttling to memory tracking logs to help avoid negative performance impact from ill-formed memory checks in code loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes dialog choices sometimes not showing up on Windows laptops with touch screen. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a case where script analysis was not properly suppressing type errors between values of type "any." |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, `Library.table.freeze()` now accepts `any` as an argument. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes a class of performance issues related to processing exceptionally large type aliases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, Roblox types will now participate in bidirectional inference of function statements. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, bidirectional inference of booleans is now more consistent, resulting in more singleton types of `true` and `false` when appropriate. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, refinements of unions of table members no longer erroneously simplify to a table with a union. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where calling `Class.AudioPlayer:GetWaveformAsync()` on a compressed in-memory asset could cause the playback to skip-ahead or rewind. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an exploit that allowed users to send their position updates to the server, but block forwarding to other players. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug that caused Luau's New Type Solver to mistakenly report missing optional properties as type mismatch errors. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a hypothetical vulnerability in physics data forwarding from server to clients. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Generic type parameters now show in Studio's hover tooltips. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Dragging objects from the **Toolbox** into the 3D viewport should no longer disrupt the position of an object you already had selected when starting the drag. |
