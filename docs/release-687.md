# Release notes for 687

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash in Luau’s New Type Solver for recursive type aliases. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a `Class.InputBinding.ResponseCurve\|ResponseCurve` property to thumbstick `Class.InputBinding\|InputBindings`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, fixes a bug where refinements from multipart conditions using `and` and `or` could sometimes cause Roblox built-in types to refine to `never`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau’s New Type Solver, short circuits unification in certain scenarios, improving inference for refined types. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds support for parametrized `@deprecated` attribute to Luau:<br>`@[deprecated{ use = "bar()", reason = "foo() is not secure" }]`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | For Luau’s New Type Solver, fixes some internal compiler exceptions related to "ConstraintSolver::unblock encountered a self-bound type!". |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds missing documentation for several `Class.EditableMesh` methods. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where the `Enum.Material.Glass\|Glass` material sometimes did not get higher quality material shader on mobile. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves diffraction pathfinding in the "Acoustic Simulation" beta when emitters or listeners are near obstacles. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates in-experience convex decomposition to a technique that produces better results in most cases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the MicroProfiler, adds a new category under X-Ray mode that allows you to view network traffic. Before generating a dump, select a verbosity level in the MicroProfiler overlay "Network" menu. When viewing the dump, select "Network" in the X-Ray menu. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau’s New Type Solver, reduces the incidence of internal compiler exceptions due to recursion limits being hit, as well as general unresponsiveness of script analysis and autocomplete. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds visual cues that highlight the location of nearby `Class.ProximityPrompt\|ProximityPrompts` for players. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Removes the legacy "One Stud Grid," "1/5 Stud Grid," and "Grid Off" actions in Studio. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, fixes a bug that would mistakenly lead to generic type parameters to be overly permissive, and allows incompatible types for their instantiation. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue that could cause the jump button to become deactivated when changing the humanoid's `Class.Humanoid.JumpPower\|JumpPower`. Previously, players would have to release and press the jump button again to reactivate jumping. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where Studio would crash when mouse is hovering the "Help" menu item of the MicroProfiler. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | MicroProfiler can now display more blocks on large zoom out without UI elements disappearing. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a rare crash when re-parenting detached `Class.Attachment\|Attachments`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The non-legacy `Class.BaseScript.RunContext\|RunContext` warning is now disabled for scripts that are disabled.  |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Prevent `Class.DraggerService.LinearSnapIncrement` and `Class.DraggerService.AngleSnapIncrement` from being set to zero. This avoids plugins having to check for a potential divide by zero as they implement snapping. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The "Save Place" dialog now always displays on top when closing a place where the "Add Tools" window is open. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where the Next Gen Studio Preview beta fails to save custom tabs named with special characters, like `*` or `/`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue in the "Next Gen Studio Preview" beta where clicking on a tab's name in the Manage Tabs dialog toggled its visibility state instead of selecting it. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug where copy and paste would apply to instances in the Explorer instead of applying to the currently focused textbox. |
