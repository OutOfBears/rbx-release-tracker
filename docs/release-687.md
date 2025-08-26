# Release notes for 687

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Attributes and tags on instances are now stored more efficiently, decreasing memory pressure. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue where `Enum.Material.ForceField` outlines from backface don't appear on desktop and console. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds missing documentation for several `Class.EditableMesh` methods. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves diffraction pathfinding in the "Acoustic Simulation" beta when emitters or listeners are near obstacles. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.WrapDeformer\|WrapDeformers` can now be attached under layered clothing meshes, for example `Class.MeshPart\|MeshParts` that have `Class.WrapLayer` children rather than just `Class.WrapTarget` children. The difference between the `Class.WrapDeformer` cage and `Class.WrapLayer` outer cage will deform the mesh prior to any layered clothing fit. Layered clothing `Class.MeshPart\|MeshParts` deformed through `Class.WrapDeformer` can be published as they have been for deformed body part `Class.MeshPart\|MeshParts`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in Luau’s New Type Solver for recursive type aliases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.AudioPlayer.SoundContent`, `Class.Sound.SoundContent`, and `Class.VideoPlayer.VideoContent` properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates in-experience convex decomposition to a technique that produces better results in most cases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a `Enum.InputActionType.ViewportPosition\|ViewportPosition` action type to the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the MicroProfiler, adds a new category under X-Ray mode that allows you to view network traffic. Before generating a dump, select a verbosity level in the MicroProfiler overlay "Network" menu. When viewing the dump, select "Network" in the X-Ray menu. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a `Class.InputBinding.ResponseCurve\|ResponseCurve` property to thumbstick `Class.InputBinding\|InputBindings`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes a bug where refinements from multipart conditions using `and` and `or` could sometimes cause Roblox built-in types to refine to `never`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adaptive reverb in the beta "Acoustic Simulation" feature has been tweaked and improved slightly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau’s New Type Solver, reduces the incidence of internal compiler exceptions due to recursion limits being hit, as well as general unresponsiveness of script analysis and autocomplete. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.SoundService.AudioPlayerVolumeFix` to rollout a fix for an issue with `Class.AudioPlayer\|AudioPlayers` not playing at the correct volume. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau’s New Type Solver, short circuits unification in certain scenarios, improving inference for refined types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for parametrized `@deprecated` attribute to Luau:<br>`@[deprecated{ use = "bar()", reason = "foo() is not secure" }]`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Parallelizes `Class.AudioPlayer`, `Class.AudioEmitter`, and `Class.AudioListener` updates, which can dramatically improve framerate when there are many. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | For Luau’s New Type Solver, fixes some internal compiler exceptions related to "ConstraintSolver::unblock encountered a self-bound type!". |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds property `Class.Stats.MemoryTrackingEnabled` to check validity of calling methods `Class.Stats:GetMemoryUsageMbForTag()` and  `Class.Stats:GetMemoryUsageMbAllCategories()` and to check validity of memory information in the MicroProfiler and Developer Console's "Memory" tab. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds visual cues that highlight the location of nearby `Class.ProximityPrompt\|ProximityPrompts` for players. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the `Enum.Material.Glass\|Glass` material sometimes did not get higher quality material shader on mobile. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Removes the legacy "One Stud Grid," "1/5 Stud Grid," and "Grid Off" actions in Studio. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where Studio would crash when mouse is hovering the "Help" menu item of the MicroProfiler. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | MicroProfiler can now display more blocks on large zoom out without UI elements disappearing. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Prevent `Class.DraggerService.LinearSnapIncrement` and `Class.DraggerService.AngleSnapIncrement` from being set to zero. This avoids plugins having to check for a potential divide by zero as they implement snapping. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The "Save Place" dialog now always displays on top when closing a place where the "Add Tools" window is open. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where the Next Gen Studio Preview beta fails to save custom tabs named with special characters, like `*` or `/`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue in the "Next Gen Studio Preview" beta where clicking on a tab's name in the Manage Tabs dialog toggled its visibility state instead of selecting it. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes a bug that would mistakenly lead to generic type parameters to be overly permissive, and allows incompatible types for their instantiation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that could cause the jump button to become deactivated when changing the humanoid's `Class.Humanoid.JumpPower\|JumpPower`. Previously, players would have to release and press the jump button again to reactivate jumping. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a rare crash when re-parenting detached `Class.Attachment\|Attachments`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug where copy and paste would apply to instances in the Explorer instead of applying to the currently focused textbox. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Addresses a crash from using the constraint scale slider in the "Visualization Modes" panel on some Windows machines. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The non-legacy `Class.BaseScript.RunContext\|RunContext` warning is now disabled for scripts that are disabled.  |
