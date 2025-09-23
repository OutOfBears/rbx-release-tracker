# Release notes for 689

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The `Class.StyleRule:SetProperty()` function now automatically handles the following color type conversions: A) converts a `Datatype.BrickColor` value to a `Datatype.Color3` when setting a `Datatype.Color3` property; B) converts a `Datatype.Color3` value to a `Datatype.ColorSequence` when setting a `Datatype.ColorSequence` property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.UIDragDetector.ActivatedCursorIconContent`, `Class.UIDragDetector.CursorIconContent`, `Class.UserInputService.MouseIconContent`, `Class.ClickDetector.CursorIconContent`, `Class.DragDetector.ActivatedCursorIconContent`, `Class.Mouse.IconContent`, and `Class.BackpackItem.TextureContent` properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes an instance of getting an erroneous "Type inference has failed to complete" error when using user defined type functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.SoundService.AudioPlayerVolumeFix` to rollout a fix for an issue with `Class.AudioPlayer\|AudioPlayers` not playing at the correct volume. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces a new property `Class.Workspace.AirTurbulenceIntensity` that controls the strength of turbulence present in the wind velocity field, affecting the aerodynamic force model. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Global.LuaGlobals.rawget()` now returns `nil` when queried key isn't present. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `vector.lerp()` to the standard Luau library. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Ensures the order of speech-to-text responses matches the spoken order even with different server latencies per event. Drops responses that time out. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where, when setting `Class.HapticEffect` to `Enum.HapticEffectType.Custom\|Custom` type, the waveform data is not correctly replicated from server to client. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, better handles intersections of tables when checking for table literal type mismatches. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Autocomplete now suggests hot comments, also known as [comment directives](/luau/comments#comment-directives). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the Explorer, double-clicking to expand will now use the system's double-click speed. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where certain scripts could cause script analysis to fail. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `Class.ScrollingFrame` scrollbar rendering issues with `Class.UICorner`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes possible false occlusion from inactivated terrain meshes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Scripts cloned while in edit mode no longer have synchronized breakpoints. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a potential infinite loop when re-capturing focus on the same text box. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.ImageLabel.SliceCenter` warnings when using negative `Class.ImageLabel.ImageRectSize`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in Luau typechecking that could cause autocomplete to not provide suggestions when invoked near the length/unary minus operator. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, autocomplete now more accurately tracks refinement information when nesting multiple refinements. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash on typing an invalid `@[deprecated]` attribute. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Addresses a crash from using the constraint scale slider in the "Visualization Modes" panel on some Windows machines. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug in the Explorer where nesting many `Class.Folder\|Folders` and trying to open the "insert object" menu on the lowest one will hang Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug in the Explorer where, if the mouse's left and right buttons are swapped in system settings on Windows, drags in the Explorer won't work. |
