# Release notes for 682

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Allows `.rbxl` files saved with Unified Lighting enabled to use the correct lighting technology on clients not yet running Unified Lighting. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.SurfaceAppearance.AlphaMode` is now scriptable. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Makes drag-and-drop less sensitive in Explorer by making `Class.Plugin:StartDrag()` not start if the mouse button is already raised. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | You can now visualize `Class.WrapTarget` cage mesh vertices before and after deformation with `Class.WrapDeformer`. By default, visualization shows post-deformation vertices, but the new debug visualization setting `Enum.WrapTargetDebugMode.PreWrapDeformerCage` lets you view the `Class.WrapTarget` cage vertices prior to deformation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The `Info` section of MicroProfiler dumps has been reformatted, being properly encoded when exporting as JSON. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with Input Action System mouse bindings triggering on touch and VR. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves performance of collision detection algorithms which should help with the frame rate for large scenes and dragging large selections in Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Optimizes raycast functions against all part types. The performance improvements range from 25-50% depending on the part type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for LR and ISR Metrics on the **Network Stats** diagnostic. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Studio Camera Controls beta, makes the camera speed lock persistent. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Minor improvements to search speeds and interactivity times in Explorer. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in the Acoustic Simulation beta feature causing frame drops when emitters and listeners move toward one another rapidly. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue that caused the Studio camera to move when zooming in or out with the **Avatar Setup** camera. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue in the Next Gen Studio Preview beta where disabling plugins would leave an extra divider in the **Plugins** tab. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Smooth-skinned avatars no longer have seams at part boundaries when undergoing deformation by `Class.WrapDeformer\|WrapDeformers`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Calling `Class.Players.CreateLocalPlayer()` on the server after a player has joined you no longer causes Studio to crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where errors that are produced by Studio's solid modeling **Separate** button weren't displayed to the user. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes a bug where type refinements would sometimes erroneously produce an uninhabited type error when they have been determined to carry no actual refinement. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug where Explorer arrow keys would sometimes get stuck while renaming an instance. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in Studio where a focused TextBox would suppress the keyboard shortcut to toggle fullscreen mode. |
