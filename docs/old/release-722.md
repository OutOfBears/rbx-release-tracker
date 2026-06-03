# Release notes for 722

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a `UIModifier` property to `Class.InputBinding`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Slightly reduces memory usage for physics constraints. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for yielding from Luau iterator functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | A new API, `GetBundlesByAssetIDAsync(assetId: number, limit: number?)`, has been added to `Class.AvatarEditorService`. It allows you to search for bundles that contain the provided assetId. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.InputBindings` connected to UI buttons now change state to `FALSE` when a touch releases rather than when the touch exits the button bounds but is still pressed. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Renaming nodes in the Animation Graph Editor now also changes the name of the instance. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a "Open Logs Folder" action to the Studio Help menu to more easily access log files. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug for Chromebooks and Android devices with mice that sometimes prevented mouse buttons from working in first-person mode. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `Enum.AnimationNodeType.MaskNode` didn't work for rigs with spaces in their label name, such as "Left Shoulder" for R6. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.UICorner` instances placed on 9-slice images now round the image corners instead of rounding each image slice individually. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves the performance of `Class.AudioEcho` when the `DelayTime` property is unchanging. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a rare crash on mobile devices when using the Acoustic Simulation feature. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes bug in Developer Console where if ancestor parts were parented to nil, descendant instances were not tracked as unparented. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Displays a proper error message when the fallback engine font doesn't load correctly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes platform replication logic when a platform is unanchored. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes frame spikes when using high polling mice. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes the behavior of `Enum.AnimationNodeType.RandomSequenceNode` to where the RNG state persists across resets so subsequent plays of the node produce different orderings instead of the same ordering (current behavior). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces a new `Class.PlayerGui` property, `ClipsDescendantsSupportsRotation`, which enables clipping of rotated shapes and `Class.Path2D` instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adjusts the gamepad selection point and click algorithm to use a point on the selection outline of the current element as an origin rather than the center of the current selection. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a pop-up when a user is kicked from a play test that mirrors the message a player receives in-game. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where animations would not reset correctly in Avatar Setup. |

