# Release notes for 698

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, lambdas will have their argument types inferred more precisely when placed inside well typed tables, and will now have their return types inferred in the same manner. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The MicroProfiler's bottom-right line graph is now synchronized with the main profiler view. Your selected frame range is now highlighted in green on this graph, and you can left-click anywhere on it to instantly re-center the main profiler to that specific frame, making it much faster to find and inspect performance spikes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves the per-frame performance of `Class.AudioPlayer` while `IsPlaying` is true. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Added an option for logging input to the StudioCameraService to assist with debugging. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the new Luau type solver, resolve more instances of type checking becoming unresponsive. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the new Luau type solver, fix an instance where refining a variable with the type `any` would cause it to become `unknown` instead. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, improve the wording of error messages in non-strict mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The view selector has been updated, and may be toggled independently of the camera speed slider. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added 'I' as a hotkey to zoom in. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `Enum.ScaleType.Fit` scaling past AbsoluteSize bounds on flipped ImageLabels and ImageButtons. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where emitter particles would disappear early. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed a bug where decals would at times not update correctly. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Implements a "sleep" system for `Class.AudioEmitter\|AudioEmitters` meaning that they use no CPU time when all of their inputs are silent. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fix an issue that UIScale does not correctly scale the border stroke offset. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Logpoints are no longer ignored in non-yieldable code. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Watch expressions are no longer cleared on place save. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where the drag events would receive the wrong position vector when `Class.ScreenGui.IgnoreGuiInset` is false. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.BillboardGui` `CurrentDistance` and `DistanceStep` are now properly implemented according to the documentation.  Properties `DistanceLowerLimit` and `DistanceUpperLimit` will now be officially deprecated. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where Studio can hang when selecting a UI element inside a `Class.UITableLayout` with multiple `Class.UISizeConstraint` child elements. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the hardware mic indicator remained turned on despite the mic being muted. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix an issue that when inspecting the gui/fontdata memory category in the developer console, the client would crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an issue that caused MicroProfiler to capture too few frames. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes image upload within Material Manager for group experiences. |
