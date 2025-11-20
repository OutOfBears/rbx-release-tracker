# Release notes for 700

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a built-in require-by-string alias that always points to the root of the `Class.DataModel`: `@game`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, `Library.table.isfrozen()` and `Library.table.clear()` functions should now more consistently accept unions of tables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When the "Acoustic Simulation" beta feature is enabled, reduces the overhead from moving parts. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Creates new, separate 2500 requests/minute limit in `Class.HttpService` for Open Cloud requests. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, prevents a class of crashes during inference when dealing with exceptionally large types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Resolves issue of being unable to load `.rbxlx` files in some cases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for `:not(...)`, `:has(...)` and `[$AttributeExists]` selectors to `Class.Instance:QueryDescendants()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Supports require-by-string access to non-service instances that are parented directly to the root of the `Class.DataModel`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, generics will be instantiated to more specific types when valid. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where `Class.EncodingService:Base64Decode()` allowed malformed data to be successfully decoded with no error. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.GroupService:PromptJoinAsync()` to prompt a player to join a community in-experience. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves Luau buffer handling speed in `Class.HttpService:JSONEncode()` by 20-70% and in `Class.HttpService:JSONDecode()` by 20-140%. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where a `Class.ModuleScript` could have been parented outside of the Sandbox container without sufficient capabilities. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Deprecates nearly all yielding methods that did not end with `Async` and provides equivalent methods with `Async` in the name. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Changes `Class.SurfaceLight` to not make grass glow excessively when placed on large parts. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates the return type of `Class.Teams:GetTeams()` to an array of `Class.Team` objects instead of generic `Class.Instance\|Instances`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, explicitly defined generic pack arguments are now respected (previously they were ignored entirely). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an autocomplete issue where anonymous functions with generic types were incorrectly suggested as arguments to higher-order functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Table `__tostring` metamethod will now be called for table keys in Output and other locations where a string representation is required. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.UIScale` may sometimes not apply to some UI instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug where `Class.DataModel.Close` signals weren't being executed if using deferred signals. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue with `Class.WireframeHandleAdornment` text not being relative to the adornee. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds memory tracking log throttling to help avoid negative performance impact from ill-formed memory checks in game code loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, changes the signature for `types.newtable` to allow optional parameters. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.UIStroke` line join mode is not respected when the `Class.GuiObject` has rounded corners. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Caches `Class.AudioEmitter` and `Class.AudioListener` `CFrames` per-frame to speed up panning-related 3D math. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where `Class.AudioEmitter\|AudioEmitters` and `Class.AudioListener\|AudioListeners` parented to `Class.Camera\|Cameras` would use their `CFrame` instead of their rendering-`CFrame`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes incorrect autocomplete suggestions for manually renamed services in require-by-string paths. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the link in warning pop-up regarding unsupported graphics configurations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Explorer not working with debugger if a breakpoint hit on startup. |
