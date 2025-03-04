# Release notes for 652

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a new <code>Class.DataStore.GetVersionAtTimeAsync</code> method to retrieve data store versions by timestamp. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Changes <code>Class.EditableMesh</code> to inherit from <code>Class.Object</code> and live outside the <code>Class.DataModel</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes stale lighting state when transitioning in then out of eager bulk execution. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Speeds up performance in the Output window when printing duplicate messages. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Avatar Setup now automatically reruns avatar marketplace validations if you change the scale of your avatar. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes the Plugin Management window infinitely loading. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds an entry to the beta features menu to enable incremental autocomplete in Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates AnimationLibrary in Animation Compositor beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.TextChannel.DirectChatRequester</code> property and <code>TextChannel:SetDirectChatRequester(requestingPlayer)</code> method that you can use to annotate text channels as "requested by" a particular player. Text channels with a <code>DirectChatRequster</code> will automatically use <code>CanUsersDirectChatAsync()</code> appropriately. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes bug where an invalid <code>Class.ParticleEmitter.FlipbookLayout</code> could be applied to a <code>Class.ParticleEmitter</code> if a different property was modified. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in non-strict mode under the New Solver Beta that causes method calls to incorrectly report argument count mismatches. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Faces now properly animate in Animation Compositor Beta self view. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in the New Type Solver Beta where property accesses from read-only tables would sometimes incorrectly report an error when read from to initialize another table's keys. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Enables <code>UIStroke</code> to be used in conjunction with rich text. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where the insert object popup would not let you use the arrow keys to change selection. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where <code>Class.UIDragDetector\|UIDragDetectors</code> would no longer function when the visible property of its parent was toggled during a drag. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates Luau parser to allow writing parenthesized types in generic type arguments, such as:<br><pre><code>type X<T> = T<br><br>local x: X<(() -> ())?><br></code></pre> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a rare bug for in-experience CSG incremental collision geometry. |
