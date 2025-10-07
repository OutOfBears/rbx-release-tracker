# Release notes for 693

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: suppresses errors for overloads with arities that don't match the function call. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: updates primitive tables to be subtypes of generic tables. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | MicroProfiler counters now display a breakdown of Luau Heap memory use of each DataModel and VM group. Additionally, execution time of each VM will be displayed. 'lua/heap' group has been split into 'Luau/heap' and 'Luau/heap_core' to exclude plugin and core script memory use from the existing memory category. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.WrapDeformer\|WrapDeformers` can now attach under layered clothing meshes (for example, `Class.MeshPart\|MeshParts` that have `Class.WrapLayer` children instead of just `Class.WrapTarget` children). The difference between the `Class.WrapDeformer` cage and the `Class.WrapLayer` outer cage will deform the mesh before any layered clothing fitting. Layered clothing `Class.MeshPart\|MeshParts` deformed through the `Class.WrapDeformer` can be published just like deformed body-part `Class.MeshPart\|MeshParts`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in the Input Action System where thumbsticks could override other bindings while in the deadzone. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Loads Pathfinding Tiles by Bounding cylinder of the FindPath Extent. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the property `Class.Stats.MemoryTrackingEnabled`. This property checks the validity of the `Class.Stats:GetMemoryUsageMbForTag()` and `Class.Stats:GetMemoryUsageMbAllCategories()` methods, and the validity of the memory information in the Memory tab of the MicroProfiler and the Developer Console. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes UV issues on SLIM built-in materials. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a "Custom" option for particle flipbook layouts, allowing you to define custom numbers of columns and rows. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows 255 highlights in one scene. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves Decal support for SLIM. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds preview for `Class.AudioPlayer.AudioContent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Using Luau 'pcall' and 'xpcall' functions no longer counts towards the C call stack limit, extending potential recursion depth with protected calls from 200 to 20000 (note that 'pcall'/'xpcall' call itself still counts towards the Luau call stack limit). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: refining tables with indexers against external types (such as builtin Roblox types) no longer drops the table portion. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: fixes an issue where iterating over a function that returns an empty pack would cause type inference to fail to complete. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The `Class.GuiObject.MouseEnter` signal no longer fires before `Class.GuiObject.MouseLeave` when you quickly move the mouse from one `Class.GuiObject` to another `Class.GuiObject`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Renames `Enum.DeveloperMemoryTag.PhysicsParts` to `Enum.DeveloperMemoryTag.BaseParts`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes simulation slowdown when adding and removing child instances. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Microprofiler no longer incurs additional CPU overhead when turned off when previously enabled in the same client session. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows entity based culling of Models set as `StreamingMesh`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | BillboardGui CurrentDistance and DistanceStep are now properly implemented according to the documentation.  Properties DistanceLowerLimit, and DistanceUpperLimit will now be officially deprecated. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | A UIScale object now correctly scales its parent ImageLabel or ImageButton without affecting the TileSize property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that could cause pasted Shirt and Pants instances to desync their ShirtTemplate and PantsTemplate properties in Team Create. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where zoom level gets reset in vehicles and VR cameras upon `Class.UserInputService.PreferredInput` changing.  |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.AirController` now adjusts to `Class.ControllerManager.UpDirection` changes, even while active. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with multiple replication foci that can prevent stream out of regions in some situations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes InputActionSytem Direction3D forward/backward to use right handed coordinate system. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue where modified attributes on the root of a package were not showing up in bold. |
