# Release notes for 720

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds `Enum.KeyCode.TouchPosition` to the Input Action System. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, improves type checking table literals against unions of tables and anonymous functions against unions of functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in script debugging so that when a debugger breakpoint is hit, all other Luau threads immediately stop executing to keep the experience's state consistent. All threads resume normal execution when the debugger continues. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Save place dialog now supports keyboard interactions. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds an `antiAliased` parameter to `Class.EditableImage:DrawCircle()` and `Class.EditableImage:DrawLine()` to support drawing hard edges. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, fixes a type checking bug where `for..in` loops would sometimes infer an optional type for the values of the table. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes false culling of `Class.MeshPart\|MeshParts` when using the **Solid Modeling On Meshes** Studio beta feature. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves error message when disconnecting due to packet failure. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Sequence nodes now execute multiple inputs in order strictly with the passing time. Previously, extra time would be dropped if the time steps had more time than required to finish one input, but that extra time is now applied to the next input, correctly aligning the output of sequence nodes with the timing of other nodes in the graph. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a missing transparency slider to `Class.StyleRule` properties in the Style Editor. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where voice crashed during speaker selection. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, fixes a crash that could occur when using `typeof()` inside of `<<>>` in a method call, as in`foo:bar<<typeof(baz)>>()`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where pre-scheduling `Class.AudioPlayer:Stop()` would erroneously cause the audio to **begin** playing at the intended stop-time. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes memory leak when deleting `Class.Instance\|Instances` during playtest sessions in Studio. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.ProceduralModel\|ProceduralModels` will no longer leak any memory when their `Class.ProceduralModel.Generator\|Generator` module is edited repeatedly in Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes missing autocomplete suggestions in intersections of string literals. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an intermittent issue with root animations on custom bone-based characters. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for `const` in Script Editor autocomplete. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.IKControl` parented to a model could cause character positions to stop replicating. |

