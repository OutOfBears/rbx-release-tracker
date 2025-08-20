# Release notes for 686

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Attributes and tags on instances are now stored more efficiently, decreasing memory pressure. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves diffraction pathfinding in the "Acoustic Simulation" beta when emitters or listeners are near obstacles. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.WrapDeformer\|WrapDeformers` can now be attached under layered clothing meshes, for example `Class.MeshPart\|MeshParts` that have `Class.WrapLayer` children rather than just `Class.WrapTarget` children. The difference between the `Class.WrapDeformer` cage and `Class.WrapLayer` outer cage will deform the mesh prior to any layered clothing fit. Layered clothing `Class.MeshPart\|MeshParts` deformed through `Class.WrapDeformer` can be published as they have been for deformed body part `Class.MeshPart\|MeshParts`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates in-experience convex decomposition to a technique that produces better results in most cases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a `Enum.InputActionType.ViewportPosition\|ViewportPosition` action type to the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Enum.AdornShading` enum. Adds Box/Sphere/Cone/Cylinder HandleAdornment property: Shading. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the MicroProfiler, adds a new category under X-Ray mode that allows you to view network traffic. Before generating a dump, select a verbosity level in the MicroProfiler overlay "Network" menu. When viewing the dump, select "Network" in the X-Ray menu. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added `Hollow` property to `Class.ConeHandleAdornment`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.GuiService.ViewportDisplaySize` to retrieve physical size (`Enum.DisplaySize`) of the viewport |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adaptive reverb in the beta "Acoustic Simulation" feature has been tweaked and improved slightly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves Luau’s New Type Solver's ability to recover from certain internal failure cases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.SoundService.AudioPlayerVolumeFix` to rollout a fix for an issue with `Class.AudioPlayer\|AudioPlayers` not playing at the correct volume. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new `VideoContent` property to `Class.VideoFrame`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, types indicative of an internal error no longer leak from modules, and instead raise a type checking error. Previously, this would result in unknown and surprising behavior across different modules. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed a bug in the New Luau Type Solver that would cause type checking to fail on certain patterns of OO-styled code. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the quality of Acoustic Simulation's muffling/filtering. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `game.CoreGui` and other restricted instances and services will no longer be accessible in scripts which do not have a permission to use them. Instead, attempt to index or retrieve such an instance from Roblox API method will return 'nil'. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix bug where UIContainerQuery doesn't work on load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an issue where a `X or Y` expression might erroneously be reported as having the wrong type when returned from a function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds visual cues that highlight the location of nearby `Class.ProximityPrompt\|ProximityPrompts` for players. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Explorer - Adjusts the scroll bar UI. Clicking in the gutter above or below the scrollbar will now scroll by a page. Click and hold to scroll by page to the mouse. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Removes the legacy "One Stud Grid," "1/5 Stud Grid," and "Grid Off" actions in Studio. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed crashes when calling SharedTable:Clone. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Provide richer autofill suggestions inside of interpolated strings when using incremental autocomplete |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces the amount of time spent per-frame in the `Sound` task when there are many Audio instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that could cause the jump button to become deactivated when changing the humanoid's `Class.Humanoid.JumpPower\|JumpPower`. Previously, players would have to release and press the jump button again to reactivate jumping. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Checked function errors in the new Luau Type Solver will warn about erroneous argument usage using 1-indexed positions for the arguments instead of 0-indexed positions |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug that prevented incremental autocomplete from providing results in for loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Update the types of UserInputService's `GetGamepadState`, `GetKeysPressed`, and `GetMouseButtonsPressed` APIs to return a list of `Class.InputObject\|InputObjects`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Tag Editor now reinstantiates its folder in ServerStorage upon adding new tags. It will now find folders not managed by the plugin if the TagList folder hasn't already been created, so that it can be used with workflows like Rojo. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improve search performance in the Explorer. Broad searches like "is:BasePart" will lag less and specific searches like "MySpecificModel" will complete faster.<br><br>Fix a bug where using Studio with FPS set to 240Hz could cause hangs greater than a second when searching in the Explorer. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Addresses a crash from using the constraint scale slider in the "Visualization Modes" panel on some Windows machines. |
