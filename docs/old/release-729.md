# Release notes for 729

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes a class of internal compiler exceptions when using `table.freeze`, `setmetatable`, and other similar functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Classes and services with `AcousticSimulationEnabled` such as `Class.SoundService` now have subcategories where you can enable or disable `Occlusion` and `Reverb` independently. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.GroupService:GetRolesInGroupAsync(userId, groupId)` engine API returning all roles a user holds in a group, supporting multi-role assignment case. Deprecates `Class.Player:GetRankInGroupAsync()` and `Class.Player:GetRoleInGroupAsync()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adding `Enum.PreferredInput.MicroGamepad` for when connected gamepad doesn't have 2 thumbsticks.<br>Adding `Enum.KeyCode.ButtonCenter`, `Enum.KeyCode.ButtonBack`, `Enum.KeyCode.ButtonUp`, `Enum.KeyCode.ButtonDown`, `Enum.KeyCode.ButtonLeft`, `Enum.KeyCode.ButtonRight` for TV remote buttons. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Studio script editor freeze when pasting large scripts. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue where rejoining an experience could make your voice inaudible to other people in the server. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Particle emitters that use a small number of particles are no longer unnecessarily throttled at lower graphics quality levels, so low-rate particle effects render at their authored rate on lower-end settings |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `ExpirationTime` in `Class.AvatarEditorService:GetItemDetailsAsync` and `Class.AvatarEditorService:GetBatchItemDetailsAsync` to return a DateTime object instead of a value table. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes missing unparented instances from displaying in SceneAnalysis |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `TextBox.TextEditable` on mobile devices. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes erroneous script analysis warnings that could pop up when passing a generic function to another generic function as an argument in strict mode. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes Magic Mouse scrolling in Roblox Studio. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `Class.Instance.QueryDescendants` collecting duplicates when multiple descendant combinators (>>) were used.<br>Also fixes a case where not all matches were found when child combinators (>) were mixed with descendant combinators (>>). |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash when using `Enum.AnimationNodeType.MaskNode` in a graph reused by multiple rigs in the experience. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `Class.AudioDeviceInput`'s noise suppression & echo cancellation could cause a memory leak. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds flag to fix slowdown with `Class.Terrain:ReplaceMaterial()` |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Structured logging methods now accept mixed tables and pure arrays as the context parameter without throwing "Unable to cast to Dictionary". For mixed tables, string keys are preserved as-is and numeric keys are converted to strings (for example, index `1` becomes key `"1"`). For pure arrays like `{10, 20, 30}`, all entries become string-keyed (`"1"=10`, `"2"=20`, `"3"=30`). If a converted numeric key collides with an existing string key, the explicit string key takes precedence. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the `Workspace.PlayerScriptsUseInputActionSystem` default PlayerScripts to move the ThumbstickAction into its own sinking InputContext and not sink through the UI system. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug where Server Authoritative Humanoids would mispredict when attached via simulated constraints. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes LogService/Studio Output inconsistency re: handling `\0` bytes |

