# Release notes for 704

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reimport now supports `Class.Decal` instances. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds `Vector3Scale` to individually scale composite directions for `Class.InputAction\|InputActions` of `Enum.InputActionType.Direction3D` action type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.MaterialVariant.AlphaMode` and the `Enum.AlphaMode\|Opaque` value to `Enum.AlphaMode`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Making `Class.InputAction:GetState()` threadsafe soon. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes the algorithm for `Class.WrapTextureTransfer` for occluding parts of a mesh to better fit cages that do not cover the entire mesh. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, using a generic type pack as an annotation for a lambda will no longer cause said annotation to leak out of the function when called. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | On Windows, Roblox and Roblox Studio will now update any taskbar entries you might have, no longer requiring they be updated every week. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, inference of function calls with generic type packs should be more consistent. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support to Luau for instantiating generic type parameters on functions by writing syntax like `f<<T, U>>`. This will allow you to, for example, instantiate a generic function named `array` with the type `<T>() -> {T}` by writing an expression like `array<<number>>()`. The resulting type would be `{number}` in this case. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash in the Script Editor caused by attempting to access a property in a read-only way on a table where the property is write-only. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with the **Acoustic Simulation** beta feature causing all audio to fall silent when huge values were passed into pathfinding calculations. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a case where script analysis would warn on assignments to `Class.Instance.Parent` in strict mode. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes for a crash occurring in the **Server Authority Core API** Studio beta. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where loading an empty plugin into Studio could cause a crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes particles looking washed out on avatar thumbnails. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When `Class.UITextSizeConstraint.MaxTextSize` is smaller than `Class.UITextSizeConstraint.MinTextSize\|MinTextSize`, restricts text to that minimum instead of printing a warning. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, subtyping between Roblox API types and table types now respect indexers. This fixes some recent reports of ambiguous overloads. |
