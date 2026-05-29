# Release notes for 721

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Class.UIShadow` component, which adds drop shadows to parent UI instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The AssetImporter now supports an additional scaling factor when importing models and animations. The stud-to-meter conversion factor will be updated from (20:1) to (25:7). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.UIShadow`'s edges appear jagged on corners with large radii. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau now supports read-only table indexers using the syntax `{read [K]: V}` or `{V}`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix a case where script analysis would erroneously infer `unknown` as the result of a generic function call. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.AvatarEditorService:PromptSaveAvatar()` and `Class.AvatarEditorService:NoPromptSaveAvatar()` will now make sure that empty updates do not fire a request to the backend. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes crash on some Light instances when changing Light.range between under 64 to equal or greater than 64. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes geometry of ball-shaped `Part` instances that are parented to the player. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Add more information about read-only/write-only properties to Luau type mismatch errors. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Normalize repeated slashes in rbxasset:// ContentIds. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: function types with parameter names will retain those parameter names when passed through type functions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed cases of Explorer box select getting stuck. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates `Class.SoundService.CharacterSoundsUseNewApi\|CharacterSoundsUseNewApi` script to fix latent issue with character loading. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Live Script reload now works for Parallel Luau. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixed a bug that could cause Studio hangs when type checking *many* copies of the same script calling a common function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix an issue where R15 elbows were slightly bent when playing blocky R15 animations (such as many defaults). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix sleep behavior for simulated AnimationConstraints. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | ProceduralModels now show bounds exactly equal to the Size when the selection visualization is set to Box. |

