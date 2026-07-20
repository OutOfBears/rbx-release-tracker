# Release notes for 728

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a visual debugger for `Class.Instance` stitching to the Server Authority debugger. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Implements `type:issubtypeof()` for use in type functions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds `Class.Player:GetCameraState()` to synchronize player camera state between client and server on Server Authoritative games. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Animation Graph Editor - Fixes an issue where renaming a node replaced spaces with underscores. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Animation Graph Editor - Right-clicking now selects nodes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Tags are now sorted lexicographically. As a result, the order of tags returned by `Class.Instance:GetTags()` may change. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where script analysis could show a spurious warning when passing a table literal to certain generic functions in strict mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for using the F key to focus on the selected `Class.HumanoidRigDescription`, `Class.DigitsRigDescription`, or individual joint while the plugin is active. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Makes the `Class.MeshPart.DoubleSided\|DoubleSided` setter writable. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `SelectionImageObject` now uses the clipping rect of the rendering destination rather than inheriting a clipping rect from its original position in the UI. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The `Class.Players.PlayerRemoving\|PlayerRemoving` event now correctly fires after a player leaves during **Server & Clients** testing. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Animation Graph Editor - Layering of nodes is more consistent and predictable |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where `Class.Humanoid.ApplyDescriptionResetAsync\|ApplyDescriptionResetAsync` would create `NoCollisionConstraints` referencing parts on unrelated player character models. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM support for emissive maps in `Class.SurfaceAppearance` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When using structured logging methods from `Class.LogService`, instance values are converted using `Class.Instance:GetFullName()`, which returns the instance's path without the `Class.DataModel` root. For example, `"Workspace"` for workspace or `"Workspace.MyPart"` for a child of workspace. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.LogService:Error()` no longer prints an error to the Output window when the call is wrapped in `Global.LuaGlobals.pcall()`. Caught errors are now properly suppressed. Uncaught errors continue to print with full context and stack trace as before. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Physics debugging stats now works correctly when `Class.Workspace.ImprovedPhysicReplication` is enabled. |

