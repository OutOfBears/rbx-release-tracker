# Release notes for 709

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds KeyCode `MouseDelta` to be used in the Input Action System as a transformed velocity under a `Direction2D` action type. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | SLIM support for Classic Clothing on Platform Avatars. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `InputBinding` calculation so that state is exclusively calculated from `KeyCode` or `UIButton` / composite directions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds ability to change server-level Data Stores rate limits per `DataStoreRequestType`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.AccessoryDescription.AssetId`, `Class.Pants.PantsTemplate`, `Class.Shirt.ShirtTemplate`, `Class.ShirtGraphic.Graphic`, `Class.BodyPartDescription.AssetId`, `Class.CharacterMesh.MeshId`, `Class.CharacterMesh.BaseTextureId`, `Class.CharacterMesh.OverlayTextureId`, `Class.Clothing.Outfit1`, and `Class.Clothing.Outfit2`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for upcoming `require("@rbx/AvatarAbilities")` library. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes a bug where partially annotated local variable initialization would incorrectly infer types for unannotated locals. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Removes the option to disable the Debugger in Roblox Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reassigns Capabilities for `MaterialVariant`, `Humanoid`, `RayValue`, and `AnalyticsService`. Also assigns Capabilities to more classes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | More classes are now accessible to sandboxed instances. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in the Adaptive Animation Beta program where parts attached to the Root part couldn't be animated. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `:Clone`ing a `Class.Wire` would print an error message, even if the wire hasn't yet been parented into the DataModel. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Calling `UIPageLayout:JumpTo(nil)` no longer causes a crash. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves Acoustic Simulation performance in very part-dense scenes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where switching `Enum.CollisionFidelity` could cause Studio to be unresponsive on slow networks. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves tab switching performance for the new Studio ribbon. |
