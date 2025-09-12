# Release notes for 688

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a new class of errors to Luau's New Type Solver which reports when generics would have be instantiated with impossible types. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer: Adds `Show Orientation Indicator` back to the Explorer window's context menu. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Allows `DraggerService` properties to be set. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.Humanoid:BuildRigFromAttachments()` now respects the `AvatarJointUpgrade` rollout. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.Decal` and `Class.Texture` now have properties for a Normal, Roughness, and Metalness map. `Class.Decal` UVs support a scale and offset. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Parallelizes `Class.AudioPlayer`, `Class.AudioEmitter`, and `Class.AudioListener` updates, which can dramatically improve framerate when there are many. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Autocomplete no longer suggests "break" and "continue" outside of loops. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue that caused `UIGradient` flickers during certain setups. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue causing Voice Chat's echo cancellation to intermittently not work. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Prevents potential transient stream out when Multiple Replication Foci are moved large distances. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Users who register callbacks on `Class.DragDetector\|DragDetectors` for `Class.DragDetector.MouseHoverEnter` and `Class.DragDetector.MouseHoverLeave` on touch devices will now only correctly see one set of calls to enter/leave when pressing and releasing (previously there were two sets of calls). |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with the `UIDragDetectors` where drag would not terminate upon bringing up the settings menu. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where a setting enabled to false on a dragging `UIDragDetector` mid-drag wouldn't end the drag action properly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `HandleAdornments` now respects Z index sorting. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the error message thrown if `Actor:BindToMessage` is called in a ModuleScript. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, tables that contain dictionary entries and array-like entries (such as: `{ foo = 32, "bar" }`) are now more permissive. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Explorer: Fixes a bug where icons on instances and greyed out text for disabled scripts would sometimes fail to appear when searching. |
