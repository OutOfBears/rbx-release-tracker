# Release notes for 727

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.GroundController.AccelerationTime` and `Class.GroundController.DecelerationTime` now only affect linear acceleration, not turning acceleration. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Classes and services with `AcousticSimulationEnabled` such as `Class.SoundService` now have subcategories where you can enable or disable `Occlusion` and `Reverb` independently. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a visual debugger for `Class.Instance` stitching to the Server Authority debugger. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.GroupService:GetRolesInGroupAsync(userId, groupId)` engine API returning all roles a user holds in a group, supporting multi-role assignment case. Deprecates `Class.Player:GetRankInGroupAsync()` and `Class.Player:GetRoleInGroupAsync()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.UserInputService:GetStringForKeyCode()` now accepts an optional second parameter of `Enum.KeyCodeStringFormat` (`Enum.KeyCodeStringFormat\|Default` or `Enum.KeyCodeStringFormat\|Abbreviated`). For example, "Left Control", "Right Control", and "Left Alt" become "LCtrl", "RCtrl", and "LAlt" respectively. Keys without a defined abbreviation fall through to the existing behavior. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.AudioEmitter.PositionType`, `Class.AudioEmitter.PositionInstance`, `Class.AudioListener.PositionType`, and `Class.AudioListener.PositionInstance` for setting the position of `Class.AudioEmitter\|AudioEmitters` and `Class.AudioListener\|AudioListeners` independent of their parent `Class.Instance`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Implements `type:issubtypeof()` for use in type functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.DataModel.ServerRestartScheduled` event. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.Player:GetCameraState()` to synchronize player camera state between client and server on Server Authoritative games. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the `Class.Workspace.PlayerScriptsUseInputActionSystem` default `Class.PlayerScripts` to use the `Class.Player:GetCameraState()` API. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an issue where variadic function arguments were not pushed into lambdas. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Converts the `Class.Workspace.PlayerScriptsUseInputActionSystem` default `Class.PlayerScripts` to fire `Class.InputBinding\|InputBindings` of type `Enum.InputBindingType\|Scriptable`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces the mix-time of `Class.AudioEmitter`/`Class.AudioListener` by 15-30%. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a case where Script Analysis would report spurious warnings for certain generic functions in strict mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for read-only table indexers to the type function runtime. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Studio script editor freeze when pasting large scripts. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Studio's "Group as Model" context action now changes into "Group as Frame" when only GUI objects are selected. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the Animation Graph Editor, editing the name of a node will now select all the text box contents. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes rendering of transparent avatars with highlights. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes Magic Mouse scrolling in Roblox Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Set a limit to the growth factor of deferred operations queued within any given resumption point. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Make Z-near plane more consistent across all platforms. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Instance values are converted using `Class.Instance:GetFullName()` which returns the path excluding the `Class.DataModel` root — for example `"Workspace"` for workspace or `"Workspace.MyPart"` for a child of workspace. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.LogService:Error()` no longer prints an error to the Output window when the call is wrapped in `Global.LuaGlobals.pcall()`. Caught errors are now properly suppressed. Uncaught errors continue to print with full context and stack trace as before. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Structured logging methods now accept mixed tables and pure arrays as the context parameter without throwing "Unable to cast to Dictionary". For mixed tables, string keys are preserved as-is and numeric keys are converted to strings (for example, index `1` becomes key `"1"`). For pure arrays like `{10, 20, 30}`, all entries become string-keyed (`"1"=10`, `"2"=20`, `"3"=30`). If a converted numeric key collides with an existing string key, the explicit string key takes precedence. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an issue with crashing when assigning to locals annotated with `typeof()` types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Clarifies the error shown when `Class.Humanoid:ApplyDescription()` is called from the wrong context on a server-created `Class.Humanoid`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Physics debugging stats now works correctly when `Class.Workspace.ImprovedPhysicReplication` is enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Potential fix for the `Class.Instance`-picker sometimes selecting things behind the intended part when modifying an `Class.Instance`-reference property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the Animation Graph Editor, the color of curves now fade alongside the weight. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes nodes in the Animation Graph Editor not providing the clip name in their title. |

