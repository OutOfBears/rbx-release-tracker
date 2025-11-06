# Release notes for 693

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in the Input Action System where thumbsticks could override other bindings while in the deadzone. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: suppresses errors for overloads with arities that don't match the function call. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: updates primitive tables to be subtypes of generic tables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Loads Pathfinding Tiles by Bounding cylinder of the FindPath Extent. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Using Luau 'pcall' and 'xpcall' functions no longer counts towards the C call stack limit, extending potential recursion depth with protected calls from 200 to 20000 (note that 'pcall'/'xpcall' call itself still counts towards the Luau call stack limit). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: refining tables with indexers against external types (such as builtin Roblox types) no longer drops the table portion. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: fixes an issue where iterating over a function that returns an empty pack would cause type inference to fail to complete. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Renames `Enum.DeveloperMemoryTag.PhysicsParts` to `Enum.DeveloperMemoryTag.BaseParts`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes simulation slowdown when adding and removing child instances. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Microprofiler no longer incurs additional CPU overhead when turned off when previously enabled in the same client session. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes InputActionSytem Direction3D forward/backward to use right handed coordinate system. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows entity based culling of Models set as `StreamingMesh`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | A UIScale object now correctly scales its parent ImageLabel or ImageButton without affecting the TileSize property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that could cause pasted Shirt and Pants instances to desync their ShirtTemplate and PantsTemplate properties in Team Create. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.AirController` now adjusts to `Class.ControllerManager.UpDirection` changes, even while active. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue where modified attributes on the root of a package were not showing up in bold. |
