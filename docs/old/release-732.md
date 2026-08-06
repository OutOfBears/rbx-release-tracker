# Release notes for 732

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds the `Class.Decal.Rotation\|Rotation` property to `Class.Texture` and `Class.Decal` instances to support UV map rotations. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds support for Pixel 10a GrapheneOS self-signed boot keys. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.InputBinding.DisplayName` and `Class.InputBinding.DisplayImage` in service of `Class.InputActionLabel`. Also adds the read-only `Class.InputAction.PreferredBinding` property for creators who want full control over how bindings are displayed in custom UI. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New zero-code UI instance that connects to an `Class.InputAction` and automatically displays the preferred binding (active device's `Class.InputBinding`) as a text label or image. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves trackpad gesture handling on iPad. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the default `Class.Workspace.PlayerScriptsUseInputActionSystem` player scripts to call `Class.InputBinding:Fire()` and `Class.Player:GetCameraState()` directly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a long-standing issue where MicroProfiler mislabeled code regions defined with `debug.profilebegin`/`profileend`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a **Use Bounding Boxes** setting for the Studio draggers which snaps all parts as though they were simple boxes regardless of their underlying collision geometry. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `Class.ImageHandleAdornment` edge sampling. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds an `antiAliased` parameter to `Class.EditableImage:DrawCircle()` and `Class.EditableImage:DrawLine()` to support drawing hard edges. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Respects the `transparency` parameter for `Class.EditableImage` operations with the `combineType` parameter set to `Enum.ImageCombineType.Add`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes night sky star twinkle rate at high FPS. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug that would cause an occasional disconnect when adding/removing attributes while using `Class.Workspace.AuthorityMode` of `Enum.AuthorityMode.Server` or `Class.Workspace.NextGenerationReplication`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.GuiService.TopbarInset` content scales incorrectly when giving translation feedback |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Visible and on-screen modal buttons inside an off-screen parent now unlock the mouse. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes rare sleep behavior that can occur when parts sleep the exact moment a `Class.Constraint` is removed. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug that can cause the `Class.Humanoid.Died` signal to fire when other characters are streamed out. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reparenting a child UI element and then deleting the previous parent in the same frame no longer causes the child to lose styling. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.TextLabel.TextScaled\|TextScaled` `Class.TextLabel\|TextLabels` in `Class.BillboardGui\|BillboardGuis` disappearing when the billboard tweens through zero size. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Minor fixes to mouse behavior on iPad. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Touch input fix for `Class.InputAction.PreferredBinding` supporting UI modifiers and UI buttons. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where saving Command Bar snippets in one Studio window could be silently wiped when a second Studio window was open. Snippets are now persisted immediately on each save/unsave action. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in loading compressed audio files that could result in spurious "file not found" errors. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in the Animation Graph Editor where scripts created via the workflow **Graph** ⟩ **Create Animate Script** are empty. |

