# Release notes for 718

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash with `SetResolutionAsync`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Input Action System: `TouchPosition` keycode can now be used in InputBinding to trigger InputAction of type bool. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.KeyCode.TouchPosition` for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Scaling an avatar with layered clothing no longer retriggers layered clothing fitting, resulting in significantly improved performance. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new `Class.SurfaceAppearance.ResampleMode\|ResampleMode` for `Class.SurfaceAppearance`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces `AnimationClip.Length` to allow easy access to the duration of an AnimationClip instance. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, non-strict mode no longer reports type checking errors for `**error-type**`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for negative speed in `Enum.AnimationNodeType.ClipNode` and `Enum.AnimationNodeType.SpeedNode` animation graph nodes (Animation Graph is currently a beta feature). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | EditableImage:ReadPixelsBuffer and EditableImage:WritePixelsBuffer now support the max size of the EditableImage instead of being capped to 1024x1024. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds improvements for reporting in Global Chat. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds Scene Analysis to Roblox Studio. This feature gives creators feedback on Script Memory, Audio Memory, Animation Memory, Instances and other project resource usage. See the developer forums for the full announcement. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | With New Camera Controls beta enabled, the studio camera can now be rotated and zoomed using the keypad. <br /><br /><br><br><ul><br><li><kbd>1</kbd>: View Front </li><br><li><kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>1</kbd>: View Back </li><br><li><kbd>2</kbd>: Tilt/Orbit down </li><br><li><kbd>3</kbd>: View Right </li><br><li><kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>3</kbd>: View Left </li><br><li><kbd>4</kbd>: Pan/Orbit left </li><br><li><kbd>6</kbd>: Pan/Orbit Right </li><br><li><kbd>7</kbd>: View Top </li><br><li><kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>7</kbd>: View Bottom </li><br><li><kbd>8</kbd>: Tilt/Orbit up </li><br><li><kbd>+</kbd>: Zoom in </li><br><li><kbd>-</kbd>: Zoom out </li><br></ul> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the open place dialog with a new look. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Removes log spam of "Failed to play animation: [http://www.roblox.com/asset/?id=<assetid](http://www.roblox.com/asset/?id=%3Cassetid)>. AnimationTrack limit of 64 tracks exceeded for 'SelfAvatar', new animations will not be played." |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a small volume boost in the pitch shifter effects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds extra validation to `Terrain:CopyRegion`. An error will be output rather than a script time out when the region extents are empty or inverted. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `UIScale` causing `ScrollingFrame` scroll bar to not clip its children. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where rotating a shadowed spot light can produce black artifacts along the edge. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes dark lighting that could occur when the sun is precisely in the center of the sky. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `EditableImage` `antiAliased` parameter to `DrawCircle` and `DrawLine` to support drawing hard edges. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM handling of legacy surface types on `Class.SpecialMesh` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a case where script analysis would not warn on invalid assignments. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes search functionality in the Style Editor plugin in Roblox Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue where with certain configurations IKControls would not work. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.AudioPitchShifter` would briefly play a portion of the previous audio stream when a new stream was played. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes night sky star twinkle rate at high FPS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where opening/closing the Animation Editor would remove the `Class.Animator` on the rig and create a new one, thereby deleting all of its previous state. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the root bone would not animate on certain imported character configurations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a precision issue in `Library.math.noise()` for very large input values. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds syntax highlighting for `const` keyword. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes occasional frame spike when a USB device disconnects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates SoundService.CharacterSoundsUseNewApi script to fix latent issue with character loading. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in the animation graph Sequence node (AnimationNodeType.SequenceNode) where the Trigger field does not advance the sequence. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in AdaptiveAnimations where translation weight wasn't properly respected in Animator when combined track weights are less than 1.0. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Optimizes Studio Output Window performance when only receiving output in contexts that are hidden. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes rare timing issue with Studio Output window that would result in bad ordering for print statements when using task.defer. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue with printing complex tables with __tostring metamethods crashing Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Resolves issue with using script breakpoints on local plugins while in Play mode. |

