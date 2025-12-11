# Release notes for 696

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Global.LuaGlobals.rawget()` now returns `nil` when the queried key isn't present. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes UV issues on SLIM built-in materials. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves `Class.Decal` support for SLIM. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes incorrect coloring of SLIM models. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds frame rate cap options of 160, 165, 180, and 200 to the **Maximum Frame Rate** picker in the experience settings menu. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Increases `Class.SpecialMesh` support for SLIM, and confirms `Class.CylinderMesh` support for SLIM. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | MicroProfiler and Performance Panels now render using DPI-aware fonts and support multiple font sizes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.WrapDeformer\|WrapDeformers` can now attach under layered clothing meshes (for example, `Class.MeshPart\|MeshParts` that have `Class.WrapLayer` children instead of just `Class.WrapTarget` children). The difference between the `Class.WrapDeformer` cage and the `Class.WrapLayer` outer cage will deform the mesh before any layered clothing fitting. Layered clothing `Class.MeshPart\|MeshParts` deformed through the `Class.WrapDeformer` can be published just like deformed body-part `Class.MeshPart\|MeshParts`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in the Properties Panel where instance properties that shared a name with pseudo-instance properties were marked as **Influenced by** the StyleRules selecting the pseudo-instance. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver: Fixes assert refinements for top table types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver: String singletons in tables are now more consistently inferred when singletons are in the indexer. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows `Class.Wire\|Wires` to connect to `Class.AudioCompressor`’s Sidechain pin even when it creates a loop. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The `Class.GuiObject.MouseEnter` signal no longer fires before `Class.GuiObject.MouseLeave` when you quickly move the mouse from one `Class.GuiObject` to another `Class.GuiObject`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.Handles` and `Class.ArcHandles` now work correctly with Cylinder parts that have different X/Y sizes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Smooth-skinned avatars no longer have seams at part boundaries when undergoing deformation by `Class.WrapDeformer\|WrapDeformers`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash when setting `Class.UIGridLayout.CellSize\|CellSize` to zero. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces `memory_aps` (allocations per second) for `gui/TextLayout`. |
