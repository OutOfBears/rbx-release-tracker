# Release notes for 685

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Optimizes raycast functions against all part types. The performance improvements range from 25-50% depending on the part type. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Dramatically improves the memory usage of `Class.AudioAnalyzer`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, fixes a crash that would sometimes occur when calling a function with an incomplete type. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue where forcefield outlines don't appear on LightingStyle::Soft in Desktop. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Explorer: Pressing the down arrow key from the search bar now selects the first item. Pressing the up arrow key will refocus the search bar. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows any BasePart in `Class.GeometryService:CalculateConstraintsToPreserve`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Significant optimizations for the animation step. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes bug with Occlusion Culling where SpecialMesh and BlockMesh with offsets would cause invalid occlusion. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with the Acoustic Simulation beta feature causing lag spikes when `Class.AudioEmitter\|AudioEmitters` or `Class.AudioListener\|AudioListeners` are deleted. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a timing bug with `Class.AudioPlayer` and `Class.AudioTextToSpeech` that can cause their assets to play at full-volume, ignoring connected wires. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates debug panels in Studio and Client to correctly show all the relevant information. Previously some values were not populated. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | On Windows, Studio no longer generates sporadic `InputState.Begin` event for a key when releasing Shift/Ctrl/Alt modifiers.  |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | A proper error message now displays when the fallback engine font isn't loaded correctly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Weld instances no longer duplicate in the Avatar Settings preview when swapping between the Single Collider setting "Use Parts / Colliders". |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Removes the auto-open behavior of the Controller Emulator widget. This widget will now stay closed when closed and be independent from the Devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Camera speed properly clamps in Visualization Modes panel. |
