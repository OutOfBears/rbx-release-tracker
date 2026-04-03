# Release notes for 712

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, generic functions that take tables are now more permissive when passing in table literals, and autocomplete on generic functions is improved. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reduces the size of each `Class.Bone` instance by 48 bytes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `QueryDescendants` can now match enumeration properties to a string value. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Assign Capabilities to more classes |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Marks `Class.DataStore:RemoveVersionAsync()` as deprecated. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.KeyCode.Touch` for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fix a bug where type function reduction would get "stuck" at the end of type inference when dealing with recursive type functions like `t1 where t1 = add<t1 \| number, t1 \| number>`. This should help somewhat with memory pressure and marginally speed up type checking. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Studio Camera Controls beta, makes the camera speed lock persistent. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes false culling on VR. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes potential false culling of parts and characters. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes floating grass geometry. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed an issue on some objects looking emissive incorrectly when exporting to OBJ format. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed a bug with `Class.MeshPart.DoubleSided\|double-sided meshes` rendering as single-sided in 3D thumbnails. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed issue with saving escaped strings in plugin settings. |

