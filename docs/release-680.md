# Release notes for 680

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves type checking for functions with generic type packs to more accurately report argument count and type mismatches. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.GuiBase2d` items now always have their order within a child list preserved across the network.<br><br>Previously they had their _display/layout order_ preserved but not their actual child order. Now the position of the GUI item within the parent's child list will always be the same relative to other GUI items on the client as it was on the server. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves Studio's performance when dealing with large selections. This is one in a series of ongoing enhancements. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.ScrollingFrame.TopImageContent`, `Class.ScrollingFrame.MidImageContent`, and `Class.ScrollingFrame.BottomImageContent` properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds evaluation logic to UIContainerQuery. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Moving large selections of instances with the `bulkMove` method is now more performant, in particular when dragging in Studio. Set `Class.Workspace.SignalBehavior` to `Enum.SignalBehavior.Deferred` to see a noticeable improvement. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Exposes `AssetService:CreateSurfaceAppearance()` as a Studio beta feature. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates the New Type Solver to correctly error suppress function calls with multiple nonviable overloads. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where the `Class.WrapLayer` order of layered hair could be incorrectly set when using `Players.CreateHumanoidModelFromDescription`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Makes the RSVP to event UI prompt more responsive and allows long event descriptions to be scrollable when necessary.  |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | A new option is available in the camera settings menu to disable the new scroll wheel behavior. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - Fixes bug where trackpads would be seen as holding down the mouse, and hovering over expand arrows would force them to expand. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where some text in the `Class.AudioCompressor` editor renders incorrectly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Layered clothing now reliably updates when either a character model's mesh part hierarchy changes or the welds connecting layered clothing accessories are added or removed. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the context menu sometimes opening in the 3D viewport while adjusting camera speed. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the Studio camera panning and tilting shortcuts to snap to 45-degree and 10-degree increments, respectively. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Fixes bug where the Explorer sometimes wouldn't expand and scroll to selected instances after clearing search. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Fixes bug with the increment names settings, so now a part with siblings `Part2` and `Part3` will be given the name `Part1` instead of just `Part`. |
