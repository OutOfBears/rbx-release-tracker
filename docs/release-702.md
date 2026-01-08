# Release notes for 702

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Removes clipping/distortion from `Class.AudioListener` when `Class.AudioEmitter\|AudioEmitters` are not creating feedback loops. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Updates the behavior of type functions to not signal an irreducible error when there's already a more specific error from the type function. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `string.char` and `string.sub` function calls can now be optimized to a string constant if the arguments are constants. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Resolves a potential crash when using type instantiation expressions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Deprecates nearly all yielding methods that did not end with `Async` and provides equivalent methods with `Async` in the name. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Overload resolution is now slightly more principled during type inference. Previously would attempt to unify arguments with all of the possible overloads, which would often select an overload at random. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves performance by lowering the cost of `updateInstancedCluster2` when using SLIM. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces three-phase rollout for fixed simulation frequency. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support to Luau for instantiating generic type parameters on functions by writing syntax like `f<<T, U>>`.<br><br>For example, if you have defined a function like:<br><br>```<br>local function array<T>(): {T}<br>return {}<br>end<br>```<br><br>You can now call it with a specific type by calling `array<<number>>()` to get a result of the type `{number}`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Indexing into a table with an indexer who's keys are string singletons will now infer the indexer result type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau autocomplete will now show string singleton keys when indexing into tables with a name expression, as in `A.B` |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau compiler will inline function calls with constant arguments more often if those constants considerably simplify the called method body (cause branches to be removed). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Improves error message associated with indexing into a union where a member is not a table. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Optimizes the animation system for large articulated rigs. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where players would push each other off moving platforms even when their collision groups are set not to collide. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes false culling for some skinned meshes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes flakiness in `AudioSpeechToText` instantiation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes staggered particle emission in continuous particle streams. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Smoothing Angle not functioning in Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: refinements against types no longer cause spurious errors in nonstrict mode, such as being unable to pass a refined `string` to string library methods |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where text in Microprofiler and performance windows could take a long time to appear. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Emissive maps beta: Fixes a crash when importing a 3D model with missing files or broken content. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Fixes hangs that could occur when trying to infer exceptionally large intersection types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that allowed players to send messages with excessive amounts of whitespace. |
