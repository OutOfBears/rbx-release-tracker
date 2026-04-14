# Release notes for 716

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds `Class.ControllerPartSensor.SensedMaterial\|SensedMaterial` to `Class.ControllerPartSensor`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds **Graph Editor** button to the **Avatar** tab of Studio's toolbar. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.KeyCode.Touch` for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the UX of enabling Server Authority under `Class.Workspace`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Scaling an avatar with layered clothing no longer retriggers layered clothing fitting, resulting in significantly improved performance. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.AvatarEditorService:PromptSaveAvatar()` and `Class.AvatarEditorService:NoPromptSaveAvatar()` will now make a single HTTP call to update the given user's platform avatar instead of up to 4 calls. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds structured logging methods to `Class.LogService`: `Class.LogService:Output()\|Output()`, `Class.LogService:Info()\|Info()`, `Class.LogService:Warn()\|Warn()`, `Class.LogService:Error()\|Error()`, and `Class.LogService:Log()\|Log()`. These methods accept a template string with `{key}` placeholders and a context table. `Class.LogService:Error()\|Error()` also halts execution and throws a structured error catchable via `Global.LuaGlobals.pcall()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new `Class.SurfaceAppearance.ResampleMode\|ResampleMode` for `Class.SurfaceAppearance`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates error messages in `Class.AssetService:ComposeDecalAsync()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue where avatar makeup layers occasionally appear darker than intended. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for negative speed in `Enum.AnimationNodeType.ClipNode` and `Enum.AnimationNodeType.SpeedNode` animation graph nodes (Animation Graph is currently a beta feature). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds new **Copy As** submenu in the **Explorer** and 3D view context menus, containing **Copy Path** and **Copy Unique ID** actions. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes legacy `rbxasset://` paths for SLIM avatar meshes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes false culling of `Class.PartOperation\|PartOperations`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | A `Class.ScrollingFrame` with `Class.ScrollingFrame.ScrollingDirection\|ScrollingDirection` **X** can no longer set non-zero `Class.ScrollingFrame.CanvasPosition\|CanvasPosition` **Y** values, and same for `Class.ScrollingFrame.ScrollingDirection\|ScrollingDirection` **Y** and `Class.ScrollingFrame.CanvasPosition\|CanvasPosition` **X**. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `TextBounds` property should now be correct for text instances parented to a `Class.BillboardGui`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.UITableLayout` sometimes incorrectly sized descendants when `Class.UITableLayout.FillEmptySpaceRows\|FillEmptySpaceRows` or `Class.UITableLayout.FillEmptySpaceColumns\|FillEmptySpaceColumns` was set to `true`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | A `Class.GuiObject` influenced by a `Class.UIScale` no longer has its `Class.GuiObject.Size\|Size` property uneditable in the **Properties** window. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.ImageHandleAdornment` edge sampling. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Significant broadphase optimizations for geometry-dense maps, especially when large objects are moving (such as during dragging operations in Studio). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.UIScale` objects now correctly scale their parent `Class.ImageLabel` or `Class.ImageButton` without affecting the `TileSize` property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes shading of `Class.HandleAdornment\|HandleAdornments` that have `Class.HandleAdornment.AlwaysOnTop\|AlwaysOnTop` set to `true`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM handling of legacy surface types on `Class.SpecialMesh` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Respect the `transparency` parameter for `Class.EditableImage` operations with the `combineType` parameter set to `Enum.ImageCombineType.Add`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes lighting bug where parts would not be properly shadowed if the occluders were scaled and rotated in a specific way. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an audio crash on Mac. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.AudioPitchShifter` would briefly play a portion of the previous audio stream when a new stream was played. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a small volume boost in the pitch shifter effects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes night sky star twinkle rate at high FPS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes incorrect ambient occlusions for transparent materials, and fixes ambient occlusion artifacts for `Class.MaterialVariant.AlphaMode\|AlphaMode`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where opening/closing the Animation Editor would remove the `Class.Animator` on the rig and create a new one, thereby deleting all of its previous state. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a precision issue in `Library.math.noise()` for very large input values. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where auto-skinning enabled accessories sometimes wouldn't display in avatar thumbnails. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an internal compiler exception that occurred when trying to write an uninitialized `const` variable. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds syntax highlighting for `const` keyword. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where `Class.Player.CharacterAppearanceLoaded` did not fire for avatars with makeup equipped. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The `Class.Players.PlayerRemoving` event now correctly fires after a player leaves during **Server & Clients** testing. |

