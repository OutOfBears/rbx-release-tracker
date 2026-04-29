# Release notes for 716

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates error messages in `Class.AssetService:ComposeDecalAsync()`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue where avatar makeup layers occasionally appear darker than intended. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds **Graph Editor** button to the **Avatar** tab of Studio's toolbar. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.ControllerPartSensor.SensedMaterial\|SensedMaterial` to `Class.ControllerPartSensor`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds new **Copy As** submenu in the **Explorer** and 3D view context menus, containing **Copy Path** and **Copy Unique ID** actions. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | A `Class.ScrollingFrame` with `Class.ScrollingFrame.ScrollingDirection\|ScrollingDirection` **X** and no scrollable content can no longer set non-zero `Class.ScrollingFrame.CanvasPosition\|CanvasPosition` **Y** values, and a Class.ScrollingFrame` with `Class.ScrollingFrame.ScrollingDirection\|ScrollingDirection` **Y** and no scrollable content can no longer set non-zero `Class.ScrollingFrame.CanvasPosition\|CanvasPosition` **X** values. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes legacy `rbxasset://` paths for SLIM avatar meshes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where auto-skinning enabled accessories sometimes wouldn't display in avatar thumbnails. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes false culling of `Class.PartOperation\|PartOperations`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where `Class.Player.CharacterAppearanceLoaded` did not fire for avatars with makeup equipped. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `TextBounds` property should now be correct for text instances parented to a `Class.BillboardGui`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.ImageHandleAdornment` edge sampling. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.UIScale` objects now correctly scale their parent `Class.ImageLabel` or `Class.ImageButton` without affecting the `TileSize` property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes lighting bug where parts would not be properly shadowed if the occluders were scaled and rotated in a specific way. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes incorrect ambient occlusions for transparent materials, and fixes ambient occlusion artifacts for `Class.MaterialVariant.AlphaMode\|AlphaMode`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an internal compiler exception that occurred when trying to write an uninitialized `const` variable. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The `Class.Players.PlayerRemoving` event now correctly fires after a player leaves during **Server & Clients** testing. |

