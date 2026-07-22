# Release notes for 731

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New list view for experiences in Studio StartPage. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added a search bar to the Beta Features dialog, allowing you to filter beta features by text. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.AssetService.CreateAssetAsync\|CreateAssetAsync` now supports `Class.AudioTextToSpeech` asset generation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adding `Enum.PreferredInput.MicroGamepad` for when connected gamepad doesn't have 2 thumbsticks.<br>Adding `Enum.KeyCode.ButtonCenter`, `Enum.KeyCode.ButtonBack`, `Enum.KeyCode.ButtonUp`, `Enum.KeyCode.ButtonDown`, `Enum.KeyCode.ButtonLeft`, `Enum.KeyCode.ButtonRight` for TV remote buttons. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the following API:<ul><li>`InputAction.BindingDisplayName` — string, read-only. Returns the display name for the active binding on the player's current device. Empty string if no binding matches.</li><li>`InputAction.BindingDisplayImage` — Content, read-only. Returns the button image for the active binding. nil for keyboard bindings or when no binding matches.</li><li>`InputBinding.DisplayName` — string, read/write. Sets a custom display name (e.g. \"FIGHT\"). When empty, the engine computes a default from the bound key(s). Persists across publishes.</li><li>`InputBinding.DisplayImage` — Content, read/write. Sets a custom image. When nil, the engine uses the default gamepad button icon. Persists across publishes.</li></ul> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Part.shap` is no longer accessible. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.AudioEmitter.DistanceAttenuationMode`, allowing `Class.AudioEmitter\|AudioEmitters` to use a preset curve for distance attenuation instead of the existing custom table `Class.AudioEmitter.DistanceAttenuation`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed various crashes having to do with physics constraints. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where using `Class.AudioRecorder` to record a stream with more than 4 channels would fail. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Hides empty space at the bottom of Studio when Show Diagnostics bar is disabled. |

## Fixes

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where TopBarInset content scales incorrectly when giving translation feedback |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes some cases of Luau claiming intersections between extern types and table types are uninhabited, resulting in spurious errors and confusing inference results. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM support for emissive maps in `Class.SurfaceAppearance` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with particle flicker when the parent part rapidly teleports around. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes `Class.Workspace.PlayerCharacterDestroyBehavior` to also destroy the Character on the client. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.Sound\|Sounds` affected by the doppler effect briefly use a stale position when playback begins. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed a bug that would cause an occasional disconnect when adding/removing attributes while using `Class.Workspace.AuthorityMode` of `Server` or `Class.Workspace.NextGenerationReplication`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, the "Lazy Type expands to an instance that has disappeared" error no longer occurs. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed Studio becoming unresponsive when adjusting terrain brush size. |

