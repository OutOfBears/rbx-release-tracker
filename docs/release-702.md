# Release notes for 702

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, resolve a potential crash when using type instantiation expressions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Deprecates nearly all yielding methods that did not end with `Async` and provides equivalent methods with `Async` in the name. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the following properties to the Sky object: `Class.Sky.MoonTextureContent\|MoonTextureContent`, `Class.Sky.SkyboxBackContent\|SkyboxBackContent`, `Class.Sky.SkyboxDownContent\|SkyboxDownContent`, `Class.Sky.SkyboxFrontContent\|SkyboxFrontContent`, `Class.Sky.SkyboxLeftContent\|SkyboxLeftContent`, `Class.Sky.SkyboxRightContent\|SkyboxRightContent`, `Class.Sky.SkyboxUpContent\|SkyboxUpContent`, and `Class.Sky.SunTextureContent\|SunTextureContent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, overload resolution is now slightly more principled during type inference. Prior we would attempt to unify arguments with all of the possible overloads, which would often select an overload at random. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds Touch as a KeyCode for the Input Action System |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Studio: Added AlphaMode to MaterialVariants and added Opaque mode to AlphaMode field. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves performance by lowering the cost of `updateInstancedCluster2` when using SLIM. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces three-phase rollout for fixed simulation frequency. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Vector3Scale` to individually scale composite directions for `InputActions` with a `Direction3D` action type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support to Luau for instantiating generic type parameters on functions by writing syntax like `f<<T, U>>`.<br><br>For example, if you have defined a function like:<br><br>```<br>local function array<T>(): {T}<br>return {}<br>end<br>```<br><br>You can now call it with a specific type by calling `array<<number>>()` to get a result of the type `{number}`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Removes clipping/distortion from `Class.AudioListener` when `Class.AudioEmitter\|AudioEmitters` are not creating feedback loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the Luau New Type Solver, indexing into a table with an indexer who's keys are string singletons will now infer the indexer result type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau autocomplete will now show string singleton keys when indexing into tables with a name expression, as in `A.B` |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, updates the behavior of type functions to not signal an irreducible error when there's already a more specific error from the type function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `string.char` and `string.sub` function calls can now be optimized to a string constant if the arguments are constants. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau compiler will inline function calls with constant arguments more often if those constants considerably simplify the called method body (cause branches to be removed). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, the error message associated with indexing into a union where a member is not a table is now slightly more informative. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Optimized the animation system for large articulated rigs. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes false culling for some skinned meshes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix an issue with particles looking washed out on avatar thumbnails (such as from the Periastron gear series). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed a bug where players would push each other off moving platforms even when their collision groups are set not to collide. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds memory tracking log throttling to help avoid negative performance impact from ill-formed memory checks in game code loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix flakiness in AudioSpeechToText instantiation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Meshes with corrupted collision data can no longer have arbitrarily large ExtentsSize. ExtentsSize is now clamped to 2048 studs in all directions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix staggered particle emission in continuous particle streams. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed Smoothing Angle not functioning in Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, refinements against types no longer cause spurious errors in nonstrict mode, such as being unable to pass a refined `string` to string library methods |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an issue where text in Microprofiler and performance windows could take a long time to appear. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix a crash when importing a 3D model with missing files or broken content while enrolled in emissive maps Studio beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fix hangs that could occur when trying to infer exceptionally large intersection types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that allowed players to send messages with excessive amounts of whitespace. |
