# Release notes for 655

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in the new Luau type solver that prevented inferring the types of globals. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Speeds up Studio startup by loading translations in parallel. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves script write performance for <code>Class.EditableMesh</code> by 20-40%. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a visual editor for <code>Class.AudioCompressor</code> and <code>Class.AudioLimiter</code> instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug of incorrect inertia data when using <code>Class.PartOperation:SubstituteGeometry()</code>. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash when calling <code>Class.Actor:BindToMessage()</code> from the Command Bar in Studio. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with <code>Class.Sound.LoopRegion</code> not working if the bounds of the loop region encompass the entire asset. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue where switching macOS Studio app across monitors or changing resolution causes crashes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes Studio ribbon buttons "Show Welds" and "Constraint Details" not being capable to toggle. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issues with the mobile touch jump button on character death. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Users who register callbacks on <code>Class.DragDetector\|DragDetectors</code> for <code>Class.DragDetector.MouseHoverEnter</code> and <code>Class.DragDetector.MouseHoverLeave</code> on touch devices will now only correctly see one set of calls to enter/leave when pressing and releasing (previously there were two sets of calls). |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes crashes related to custom clothing in the Avatar Setup preview. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where <code>Class.UIDragDetector</code> did not take device insets into account. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | When drawing in the Terrain Editor with "Ignore Parts" set to false, terrain will be added as expected. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the "Next Gen Explorer" beta, fixes a rare failure of arrow key navigation/selection to jump to the correct item. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds support for en-150 English (Europe) locale. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Massively optimizes speed in the "Next Gen Explorer" beta when actively using the tool without clicking. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Instances in the "Next Gen Explorer" beta now always match the ordering of the current Explorer. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the "Next Gen Explorer" beta, clearing the search now once again expands whatever your selection is, and it only expands the selection you made at time of clearing. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes crashes in avatar compatibility plugin when a deep hierarchy is selected, or a hierarchy with invalid UTF8 strings. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issues with <code>Class.Highlight</code> re-parenting on a <code>Class.Model</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Suppresses errors about "exception while signaling: Cannot load the AnimationClipProvider Service" when interacting with streaming NPCs. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.Humanoid.Seated</code> no longer passes a valid <code>currentSeatPart</code> as <code>nil</code>. |
