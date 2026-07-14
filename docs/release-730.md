# Release notes for 730

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `BatchGetAsync` to ordered data stores, allowing retrieval of multiple key-value pairs in a single request. Accepts an array of up to 100 string keys and returns a dictionary mapping each key to its value. Gated by `DataStoreEnableOrderedBatchGetAsync`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds an indicator of whether or not packet-level compression is enabled to network GUIs. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.AssetService.CreateAssetAsync\|CreateAssetAsync` now supports `Class.AudioTextToSpeech` asset generation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the following API:<ul><li>`InputAction.BindingDisplayName` — string, read-only. Returns the display name for the active binding on the player's current device. Empty string if no binding matches.</li><li>`InputAction.BindingDisplayImage` — Content, read-only. Returns the button image for the active binding. nil for keyboard bindings or when no binding matches.</li><li>`InputBinding.DisplayName` — string, read/write. Sets a custom display name (e.g. "FIGHT"). When empty, the engine computes a default from the bound key(s). Persists across publishes.</li><li>`InputBinding.DisplayImage` — Content, read/write. Sets a custom image. When nil, the engine uses the default gamepad button icon. Persists across publishes.</li></ul> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an issue where variadic function arguments were not pushed into lambdas. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds missing `GetInputPins` and `GetOutputPins` methods to `Class.AudioTextToSpeech` and `Class.AudioSpeechToText`. |

## Fixes

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes a bug where refinements of variables were "cleared" by using a variable in a loop. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, autocomplete on refinements of `any` will no longer exclude results *from* the refinement. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes potential improper occlusion culling by meshes with a `MeshSize` value of `0`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.VoiceChatService.IsVoiceEnabledForUserIdAsync` encountered an Http 403 error whenever it was used in Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with the Acoustic Simulation feature where creating a `Class.AudioEmitter` or `Class.AudioListener` would simulate reflections/reverberation incorrectly for a few frames. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where when exporting an asset, the file dialog would default to a system folder instead of the user's documents folder. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where some terrain brushes would ignore the terrain in favor of parts. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes mouse jitter when dragging the 3D camera view. |

