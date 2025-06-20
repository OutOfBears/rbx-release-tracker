# Release notes for 678

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a <code>Enum.InputActionType\|Direction3D</code> enum option for use with <code>Class.InputAction.Type</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, autocomplete now suggests individual string literal keys for table index expressions when appropriate. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates the Script Capability system to extend availability of instances under existing capabilities. See the DevForum announcement for specifics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.Bone.LocalCFrame</code> and <code>Class.Bone.WorldCFrame</code> properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Textures displaying <code>Class.EditableImage\|EditableImages</code> now switch to low resolution when the system is low on memory, with no changes to the actual image data. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | You can now visualize <code>Class.WrapTarget</code> cage mesh vertices before and after deformation with <code>Class.WrapDeformer</code>. By default, visualization shows post-deformation vertices, but the new debug visualization setting <code>Enum.WrapTargetDebugMode.PreWrapDeformerCage</code> lets you view the <code>Class.WrapTarget</code> cage vertices prior to deformation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new Net Asset section to the Network Diagnostics Debug panel. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, improves error messages for table literals in assignments while still allowing imperative table updates. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer beta: the true option will now auto-sort to the top when doing searches like <code>anchored=t</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Makes the camera speed lock in the "New Studio Camera Controls" beta persistent. |
## Fixes

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Extends type checker in the New Type Solver to check associated generics of function types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where unicode in the user directory name could cause sound files to fail to load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes occasional crashes on macOS when a user unplugs a game controller. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with lighting property migration when enabling the "Unified Lighting" beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where pixels would shift on R15 humanoid heads in non-PBR cases. While final pixels on heads might render slightly offset, this is the correct and expected behavior, ensuring the result in terms of diffuse textures is the same whether a head is rendered with PBR or not. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Various fixes: A) Fixes a bug where certain meshes could be stuck in <code>Enum.CollisionFidelity\|Default</code> or <code>Enum.CollisionFidelity\|Box</code> collision fidelity; B) Fixes a bug where an initial size of <code>0, 0, 0</code> could force a mesh to have a large <code>Class.MeshPart.ExtentsSize\|ExtentsSize</code>; C) Optimizes setting <code>Class.MeshPart.Size</code> and <code>Class.TriangleMeshPart.Size</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where some text in the AudioCompressor editor renders incorrectly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that caused streaming to be very slow when an experience uses a large amount of model LoD. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a visual issue with the default <code>Class.TextChatService</code> UI that would sometimes flash a grey square on startup. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Adds back Team Create selection indicators. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Now returns temporary script settings. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Fixes an error where you could rename an object even if it was deleted before you clicked it in the Explorer window. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer - Fixes several cases where context menu items could disappear. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in which the "You've made script changes while playing " dialog keeps reappearing even after dismissed with no new script changes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The Save Place dialog now always displays on top when closing a place where the Add Tools window is open. |
