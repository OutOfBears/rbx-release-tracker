# Release notes for 701

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Added memory tracking stats for SLIM. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Deprecates nearly all yielding methods that did not end with `Async` and provides equivalent methods with `Async` in the name. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the following properties to the Sky object: `Class.Sky.MoonTextureContent\|MoonTextureContent`, `Class.Sky.SkyboxBackContent\|SkyboxBackContent`, `Class.Sky.SkyboxDownContent\|SkyboxDownContent`, `Class.Sky.SkyboxFrontContent\|SkyboxFrontContent`, `Class.Sky.SkyboxLeftContent\|SkyboxLeftContent`, `Class.Sky.SkyboxRightContent\|SkyboxRightContent`, `Class.Sky.SkyboxUpContent\|SkyboxUpContent`, and `Class.Sky.SunTextureContent\|SunTextureContent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves performance by lowering the cost of `updateInstancedCluster2` when using SLIM. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces three-phase rollout for fixed simulation frequency. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Vector3Scale` to individually scale composite directions for `InputActions` with a `Direction3D` action type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, generic user-defined type functions now infer types more consistently. Previously, constraints involving generic UDTFs could be incorrectly forced, causing type inference to give inconsistent results. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves performance of `Class.Instance:GetChildren()` by 30-65%. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves property access performance in Luau `--!native` code for `Vector2`, `CFrame`, `RaycastResult`, `UDim`, `Color3`, and `NumberRange` type values when locals are properly type-annotated. This can make property access performance up to 20x faster. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `math.isnan`, `math.isinf` and `math.isfinite` functions based on the Luau [math.isnan, math.isinf and math.isfinite for Math Library](https://rfcs.luau.org/math-isnan-isfinite-isinf.html) RFC. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the default `ScriptEditor` font to Builder Mono. Font size is now 12 for MacOS. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes the UV scaling for wedge model textures. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes the link in warning pop-up regarding unsupported graphics configurations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reparenting a `Class.ViewportFrame` to `nil` and back no longer stops the `ViewportFrame` from rendering. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds memory tracking log throttling to help avoid negative performance impact from ill-formed memory checks in game code loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a rare script analysis crash in Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug that caused `Axes.new` to fail to type check when valid arguments were passed in. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the Acoustic Simulation feature's pathfinding in wide-open spaces. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where creating or destroying a `HapticEffect` inside a non-deferred Lua signal could lead to a crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, type refinements resulting from comparisons are now more consistent, and should result in less inferences of `any`. |
