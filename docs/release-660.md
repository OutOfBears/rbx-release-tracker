# Release notes for 660

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Renamed TestService.Is30FpsThrottleEnabled to TestService.ThrottlePhysicsToRealtime |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug with sky and lighting initialization. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds <code>Class.AudioEmitter:GetAudibilityFor()</code> and <code>Class.AudioListener:GetAudibilityFor()</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Now when event re-entrancy limits are hit, the script path will be printed. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Implements <code>AudioChannelMixer</code> and <code>AudioChannelSplitter</code> instances which can be used for channel layout conversions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Implements <code>:GetInputPins()</code> and <code>:GetOutputPins()</code> methods on all of the "Wirable"/Audio API instances. These list options are available for <code>Wire.TargetName</code> and <code>Wire.SourceName</code> respectively. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Moves the Insert Object button back next to the Instance name under the Next Gen Explorer beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | WrapDeformer:SetCageMeshContent() now takes an optional CFrame second parameter for the CageOrigin. If you set the cage to a mesh from another BaseWrap (or EditableMesh derived from a BaseWrap mesh), set this parameter so the deformer cage properly lines up with its parent mesh. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Type Solver Beta, implements <code>getmetatable</code> and <code>setmetatable</code> type functions to enable Creators to more readily work with metatable types without the use of <code>typeof</code>. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Existing UGC characters no longer retarget animations, but new UGC characters support retargeting. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves script paths in the Luau error message call stack section in cases where scripts are cloned/moved in the DataModel. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in Luau's type system where extending tables copied with <code>table.clone</code> would cause the types of both tables to be inaccurately combined. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Deprecates the <code>Class.AudioPlayer.AssetId</code> property, which was a string, and replaces it with <code>AudioPlayer.Asset</code>, which is of type <code>Content</code>. This autocompletes <code>rbxassetid://</code> in studio when typing numbers into the text box. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes bugs for the Luau new solver beta where some type functions are "uninhabited" and look like: <code>t1 where t1 = union<A, union<B, t1>></code> |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a <code>require-by-string</code> issue where <code>require</code> calls inside closures resolve relative to an incorrect Instance. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Removes invalid unicode handling for characters in error logs on Windows. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue causing <code>Class.Sound.DidLoop</code> to sometimes trigger more than once after a loop. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Memory profiler now shows separate items for terrain textures vs. terrain meshes under GPU memory. Previously this was counted together. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Type Solver Beta, resolves a bug where recursive types would sometimes cause type normalization to loop infinitely until memory was exhausted. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | TextChatService's default UI longer does unnecessary work in the background when disabled, either through <code>StarterGui:SetCoreGuiEnabled</code> or <code>ChatWindowConfiguration.Enabled</code>. This eliminates redundant work for experiences with custom chat UI. |
