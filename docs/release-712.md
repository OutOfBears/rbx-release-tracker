# Release notes for 712

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Assign Capabilities to more classes |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Marks `Class.DataStore:RemoveVersionAsync()` as deprecated. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.KeyCode.Touch` for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Releases beta version of device blocking for the Creator Ban API. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, generic functions that take tables are now more permissive when passing in table literals, and autocomplete on generic functions is improved. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improved the UX of enabling Server Authority under Workspace. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Class.UIShadow` component, which adds drop shadows to parent UI instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces new `const` keyword for declaring local variables. It can be used in any position `local` is used. After variable is declared, it cannot be reassigned later but can be shadowed with new declaration. More details in RFC: [https://github.com/luau-lang/rfcs/pull/166](https://github.com/luau-lang/rfcs/pull/166). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Scaling an avatar with layered clothing no longer retriggers layered clothing fitting and should be significantly faster. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Further minor memory usage improvements for Attachment and Constraint. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces the size of each `Class.Bone` instance by 48 bytes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fix a bug where type function reduction would get "stuck" at the end of type inference when dealing with recursive type functions like `t1 where t1 = add<t1 \| number, t1 \| number>`. This should help somewhat with memory pressure and marginally speed up type checking. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `QueryDescendants` can now match enumeration properties to a string value. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Studio Camera Controls beta, makes the camera speed lock persistent. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes false culling on VR. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes potential false culling of parts and characters. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes floating grass geometry. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Executing remote events that are not attached to the DataModel no longer has an error message. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.GuiService.ViewportDisplaySize` could report incorrect sizes on large-screen devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in the Adaptive Animation Beta where scaling a model causes incorrect translation on the root when animating the model. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an issue with cylinder part UVs being stretched on the left face. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an issue on some objects looking emissive incorrectly when exporting to OBJ format. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed a bug with `Class.MeshPart.DoubleSided\|double-sided meshes` rendering as single-sided in 3D thumbnails. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a fix for an audio crash on Mac. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.AudioPitchShifter` plays a small portion of the previous audio stream when a new audio stream is played through it. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed issue with saving escaped strings in plugin settings. |
