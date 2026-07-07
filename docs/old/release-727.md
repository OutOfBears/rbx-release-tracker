# Release notes for 727

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Converts the `Class.Workspace.PlayerScriptsUseInputActionSystem` default `Class.PlayerScripts` to fire `Class.InputBinding\|InputBindings` of type `Enum.InputBindingType\|Scriptable`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds support for read-only table indexers to the type function runtime. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Animation Graph Editor - You can now click on pins to drag them instead of having to hold down |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.GroundController.AccelerationTime` and `Class.GroundController.DecelerationTime` now only affect linear acceleration, not turning acceleration. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.UserInputService:GetStringForKeyCode()` now accepts an optional second parameter of `Enum.KeyCodeStringFormat` (`Enum.KeyCodeStringFormat\|Default` or `Enum.KeyCodeStringFormat\|Abbreviated`). For example, "Left Control", "Right Control", and "Left Alt" become "LCtrl", "RCtrl", and "LAlt" respectively. Keys without a defined abbreviation fall through to the existing behavior. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.AudioEmitter.PositionType`, `Class.AudioEmitter.PositionInstance`, `Class.AudioListener.PositionType`, and `Class.AudioListener.PositionInstance` for setting the position of `Class.AudioEmitter\|AudioEmitters` and `Class.AudioListener\|AudioListeners` independent of their parent `Class.Instance`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.DataModel.ServerRestartScheduled` event. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the `Class.Workspace.PlayerScriptsUseInputActionSystem` default `Class.PlayerScripts` to use the `Class.Player:GetCameraState()` API. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an issue where variadic function arguments were not pushed into lambdas. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces the mix-time of `Class.AudioEmitter`/`Class.AudioListener` by 15-30%. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a case where Script Analysis would report spurious warnings for certain generic functions in strict mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Studio's "Group as Model" context action now changes into "Group as Frame" when only GUI objects are selected. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the Animation Graph Editor, editing the name of a node will now select all the text box contents. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes rendering of transparent avatars with highlights. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the Animation Graph Editor, the color of curves now fade alongside the weight. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes nodes in the Animation Graph Editor not providing the clip name in their title. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Set a limit to the growth factor of deferred operations queued within any given resumption point. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Make Z-near plane more consistent across all platforms. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an issue with crashing when assigning to locals annotated with `typeof()` types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Clarifies the error shown when `Class.Humanoid:ApplyDescription()` is called from the wrong context on a server-created `Class.Humanoid`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Potential fix for the `Class.Instance`-picker sometimes selecting things behind the intended part when modifying an `Class.Instance`-reference property. |

