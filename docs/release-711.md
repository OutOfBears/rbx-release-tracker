# Release notes for 711

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Renames two Capabilities: "Avatar" -> "AvatarAppearance" and "AssetRequire" -> "LoadUnownedAsset". |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reassigns four classes' security from Avatar to AvatarBehavior. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the KeyCodes `MouseWheel`, `TrackpadPan`, and `TrackpadPinch` for use in the Input Action System as transformed velocities under the `Direction` action types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Releases beta version of device blocking for the Creator BAN API. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Class.UIShadow` component, which adds drop shadows to parent UI instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces new `const` keyword for declaring local variables. It can be used in any position `local` is used. After variable is declared, it cannot be reassigned later but can be shadowed with new declaration. More details in RFC: [https://github.com/luau-lang/rfcs/pull/166](https://github.com/luau-lang/rfcs/pull/166). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Scaling an avatar with layered clothing no longer retriggers layered clothing fitting and should be significantly faster. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.Workspace.LayeredClothingCacheOptimizations` property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Implements several new math constants: `math.nan`, `math.e`, `math.phi`, `math.sqrt2`,  and `math.tau`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.Instance:GetFullName()` is slightly faster and can handle arbitrarily deep instance hierarchies. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.ParticleEmitter.FlipbookBlendFrames` property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates `ComposeDecalAsync` to a `void` function that takes in a `Decal` in input parameters. Only available in the Studio Makeup Beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: `string.format` no longer produces a type error when an unknown string is provided as the format string. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `FIntRenderTextureDebugVisualization` variable to control the render texture debug visualization mode. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reparenting a `Class.ViewportFrame` to `nil` and back no longer stops the `ViewportFrame` from rendering. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: fixes a class of bugs where Luau would not retain reasonable upper or lower bounds on free types, resulting in types snapping to never or unknown despite having obvious bounds. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with cylinder part UVs being rotated 180 degrees on the back face |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with clouds shadows looking noisy during sunrise and sunset. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes shading with normal maps. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Executing remote events that are not attached to the DataModel no longer has an error message. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `LockedToPart` property on `Class.ParticleEmitter` didn't work correctly in all cases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `SpecialMeshes` now correctly show their assigned materials and `MaterialVariants`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: resolves an issue where "attempting to modify bounds of a potentially visited generic" could occur when working with sufficiently complex generic types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes false culling on VR. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `ViewportDisplaySize` could report incorrect sizes on large-screen devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: simplification of table types has been rewritten. The downstream effect should be fewer "unreduced" types like { x: number } \| { x: number }, especially for data-like arrays (extremely large tables that have the same element of a given type). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes potential false culling of parts and characters. |
