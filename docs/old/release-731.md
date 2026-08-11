# Release notes for 731

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Added a search bar to the Beta Features dialog, allowing you to filter beta features by text. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.AssetService:CreateAssetAsync()\|CreateAssetAsync()` now supports `Class.AudioTextToSpeech` asset generation. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where using `Class.AudioRecorder` to record a stream with more than 4 channels would fail. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New list view for experiences in Studio StartPage. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Part.shap` is no longer accessible. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.AudioEmitter.DistanceAttenuationMode`, allowing `Class.AudioEmitter\|AudioEmitters` to use a preset curve for distance attenuation instead of the existing custom table `Class.AudioEmitter.DistanceAttenuation`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Hides empty space at the bottom of Studio when Show Diagnostics bar is disabled. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with particle flicker when the parent part rapidly teleports around. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed Studio becoming unresponsive when adjusting terrain brush size. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes some cases of Luau claiming intersections between extern types and table types are uninhabited, resulting in spurious errors and confusing inference results. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes `Class.Workspace.PlayerCharacterDestroyBehavior` to also destroy the Character on the client. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.Sound\|Sounds` affected by the doppler effect briefly use a stale position when playback begins. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, the "Lazy Type expands to an instance that has disappeared" error no longer occurs. |

