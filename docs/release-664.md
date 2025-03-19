# Release notes for 664

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | <code>Runtime/Sleep</code> profiles in the MicroProfiler are now visually semi-transparent. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - Fix funky hovering when hovering over a dropdown item or search box. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer - The insert object button will stay visible while the insert object menu is open. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Add status notifications for users running Avatar Auto Setup. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds entry to properties widget for properties of the <code>Content</code> type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, greatly improves the ability to infer types of table literals, reducing the number of invariant subtyping failures, such as in:<br><pre><code>local x: foo = {abc = 100} -- ok<br>local y: foo = {abc = 10 * 10} -- Previously errors, now ok<br></code></pre> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | For the New Luau Type Solver, fixed some instances where non-nil variables became <code>nil</code> after function or method calls, such as in:<br><pre><code>--!strict<br>local RunService = game:GetService("RunService")<br>if RunService:IsRunning() then<br>  -- BEFORE: `RunService` now has type `RunService?`<br>  -- AFTER: `RunService` still has type `RunService`<br>  return RunService<br>end<br></code></pre> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | A <code>Players</code> capability is introduced as required for Players service, StarterPlayer service, Player, Teams service, and Team. There are several exceptions.<br>Player:<br><ul><br><li>Unassigned for GetJoinData</li><br><li>Unassigned for GetRankInGroup/GetRoleInGroup/IsInGroup</li><br><li>Unassigned for IsFriendsWith/GetFriendsOnline</li><br><li>Unassigned for OnTeleport</li><br><li>Unassigned for Kick</li><br><li>Chat for Chatted</li><br><li>Input for GetMouse</li><br><li>Avatar for LoadCharacterAppearance/LoadCharacterWithHumanoidDescription</li><br></ul><br>Players service:<br><ul><br><li>Unassigned for BanAsync/UnbanAsync/GetBanHistoryAsync</li><br><li>Unassigned for UserSubscriptionStatusChanged</li><br><li>Unassigned for GetFriendsAsync</li><br><li>Chat for BubbleChat and ClassicChat</li><br><li>Avatar for GetHumanoidDescriptionFromOutfitId/GetHumanoidDescriptionFromUserId/CreateHumanoidModelFromDescription</li><br></ul> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Add cage and attachment editing tools to the Avatar Auto Setup tool. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Change return type of <code>Class.OrderedDataStore:GetSortedAsync()</code> from <code>Instance</code> to <code>DataStorePages</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash occurring when changing <code>Class.AudioAnalyzer.WindowSize</code> while reading <code>Class.AudioAnalyzer:GetSpectrum()\|GetSpectrum()</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | On Mac, context menus will now open a small amount away from your cursor. This is intended to prevent accidentally moving your mouse a tiny bit and triggering whatever the first option is, such as accidentally cutting something you right-click in the Explorer. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Update dragging behavior with "Align Dragged Objects" disabled in the Dragger QoL Beta: Objects are now placed flush with one and other rather than having an unexpected gap after dragging. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improved type checking for some spatial queries. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes quadratic time complexity of render transcode step for meshes containing duplicate normal index as described in on the <a>DevForum</a>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a warning to the macro parser telling users to not use it anymore. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, <code>getmetatable</code> will now return that the type of the metatable of <code>any</code> is also <code>any</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that sometimes caused sounds shorter than one frame not to play. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Roblox Studio, when the Luau type checker or autocomplete encounters an internal error, it now tells the user that they need to restart Studio in the script analysis widget. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix UIPageLayout event sinking behavior under Scroll Event Overhaul beta. The UIPageLayout now sinks horizontal trackpad pans avoiding unintended camera rotation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces the Studio log size by removing a set of unnecessary entries. |
