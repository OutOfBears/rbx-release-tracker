# Release notes for 684

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The `Info` section of MicroProfiler dumps has been reformatted, being properly encoded when exporting as JSON. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reinstates "OOF" as the default death sound. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `DraggerService` properties can now be set by Studio plugins, which allows plugin modification of the grid snap, collision settings, etc. Setting these properties changes the immediate behavior and the associated persistent Studio setting. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `UIContainerQuery` to Studio Explorer. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Optimizes `UIContainerQuery` so that the list of active CQs are rebuilt once per frame. This removes unnecessary computation when `GuiBase2d` instances are duplicated or deleted. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `AssetService:CreateSurfaceAppearance()` has been renamed to `AssetService:CreateSurfaceAppearanceAsync()` and is now yieldable. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Calling `Class.Players.CreateLocalPlayer()` on the server after a player has joined you no longer causes Studio to crash. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Removes obsolete rows from physics debug panel. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Restores Luau Heap snapshot grouping by `ModuleScript`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau Heap report now includes string object data overhead in the string object size. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adjusts the zoom function for the new studio camera to allow zooming in toward smaller objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver - Adds guardrails in subtyping of type packs to prevent infinite recursion and hangs. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver - Fixes some instances of script analysis never completing while Studio memory usage spikes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves performance of very large Atomic/PersistentPerPlayer models with streaming. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Increases the maximum allowed length of the second `Metadata` parameter of `Class.TextChannel:SendAsync` from 200 to 1000. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes more cases of actions sometimes not showing up when they should in Explorer (especially file sync). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Prevents scroll movements from being recognized while panning with the middle mouse button. Middle-mouse panning now respects the Pan Sensitivity setting. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes some corner cases in Explorer that would occasionally cause errors on startup. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | "Show collaborator selections" option in Live Collaborators window now syncs with the Visualization Modes panel's "Collaborator highlights" option. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Explorer - Updates the text color of selected disabled instances to be easier to read. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where you were unable to drag instances out of the toolbox into the viewport. |
