# Release notes for 719

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Implements constant propagation for properties of eligible tables of constants. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds KeyCode `TouchDelta` to be usable under a `Direction2D` `Class.InputAction` as a transformed velocity under the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.KeyCode.TouchPosition` to the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in script debugging so that when a debugger break is hit, all other Luau threads immediately stop executing to keep the experience's state consistent. All threads resume normal execution when the debugger continues. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds KeyCode `TouchPinch` to be usable under a `Direction1D` `Class.InputAction` as a transformed velocity under the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.EditableImage:ReadPixelsBuffer\|ReadPixelsBuffer` and `Class.EditableImage:WritePixelsBuffer\|WritePixelsBuffer` now support the max size of the `EditableImage` instead of being capped to 1024x1024. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes some cases of `any` not working to "suppress errors" when used with tables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds Scene Analysis to Roblox Studio. This feature gives creators feedback on Script Memory, Audio Memory, Animation Memory, Instances and other project resource usage. See the developer forum for the full announcement. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the open place dialog with a new look. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | A `Class.ScrollingFrame` with `Class.ScrollingFrame.ScrollingDirection\|ScrollingDirection` **X** and no scrollable content can no longer set non-zero `Class.ScrollingFrame.CanvasPosition\|CanvasPosition` **Y** values, and a Class.ScrollingFrame` with `Class.ScrollingFrame.ScrollingDirection\|ScrollingDirection` **Y** and no scrollable content can no longer set non-zero `Class.ScrollingFrame.CanvasPosition\|CanvasPosition` **X** values. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Introduces error handling to avoid crashes while importing a corrupted or unsupported `.rbxm` file. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with the Update All button in the plugin management window. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where rotating a shadowed spot light could produce black artifacts along the edge. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds an `antiAliased` parameter to `Class.EditableImage.DrawCircle\|DrawCircle` and `Class.EditableImage.DrawLine\|DrawLine` to support drawing hard edges. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Displays a proper error message when the fallback engine font doesn't load correctly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Roblox now always follows the physical key positions of the QWERTY keyboard layout. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a fix for filtering attachments into parts as recommended objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes frame spikes when using high polling mice. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates `Class.SoundService.CharacterSoundsUseNewApi\|CharacterSoundsUseNewApi` script to fix latent issue with character loading. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Sequence nodes now execute multiple inputs in order strictly with the passing time. Previously extra time would be dropped if the time steps had more time than required to finish one input. Now, that extra time is applied to the next input, correctly aligning the output of sequence nodes with the timing of other nodes in the graph. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Enum.AnimationNodeType.MaskNode` didn't work for rigs with spaces in their label name (for example, "Left Shoulder" for R6). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a missing Transparency slider to `Class.StyleRule` properties in the Style Editor. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where voice crashed during speaker selection. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that caused Studio to crash on certain platforms when publishing a CSG part while enrolled in Studio Beta program. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an intermittent issue with root animation on custom bone based characters |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where duplicate `Generated` folders appeared under `Class.ProceduralModels`. |

