# Release notes for 686

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves the quality of Acoustic Simulation's muffling/filtering. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `game.CoreGui` and other restricted instances and services will no longer be accessible in scripts which do not have a permission to use them. Instead, attempt to index or retrieve such an instance from Roblox API method will return 'nil'. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fix bug where UIContainerQuery doesn't work on load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Enum.AdornShading` enum. Adds Box/Sphere/Cone/Cylinder HandleAdornment property: Shading. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added `Hollow` property to `Class.ConeHandleAdornment`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.GuiService.ViewportDisplaySize` to retrieve physical size (`Enum.DisplaySize`) of the viewport |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves Luau’s New Type Solver's ability to recover from certain internal failure cases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new `VideoContent` property to `Class.VideoFrame`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, types indicative of an internal error no longer leak from modules, and instead raise a type checking error. Previously, this would result in unknown and surprising behavior across different modules. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed a bug in the New Luau Type Solver that would cause type checking to fail on certain patterns of OO-styled code. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an issue where a `X or Y` expression might erroneously be reported as having the wrong type when returned from a function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Explorer - Adjusts the scroll bar UI. Clicking in the gutter above or below the scrollbar will now scroll by a page. Click and hold to scroll by page to the mouse. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Provide richer autofill suggestions inside of interpolated strings when using incremental autocomplete |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reduces the amount of time spent per-frame in the `Sound` task when there are many Audio instances. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Checked function errors in the new Luau Type Solver will warn about erroneous argument usage using 1-indexed positions for the arguments instead of 0-indexed positions |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed crashes when calling SharedTable:Clone. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug that prevented incremental autocomplete from providing results in for loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Update the types of UserInputService's `GetGamepadState`, `GetKeysPressed`, and `GetMouseButtonsPressed` APIs to return a list of `Class.InputObject\|InputObjects`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Tag Editor now reinstantiates its folder in ServerStorage upon adding new tags. It will now find folders not managed by the plugin if the TagList folder hasn't already been created, so that it can be used with workflows like Rojo. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improve search performance in the Explorer. Broad searches like "is:BasePart" will lag less and specific searches like "MySpecificModel" will complete faster.<br><br>Fix a bug where using Studio with FPS set to 240Hz could cause hangs greater than a second when searching in the Explorer. |
