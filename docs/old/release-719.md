# Release notes for 719

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds KeyCode `TouchDelta` to be usable under a `Direction2D` `Class.InputAction` as a transformed velocity under the Input Action System. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Implements constant propagation for properties of eligible tables of constants. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds KeyCode `TouchPinch` to be usable under a `Direction1D` `Class.InputAction` as a transformed velocity under the Input Action System. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.EditableImage:ReadPixelsBuffer\|ReadPixelsBuffer` and `Class.EditableImage:WritePixelsBuffer\|WritePixelsBuffer` now support the max size of the `EditableImage` instead of being capped to 1024x1024. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes some cases of `any` not working to "suppress errors" when used with tables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds Scene Analysis to Roblox Studio. This feature gives creators feedback on Script Memory, Audio Memory, Animation Memory, Instances and other project resource usage. See the developer forum for the full announcement. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the open place dialog with a new look. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | A `Class.ScrollingFrame` with `Class.ScrollingFrame.ScrollingDirection\|ScrollingDirection` **X** and no scrollable content can no longer set non-zero `Class.ScrollingFrame.CanvasPosition\|CanvasPosition` **Y** values, and a Class.ScrollingFrame` with `Class.ScrollingFrame.ScrollingDirection\|ScrollingDirection` **Y** and no scrollable content can no longer set non-zero `Class.ScrollingFrame.CanvasPosition\|CanvasPosition` **X** values. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Roblox now always follows the physical key positions of the QWERTY keyboard layout. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Introduces error handling to avoid crashes while importing a corrupted or unsupported `.rbxm` file. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue that caused Studio to crash on certain platforms when publishing a CSG part while enrolled in Studio Beta program. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where duplicate `Generated` folders appeared under `Class.ProceduralModels`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with the Update All button in the plugin management window. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where rotating a shadowed spot light could produce black artifacts along the edge. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a fix for filtering attachments into parts as recommended objects. |

