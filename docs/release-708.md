# Release notes for 708

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds `Class.MaterialVariant.AlphaMode` beta feature to Studio. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a `Serialized` boolean to classes and the `Owner` classname to properties output by `Class.ReflectionService`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | ScrollingFrame scroll rate when using a mouse wheel has been decreased down to a value more in line with native platform behavior. The scroll rate was adjusted gradually over the past few months, with the current scroll rate being the final one it will be kept at. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds KeyCode `MouseDelta` to be used in the Input Action System as a transformed velocity under a `Direction2D` action type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds KeyCodes `MouseWheel`, `TrackpadPan`, and `TrackpadPinch` to be used in the Input Action System as transformed velocities under the `Direction` action types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.KeyCode.Touch` for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds Doppler simulation to Sounds when the "Sound as a Shim" beta feature is enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added support for upcoming require("@rbx/AvatarAbilities") library. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, recursive functions defined on table members are now more consistently inferred. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, naming aliases the same as built in types such as `number` is now disallowed. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes exploding skinned meshes issues when skinned meshes are positioned very far from the origin. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Humanoid health bar no longer renders "negative" health, which can be observed as a health bar that extends leftward. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where zoom level gets reset in vehicles and VR cameras upon `Class.UserInputService.PreferredInput` changing. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Passing a server-accessible only `Object` (non-`Instance`) via a `Class.RemoteEvent` or `Class.RemoteFunction` no longer throws an error; the client receives `Nil` for the corresponding argument. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a division-by-zero error during wedge UV calculations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes incorrect reporting of <kbd>Command</kbd> keys on Mac. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes regression where StarterCharacter `Class.Humanoid.HipHeight` was overridden with negative values. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed a rare crash in Acoustic Simulation's diffraction pathfinding. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in game pass ownership checks, improving server stability for experiences using game passes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | MaterialVariant AlphaMode: Fix transparency behavior with Opaque mode and SurfaceAppearance. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The F key can once again be used to focus on the selection in server views of a place while testing. |
