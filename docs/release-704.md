# Release notes for 704

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Removes the `reason` argument from the `NetworkClient.ConnectionFailed` event. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reimport now supports Decal instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Touch` as a KeyCode for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.MaterialVariants.AlphaMode` and the `Opaque` value to `Enum.AlphaMode`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Vector3Scale` to individually scale composite directions for `InputActions` with a `Direction3D` action type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Making `Class.InputAction:GetState()` threadsafe soon. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | WrapTextureTransfer will change the internal algorithm for occluding parts of a mesh to better fit cages that do not cover the entire mesh. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, bidirectional inference of lambdas are now slightly less sensitive to generics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, using a generic type pack as an annotation for a lambda will no longer cause said annotation to leak out of the function when called. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix a spurious strict mode Script Analysis warning that would pop up when calling `Class.UDim2.new()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | On Windows, Roblox and Roblox Studio will now update any taskbar entries you might have, no longer requiring they be updated every week. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, inference of function calls with generic type packs should be more consistent. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added Next-Gen Draggers beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver the error "Recursive type being used with different parameters" is now more precise. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added `Class.MaterialVariant.AlphaMode` beta feature to Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support to Luau for instantiating generic type parameters on functions by writing syntax like `f<<T, U>>`.<br><br>For example, if you have defined a function like:<br><br>```<br>local function array<T>(): {T}<br>return {}<br>end<br>```<br><br>You can now call it with a specific type by calling `array<<number>>()` to get a result of the type `{number}`. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fix a case where script analysis would warn on assignments to `Class.Instance.Parent` in strict mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes particles looking washed out on avatar thumbnails (such as from the Periastron gear series). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds throttling to memory tracking logs to help avoid negative performance impact from ill-formed memory checks in game code loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When `Class.UITextSizeConstraint.MaxTextSize` is smaller than `MinTextSize`, restrict text to `MinTextSize` instead of printing a warning. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in script editor caused by attempting to access a property in a read-only way, on a table where the property is write-only. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fix a class of performance issues related to processing exceptionally large type aliases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Add a type alias for `Class.HumanoidDescription:SetAccessories()` and `GetAccessories()` to enable better autocomplete. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with the Acoustic Simulation beta feature causing all audio to fall silent when huge values were passed into pathfinding calculations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix for a bug caused by a `Class.FluidForceSensor` attached to an anchored part which led to some of the functionality of Studio being broken. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, subtyping between Roblox API types and table types now respect indexers. This fixes *some* recent reports of ambiguous overloads. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, bidirectional inference of booleans is now more consistent, resulting in more singleton types of `true` and `false` when appropriate. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the input audio device selection gets reset between play sessions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix for a crash occurring in Server Authority Studio Beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an issue where loading an empty plugin into Studio could cause a crash. |
