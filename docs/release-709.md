# Release notes for 709

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds ability to change server-level Data Stores rate limits per `DataStoreRequestType`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows shared assets to be loaded to Editables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds KeyCode `MouseDelta` to be used in the Input Action System as a transformed velocity under a `Direction2D` action type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.AccessoryDescription.AssetId`, `Class.Pants.PantsTemplate`, `Class.Shirt.ShirtTemplate`, `Class.ShirtGraphic.Graphic`, `Class.BodyPartDescription.AssetId`, `Class.CharacterMesh.MeshId`, `Class.CharacterMesh.BaseTextureId`, `Class.CharacterMesh.OverlayTextureId`, `Class.Clothing.Outfit1`, and `Class.Clothing.Outfit2`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds property `ClampMagnitudeToOne` on `Class.InputBinding` to control whether composite direction calculations are clamped. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for upcoming `require("@rbx/AvatarAbilities")` library. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | SLIM support for Classic Clothing on Platform Avatars. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes a bug where partially annotated local variable initialization would incorrectly infer types for unannotated locals. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `InputBinding` calculation so that state is exclusively calculated from `KeyCode` or `UIButton` / composite directions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Removes the option to disable the Debugger in Roblox Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reassigns Capabilities for `MaterialVariant`, `Humanoid`, `RayValue`, and `AnalyticsService`. Also assigns Capabilities to more classes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | More classes are now accessible to sandboxed instances. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where switching `Enum.CollisionFidelity` could cause Studio to be unresponsive on slow networks. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes blurry text rendering caused when `Class.TextLabel.TextSize\|TextSize` is set to a non-integer value by a `Class.StyleRule`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in the Adaptive Animation Beta program where parts attached to the Root part couldn't be animated. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `:Clone`ing a `Class.Wire` would print an error message, even if the wire hasn't yet been parented into the DataModel. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Calling `UIPageLayout:JumpTo(nil)` no longer causes a crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, simplification of table types has been rewritten. The downstream effect should be fewer "unreduced" types like { x: number } \| { x: number }, especially for data-like arrays (extremely large tables that have the same element of a given type). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves Acoustic Simulation performance in very part-dense scenes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves tab switching performance for the new Studio ribbon. |
