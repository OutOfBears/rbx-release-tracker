# Release notes for 681

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Tunes the scaling behavior of Unified Lighting. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates selector syntax to handle ContainerQuery. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new Net Asset section to the Network Diagnostics Debug panel. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a "Default" device option when selecting input and output audio devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Implements an `AudioGate` instance that you can use to remove portions of audio streams quieter than a specified threshold. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, function statements on tables now bidirectionally infer their arguments. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Makes `Class.VoiceChatService` automatically visible whenever "Microphone" is enabled via Game Settings > Communication. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, non-strict mode will no longer report errors for function calls that refinements have proven to be unreachable. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improved scrolling performance of Explorer in hot cases. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Restores haptic support for wireless Xbox One gamepads on macOS >= `11.0` and adds haptic support for Xbox 360 gamepads on macOS >= `15.0`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.BasePart:GetRootPart()` is now deprecated. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes strings in the Accessory Fitting Tool. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed several cases in Explorer that would lead to "NYI: Parented to nil" errors in searching. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where pixels would shift on R15 humanoid heads in non-PBR cases. While final pixels on heads might render slightly offset, this is the correct and expected behavior, ensuring the result in terms of diffuse textures is the same whether a head is rendered with PBR or not. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug that caused Studio to become unresponsive and crash if a script attempted to perform pathfinding when the `Class.Path` object's `WaypointSpacing` was set to zero. Also fixes a bug that caused path waypoints to be generated in the wrong direction if a script attempted to perform pathfinding when the `Class.Path` object's `WaypointSpacing` was set to a negative number. `WaypointSpacing` values near or less than zero are now clamped to a minimum spacing distance of `0.1`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fix a bug that prevents non-strict mode from surfacing unknown symbol errors in conditionals and function calls. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces a short volume ramp to newly-connected `Class.Wire\|Wires` in order to avoid pops and clicks. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes table layouts not immediately rerendering after updating a cell's size |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Incremental autocomplete now provides better autofill suggestions when typing requires in scripts. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Provide richer completions for self types while using incremental autocomplete. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Prevented scroll movements from being recognized while panning with the middle mouse button, factored in the Pan Sensitivity setting to pan movements with the middle mouse button. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer: Fix bug where existing instances wouldn't show up in Explorer |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed a bug where holding down arrow keys in Explorer as you enter the search dropdown would cause the arrow keys to get stuck. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the Next Gen Studio Preview beta to respect the `Class.PluginToolbarButton.ClickableWhenViewportHidden` property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in the Next Gen Studio Preview beta where custom tabs with references to disabled/uninstalled plugins would not accurately reflect button states. |
