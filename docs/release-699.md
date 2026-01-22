# Release notes for 699

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Allows `Class.StyleSheet\|StyleSheets` in `Class.Plugin\|Plugins` to be styled. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | [https://luau.org/demo](https://luau.org/demo) now supports type checking. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reduces the size of `Class.Instance` on 64-bit systems by 8 bytes. Will generally save a few MBs of memory in games due to the number of instances. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, `Global.LuaGlobals.getmetatable()`now works on refined instances of an `any` type. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Changes the source of "Ping" in the Performance Stats UI to match `Class.Player:GetNetworkPing()`, which better represents current network conditions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed an issue where MicroProfiler and Performance panel text display was corrupted. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes Studio bug with `Datatype.Content` formatting in the Explorer. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves performance of `Class.Instance` return by 30% with extra improvements for `Class.Instance:GetDescendants()` and `Class.Instance:QueryDescendants()` where large arrays are returned. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.Instance:QueryDescendants()` call with `[ClassName=name]` property match is now 2x faster. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Splits up the Microprofiler `Sound` scope into more meaningful phases of execution. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.AudioPlayer.AutoPlay`, allowing `Class.AudioPlayer\|AudioPlayers` to be played on startup automatically. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Rx` "Batch Data" network events not expanding properly in the Microprofiler (`Tx` still not supported). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new `Class.VideoSampler` object for getting image frames from a video content. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | A `Class.PathfindingModifier` with no `Class.PathfindingModifier.Label\|Label` and `Class.PathfindingModifier.PassThrough\|PassThrough` set to `true` won't affect navigation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Class.GenerationService:GenerateModelAsync()` function to `Class.GenerationService`. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where, if a `Class.TextBox` receives focus and then gets parented to `nil`, its `Class.TextBox.Text\|Text` property may be cleared, even if `Class.TextBox.ClearTextOnFocus` is `false`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where Luau's type system would lose track of some components of an intersection type when using `Library.table.clone()`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds the flexibility to define `Class.ParticleEmitter` flipbook layouts without any limitations on texture size. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in Luau's type checking where `Library.table.clone()` would sometimes erroneously error when provided a value from a returning function. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a rare crash when `Class.AudioEmitter\|AudioEmitters` or `Class.AudioListener\|AudioListeners` finish their acoustic simulation work too quickly. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes buttons to open the Material Manager and Material Generator from the Material picker in the toolbar. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Re-adds missing "down arrow" icon in the Developer Console. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Sets a limit on the number of nested deferred events that can be executed per-source in a single frame. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash when exporting OBJs with emissive maps beta enabled. |
