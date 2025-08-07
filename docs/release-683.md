# Release notes for 683

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.SurfaceAppearance.AlphaMode` is now scriptable. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Type Solver - Fixes some cases where `if ... then ... else` expressions would not report errors when one of the branches has an incorrect type. Also fixes a regression in how table literals are type checked inside `if ... then ... else` expressions and `and` / `or` expressions.   |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a preview widget to the `Class.AudioPlayer.Asset` property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates selector syntax to handle ContainerQuery. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.Decal` and `Class.Texture` now have properties for a Normal, Roughness, and Metalness map. `Class.Decal` UVs support a scale and offset. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Performance improvements when rendering skinned EditableMeshes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows `Class.AudioPlayer.Volume` to go up to `10` instead of `3`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When using the New Type Solver in `--nonstrict` mode, if the _only_ error is "Type inference failed to complete" (an internal Luau error), the error will not be displayed in the Script Analysis widget nor in the Script Editor. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer - Adds `Show Orientation Indicator` back to the Explorer window's context menu. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Explorer - Adjusts selection, text, and scrollbar colors to be higher contrast. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Explorer - Decreases the height of the Explorer window's search bar. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Explorer - Moves the `Paste Into At Original Location` option out of the context menu submenu, and removes the `Paste At Original Location` option from the context menu. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with tables in the Watch window randomly displaying as 'nil'. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes bug where `Class.Players.BanningEnabled` was not set properly in Team Create sessions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `Class.Constraint\|Constraints` don't affect `Class.Attachment\|Attachments` in `Class.Folder.Folders`, even if those `Class.Attachment\|Attachments` have an ancestral `Class.BasePart`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where light guides don't display in Studio when `Class.Light\|Lights` are children of a Detached `Class.Attachment`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `Class.ParticleEmitter\|ParticleEmitters` that are parented to Detached `Class.Attachment\|Attachments` use a nonzero size. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer - Hover effects no longer occur while dragging the scroll bar. Box selecting also no longer starts from the scroll bar area. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes "Zoom to" not showing in the Explorer context menu for models and attachments. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver - Fixes some instances of table accesses like `Foo.Bar` being type `never` when written after an `if` statement. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Modifies particle rendering so that particles are first rendered where they are spawned instead of rendering one simulation step ahead. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | GeometryService CSG operations on special mesh primitives now use the correct transformation for expected results. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in `Class.AudioRecorder` leading to corrupt audio recordings. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in Solid Modeling tools that caused incorrect colors in the result. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where the BasePart CSG API would crash if the input is `nil`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes consistency issues with ray casts involving convex decomposition. Rays which start inside of a mesh will now return no hit, which aligns with the behavior of other primitive parts. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the `ScriptEditorService:RegisterAutocompleteCallback()` error message for incorrect "documentation" field. When string is entered instead of object with value, the error displays "object with value" is missing instead of "object with kind" is missing. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer - Fixes a case of instances not being removed from the Explorer window when calling `Instance:Destroy()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer - Fixes insert object menu sometimes displaying on the wrong monitor. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Studio Preview beta - Fixes a bug where `Class.PluginToolbar` or `Class.PluginToolbarButton` objects with empty names would appear as blank entries in the Plugins system menu. |
