# Release notes for 677

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.Bone.LocalCFrame</code> and <code>Class.Bone.WorldCFrame</code> properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.MaterialVariant.ColorMapContent</code>, <code>Class.MaterialVariant.MetalnessMapContent</code>, <code>Class.MaterialVariant.NormalMapContent</code>, and <code>Class.MaterialVariant.RoughnessMapContent</code> properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.ScrollingFrame.TopImageContent</code>, <code>Class.ScrollingFrame.MidImageContent</code>, and <code>Class.ScrollingFrame.BottomImageContent</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a <code>Class.Sky.SkyboxOrientation\|SkyboxOrientation</code> property to <code>Class.Sky</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a <code>Enum.InputActionType\|Direction3D</code> enum option for use with <code>Class.InputAction.Type</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | You can now visualize <code>Class.WrapTarget</code> cage mesh vertices before and after deformation with <code>Class.WrapDeformer</code>. By default, visualization shows post-deformation vertices, but the new debug visualization setting <code>Enum.WrapTargetDebugMode.PreWrapDeformerCage</code> lets you view the <code>Class.WrapTarget</code> cage vertices prior to deformation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a "Default" device option when selecting input and output audio devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When a gamepad is used, the <strong>X</strong> button will now trigger the closest dialog that is <strong>visible</strong> on screen, rather than just the closest one. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the type signature of the <code>getmetatable()</code> builtin to use the <code>getmetatable()</code> type function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau type solver, fixed some instances of un-reducible cyclic type functions when using compound assignment, for example <code>+=</code> or <code>-=</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, resolve some instances of generic types "leaking" into lambdas, creating unusable callbacks. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds two new APIs, <code>Class.SocialService:GetEventRsvpStatusAsync()</code> and <code>Class.SocialService:PromptRsvpToEventAsync()</code>, which allow experience events to be subscribed to in-experience. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | On the Studio start page, the "@" symbol is no longer present in group names. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Fixes performance drops when new search results would come in. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Box select can now be started from the blank space below the last instance in the hierarchy. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Fixes bug where scrolling to selected instances would sometimes not occur after clearing a search. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Fixes hangs related to instances being created/modified in bulk. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Fixes cases of errors throwing while searching if the instances are moved. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Extends type checker to check associated generics of function types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where unicode in the user directory name could cause sound files to fail to load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Parts created on the client are now destroyed when they hit the killplane. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where pixels would shift on R15 humanoid heads in non-PBR cases. While final pixels on heads might render slightly offset, this is the correct and expected behavior, ensuring the result in terms of diffuse textures is the same whether a head is rendered with PBR or not. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Various fixes: A) Fixes a bug where certain meshes could be stuck in <code>Enum.CollisionFidelity\|Default</code> or <code>Enum.CollisionFidelity\|Box</code> collision fidelity; B) Fixes a bug where an initial size of <code>0, 0, 0</code> could force a mesh to have a large <code>Class.MeshPart.ExtentsSize\|ExtentsSize</code>; C) Optimizes setting <code>Class.MeshPart.Size</code> and <code>Class.TriangleMeshPart.Size</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Studio Settings not saving for users with non-ASCII characters in OS usernames. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes a number of bugs where Roblox API types would get refined to <code>never</code> both inside and after conditionals. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where <code>Class.Sound.TimePosition</code> and <code>Class.AudioPlayer.TimePosition</code> advance while <code>Class.Sound.PlaybackSpeed</code> or <code>Class.AudioPlayer.PlaybackSpeed</code> is set to <code>0</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, improves the error reporting for <code>Library.string.format()</code> calls with non-literal format strings. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in the audio engine where playing thousands of <code>Class.AudioPlayer\|AudioPlayers</code> at once would not properly prioritize rendering the loudest ones. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the context menu sometimes opening in the 3D viewport while adjusting camera speed. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer beta: Fixes bug where hover effects wouldn't work on an undocked Explorer. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the Studio camera panning and tilting shortcuts to snap to 45-degree and 10-degree increments, respectively. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | On the Studio start page, in the experiences view, sort dropdown text that exceeds bounds is now truncated, namely "Date Created (Descending)." Also changes group dropdown truncate method to match. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes collaborator icons on the start page: previously the page showed info tiles with 3 collaborators as two avatars with an additional icon and "+1" text; now, the "+1" icon shows the third collaborator avatar. Also replaces the third collaborator with "+{N-2}" for a collaborative session with more than 3 collaborators where "N" represents the total number of collaborators. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the Next Gen Studio Preview beta feature, restores support for the <kbd>Shift</kbd><kbd>2</kbd> and <kbd>Alt</kbd><kbd>R</kbd> shortcuts to focus the <strong>Move</strong> increment spinbox and the <strong>Rotate</strong> increment spinbox, respectively. |
