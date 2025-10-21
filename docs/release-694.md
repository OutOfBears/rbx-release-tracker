# Release notes for 694

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue where `Enum.Material.ForceField` outlines from backface don't appear on desktop and console. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a "Custom" option for particle flipbook layouts, allowing you to define custom numbers of columns and rows. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Allows 255 highlights in one scene. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type solver, resolve a regression where passing a string literal to a function accepting a generic and a string singleton would not force said literal to be a singleton type. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | MicroProfiler counters now display a breakdown of Luau Heap memory use of each DataModel and VM group. Additionally, execution time of each VM will be displayed. 'lua/heap' group has been split into 'Luau/heap' and 'Luau/heap_core' to exclude plugin and core script memory use from the existing memory category. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Errors that are thrown before Luau thread was able to start like 'C stack overflow', 'Not running script because past shutdown deadline' and others will now include information about the call target. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Script error tooltip will now display information about all errors at that location instead of showing only the first one. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | If Luau native code generation is not available on the device, only a single error message will be reported.<br> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an issue where `Instance.Clone` failed with a security capability error when performed inside `Instance.Sandboxed` containers. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `vector.lerp()` to the standard Luau library. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fix some instances where refinements would cause function calls to report a false positive type error. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adjust script analysis warnings and type hover from Luau to refer to the top type of foreign function types (e.g. from the Roblox API) as `userdata`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added 'I' as a hotkey to zoom in. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Update the styling of toast notifications in Studio to align with the Next Gen Studio Preview beta's styling. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Instance.Sandboxed` property can once again be set on the `Class.Workspace`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where sounds with `Class.Sound.PlayOnRemove` enabled can play unmuted after leaving an experience. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with multiple replication foci that can prevent stream out of regions in some situations. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with the Acoustic Simulation beta feature where rapidly creating `Class.AudioEmitter\|AudioEmitters` or `Class.AudioListener\|AudioListeners` can cause frametime spikes |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where scroll bar transparency changes were ignored when the ScrollingFrame was not interactable. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a potential infinite loop when re-capturing focus on the same text box. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where zoom level gets reset in vehicles and VR cameras upon `Class.UserInputService.PreferredInput` changing.  |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fix some instances where autocomplete/script analysis would fail to ever appear, and Studio would hang on closing. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the Acoustic Simulation beta feature can slow down physics updates, leading to worse framerates. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | MicroProfiler: When the on-screen UI is switched to Hidden mode, clicks now pass through it as expected. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Rather than deactivating itself, the UI Editor now clears the selection but remains activated when clicking over empty space in viewport, allowing subsequent GUI object selections.<br><br>Selecting non-GUI objects or clearing the selection through other means than the UI Editor will still cause it to deactivate. |
