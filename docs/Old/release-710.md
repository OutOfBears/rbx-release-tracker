# Release notes for 710

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds property `ClampMagnitudeToOne` on `Class.InputBinding` to control whether composite direction calculations are clamped. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows shared assets to be loaded to Editables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Rotation` property to `Class.Texture` and `Class.Decal` instances to support UV map rotations. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where trails far from the origin would render with fewer segments and appear low resolution. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes blurry text rendering caused when `Class.TextLabel.TextSize\|TextSize` is set to a non-integer value by a `Class.StyleRule`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, allows intersection types that extend the shape of a given Roblox API type. For example, `Accessory & { Handle: BasePart }` is now treated as an `Accessory` extended with a `Handle` property of the type `BasePart`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where skinned meshes could explode when positioned far from the origin. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where rapidly changing a part’s `CFrame` could cause incorrect culling. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where sometimes calling `StudioTestService:EndTest()` on the first frame of a test session failed to end the test. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `UITableLayout` sometimes incorrectly sized descendants when `FillEmptySpaceRows` or `FillEmptySpaceColumns` was set to `true`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Removes invisible sun reflection artifacts on glass when a highlight is applied. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the incorrect `ParticleEmitter` orientation in `VelocityPerpendicular` mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes rendering of transparent avatars with highlights. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves accounting of texture memory in the Developer Console. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where downsampling thin water voxels could cause water to be removed. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in autocomplete that could occur when using user-defined type functions to create tables with write-only properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for saving `AnimationGraphEditor` instances (`AssetType::Animation`). |

