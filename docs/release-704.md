# Release notes for 704

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Removes the `reason` argument from the `NetworkClient.ConnectionFailed` event. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds `Vector3Scale` to individually scale composite directions for `Class.InputAction\|InputActions` of `Enum.InputActionType.Direction3D` action type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reimport now supports `Class.Decal` instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Touch` as a KeyCode for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.MaterialVariant.AlphaMode` and the `Enum.AlphaMode\|Opaque` value to `Enum.AlphaMode`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Making `Class.InputAction:GetState()` threadsafe soon. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes the algorithm for `Class.WrapTextureTransfer` for occluding parts of a mesh to better fit cages that do not cover the entire mesh. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, bidirectional inference of lambdas are now slightly less sensitive to generics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, using a generic type pack as an annotation for a lambda will no longer cause said annotation to leak out of the function when called. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a spurious strict mode script analysis warning that would pop up when calling `Datatype.UDim2.new()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | On Windows, Roblox and Roblox Studio will now update any taskbar entries you might have, no longer requiring they be updated every week. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, inference of function calls with generic type packs should be more consistent. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds **Next-Gen Draggers** beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, the error "Recursive type being used with different parameters" is now more precise. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.MaterialVariant.AlphaMode` beta feature to Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support to Luau for instantiating generic type parameters on functions by writing syntax like `f<<T, U>>`. This will allow you to, for example, instantiate a generic function named `array` with the type `<T>() -> {T}` by writing an expression like `array<<number>>()`. The resulting type would be `{number}` in this case. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a case where script analysis would warn on assignments to `Class.Instance.Parent` in strict mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes particles looking washed out on avatar thumbnails. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds throttling to memory tracking logs to help avoid negative performance impact from ill-formed memory checks in game code loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When `Class.UITextSizeConstraint.MaxTextSize` is smaller than `Class.UITextSizeConstraint.MinTextSize\|MinTextSize`, restricts text to that minimum instead of printing a warning. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in the Script Editor caused by attempting to access a property in a read-only way on a table where the property is write-only. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes a class of performance issues related to processing exceptionally large type aliases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Add a type alias for `Class.HumanoidDescription:SetAccessories()` and `Class.HumanoidDescription:GetAccessories()\|GetAccessories()` to enable better autocomplete. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with the **Acoustic Simulation** beta feature causing all audio to fall silent when huge values were passed into pathfinding calculations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes for a bug caused by a `Class.FluidForceSensor` attached to an anchored part which led to some of the functionality of Studio being broken. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, subtyping between Roblox API types and table types now respect indexers. This fixes some recent reports of ambiguous overloads. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, bidirectional inference of booleans is now more consistent, resulting in more singleton types of `true` and `false` when appropriate. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the input audio device selection gets reset between play sessions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes for a crash occurring in the **Server Authority Core API** Studio beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where loading an empty plugin into Studio could cause a crash. |
