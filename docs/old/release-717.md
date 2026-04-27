# Release notes for 717

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | SLIM support for Classic Clothing on Platform Avatars. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `InputBinding` calculation so that state is exclusively calculated from `KeyCode` or `UIButton` / composite directions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reassign Capabilities for Humanoid |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the UX of enabling Server Authority under `Class.Workspace`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Class.UIShadow` component, which adds drop shadows to parent UI instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.AvatarEditorService:PromptSaveAvatar()` and `Class.AvatarEditorService:NoPromptSaveAvatar()` will now make a single HTTP call to update the given user's platform avatar instead of up to 4 calls. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds structured logging methods to `Class.LogService`: `Class.LogService:Output()\|Output()`, `Class.LogService:Info()\|Info()`, `Class.LogService:Warn()\|Warn()`, `Class.LogService:Error()\|Error()`, and `Class.LogService:Log()\|Log()`. These methods accept a template string with `{key}` placeholders and a context table. `Class.LogService:Error()\|Error()` also halts execution and throws a structured error catchable via `Global.LuaGlobals.pcall()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates built-in avatar assets in Avatar Setup preview. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Update the Studio dialog title bar to match the main body background color. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Optimize Studio dialog buttons to match reading order and handle sizing more intelligently. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an audio crash on Mac. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes two bugs in `CompressorSoundEffect` and `EqualizerSoundEffect`, respectively, which could cause bursts of loud noise on Windows. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an bug where using the move/rotate/scale tools to reposition an `Attachment` could also reposition its parent `Model`, resulting in "doubled" movement. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix blurry or smudged text when using TextScaled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Input on GuiObjects within BillboardGui or SurfaceGui will now record the correct local position instead of a position offset by topbar or hardware insets. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.UITableLayout` sometimes incorrectly sized descendants when `Class.UITableLayout.FillEmptySpaceRows\|FillEmptySpaceRows` or `Class.UITableLayout.FillEmptySpaceColumns\|FillEmptySpaceColumns` was set to `true`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | A `Class.GuiObject` influenced by a `Class.UIScale` no longer has its `Class.GuiObject.Size\|Size` property uneditable in the **Properties** window. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Significant broadphase optimizations for geometry-dense maps, especially when large objects are moving (such as during dragging operations in Studio). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes shading of `Class.HandleAdornment\|HandleAdornments` that have `Class.HandleAdornment.AlwaysOnTop\|AlwaysOnTop` set to `true`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Respect the `transparency` parameter for `Class.EditableImage` operations with the `combineType` parameter set to `Enum.ImageCombineType.Add`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed frame spikes when using high polling mice. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes false culling of MeshParts when using the Solid Modeling On Meshes Studio beta feature. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where the Animation Graph Editor experiences a visual jump on zoom. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where the Plugins system menu would show duplicate submenus for particular plugins. |

