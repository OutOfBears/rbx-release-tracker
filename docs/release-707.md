# Release notes for 707

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Opaque `*Content` in Studio is now shown as `Content` instead of blank in the **Properties** window. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves error message around `Class.AnimationTrack` limit being reached. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds tooltip descriptions to new Capability groups. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allow shared assets to be loaded to Editables |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue with the Input Action System registering mouse clicks on UI buttons and in-menu. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds KeyCodes `MouseWheel`, `TrackpadPan`, and `TrackpadPinch` to be used in the Input Action System as transformed velocities under Direction action types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Input Action System:  Touch keycode can now be used in InputBinding to trigger InputAction of type bool. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.KeyCode.Touch` for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When a script running in a Sandboxed instance with `AccessOutsideWrite` capability attempts to re-parent something outside the isolated container, it no longer throws an error and will instead make child Sandboxed with the same capabilities. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, using a generic type pack as an annotation for a lambda will no longer cause said annotation to leak out of the function when called. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a spurious strict mode script analysis warning that would pop up when calling `Datatype.UDim2.new()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.MaterialVariant.AlphaMode` beta feature to Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in script debugging so that when a debugger break is hit, all other Luau threads immediately stop executing to keep the experience's state consistent. All threads resume normal execution when the debugger continues. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Replaces the legacy implementation of `Class.Sound\|Sounds` with internal audio wiring API instances when the **Sound as a Shim** beta feature is enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a `Serialized` boolean to classes and the `Owner` classname to properties output by `Class.ReflectionService`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Solid modeling now attempts to remove unnecessary geometry, reducing triangle counts in many cases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `GetMethodsOfClass` and `GetEventsOfClass` to `Class.ReflectionService`, which return reflection information about instance methods and events. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the appearance of thumbnails with transparent materials (like ice) to look more accurate and less washed out. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Watch expressions are no longer cleared on place save. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Humanoid health bar no longer renders "negative" health, which can be observed as a health bar that extends leftward. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue with `Class.WireframeHandleAdornment` text not being relative to the adornee. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Passing a server-accessible only `Object` (non-`Instance`) via `RemoteEvent` or `RemoteFunction` no longer throws an error; the client receives `Nil` for the corresponding argument. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a division-by-zero error during wedge UV calculations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes incorrect reporting of <kbd>Command</kbd> keys on Mac. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where disabling and re-enabling `Class.IKControl` with `Class.IKControl.Type\|Type` of `Enum.IKControlType.LookAt` led to initial jitter on the part. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes potential false culling of parts and characters that are far from the origin. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes regression where StarterCharacter `Humanoid.HipHeight` was overridden with negative values. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Incorrect Occlusion Culling For SpecialMeshes with Negative Scaling. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes viewport issues when the **Device Emulator** is active. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Device Emulator dropdown menu from truncating text. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates several error messages incorrectly referring to "Game Settings" to "Experience Settings". |
