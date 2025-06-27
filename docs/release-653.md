# Release notes for 653

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | For the new Luau type solver, users can assign <code>nil</code> into tables with indexers. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a <code>Class.Players</code> property named <code>BanningEnabled</code>, which enables/disables the three <code>Class.Players</code> methods that constitute the ban API. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | <code>Instance.Changed</code> and <code>DataModel.ItemChanged</code> signals will no longer be called when non-scriptable of inaccessible properties change. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates lighting priority order. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes false positive error report in Luau typechecking when an unspecified enum is indexed with a string, for example, in <code>Enum[a][b]</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.AssetService.CreateAssetAsync</code> and <code>Class.AssetService.CreateAssetVersionAsync</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the <code>Class.TextChannel.DirectChatRequester</code> property and <code>TextChannel:SetDirectChatRequester(requestingPlayer)</code> method, which developers can use to annotate <code>TextChannels</code> as "requested by" a particular player. <code>TextChannels</code> with a <code>DirectChatRequester</code> will automatically use <code>CanUsersDirectChatAsync</code> appropriately. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue when <code>Class.EditableMesh</code> doesn't get updated on some mobile devices. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes incorrect bounding box for <code>Class.EditableMesh</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes pathfinding crash related to new improved algorithm. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | You can now write scripts for <code>PermissionPolicyFunction</code> that change their return result to false while the <code>Class.DragDetector</code> is being dragged and will no longer crash when using the <code>ModeSwitchKey</code> to change between planar and linear translation. The permission policy now <strong>only</strong> checks on mouse down, and that answer will be used until mouse up, even if the <code>ModeSwitchKey</code> is pressed. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes <code>Class.GroundController</code> sliding when landing on slopes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a Luau parser bug that could cause Luau to hang indefinitely when parsing ill-formed table types in class declarations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that could prevent tools from being equipped in some scenarios, such as when <code>ImprovedModelStreaming</code> is enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes certain "EditableImage/EditableMesh is not accessible" errors in the command line or plugins in Studio |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Opening a place with terrain panel docked now selects the Select Dragger by default instead of attempting to select one of the terrain tools by default. |
