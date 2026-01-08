# Release notes for 703

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the following properties to the Sky object: `Class.Sky.MoonTextureContent\|MoonTextureContent`, `Class.Sky.SkyboxBackContent\|SkyboxBackContent`, `Class.Sky.SkyboxDownContent\|SkyboxDownContent`, `Class.Sky.SkyboxFrontContent\|SkyboxFrontContent`, `Class.Sky.SkyboxLeftContent\|SkyboxLeftContent`, `Class.Sky.SkyboxRightContent\|SkyboxRightContent`, `Class.Sky.SkyboxUpContent\|SkyboxUpContent`, and `Class.Sky.SunTextureContent\|SunTextureContent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue with IAS registering mouse clicks on UI buttons and in menu. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds KeyCode properties PrimaryModifier and SecondaryModifier on InputBindings to trigger an action only when the modifier keys are presesd. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Touch` as a KeyCode for the Input Action System |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Studio: Adds `AlphaMode` to MaterialVariants and adds `Opaque` mode to `AlphaMode` field. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Vector3Scale` to individually scale composite directions for `InputActions` with a `Direction3D` action type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the phrasing on Luau's type mismatch errors to be both clearer, and more succinct. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Indexing into the result of the `setmetatable` type function is less likely to infer to `any` |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Fixes some instances of "Type inference failed to complete" when trying to infer the types of globals captured by multiple functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau type functions, the `unionof` and `intersectionof` functions will now flatten nested instances of their respective types. For example, `types.unionof(types.unionof(types.number, types.string), types.boolean)` will produce `number \| string \| boolean` as a single resultant union type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds autocomplete support for the built-in `@game` require alias. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds new `game.RunService` property so that developers no longer have to type out `game["Run Service"]` or `game:GetService("RunService")`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Adjusts generic instantiation to never select `never` or `unknown`, ensuring user always gets a useful type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Functions that accept nilable functions now have said types "pushed" into function literals. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When printed as a value in a Luau table, the `SecurityCapabilities` enum now displays the represented security state as a string instead of a numeric value. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: function statements that are assigning a member to a predefined table type are now checked. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where passing too many arguments to certain functions would not be properly flagged as a Script Analysis warning. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds HashChecks line to debug Network - LR Metrics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the appearance of thumbnails with transparent materials (like ice) to look more accurate and less washed out. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Roblox Studio's Script Analysis Widget, errors within a module now sort numerically rather than lexically. For example, an error on line 67 will now be listed before an error on line 127. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the save place dialog when closing a place with a new look, making it feel fresh and more modern! |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where changing `Class.AudioFilter.FilterType` to `Lowpass6dB` while the filter is in-use caused it to become unstable. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Ensure microprofiler displays memory categories when memory tracking is enabled. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed Explorer firing SelectionChanged more often than necessary |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Fixes a bug where explicit type annotations on `for ... in` loop variables were not being respected. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes particles looking washed out on avatar thumbnails (such as from the Periastron gear series). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Mouse cursor no longer changes to a pointing hand icon when clicking on inactive `GuiButton`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where malicious actors could use badly formed active:// animation ids to print malicious strings in the console of connected players. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes animation bug where animations weren't loaded on some clients on late join in some context when streaming was on. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Executing remote events that are not attached to the DataModel will now not have an error message |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds throttling to memory tracking logs to help avoid negative performance impact from ill-formed memory checks in game code loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Meshes with corrupted collision data can no longer have arbitrarily large `ExtentsSize`. `ExtentsSize` is now clamped to 2048 studs in all directions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in Luau's type system where type functions that returned types with generic type packs would sometimes cause Roblox Studio to crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Server Authority Studio Beta: immediate descendants of Workspace now will be properly automatically predicted. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Having an invalid Default Instances Dir will no longer cause Studio to crash on start under the User Provided Default Instances beta feature. This could happen if you had chosen a network drive which later became unavailable. |
