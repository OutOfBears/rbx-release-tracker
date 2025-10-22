# Release notes for 695

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Makes the 6db lowpass filter for `Class.AudioFilter` 25% faster. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a second argument to the `Class.Players.PlayerRemoving` signal to specify the exit reason for the removing player. For now, the specifications are coarse (`Enum.PlayerExitReason\|CreatorKick`, `Enum.PlayerExitReason\|PlatformKick`, `Enum.PlayerExitReason\|Unknown`) and may be expanded in the future. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes various `Class.VideoPlayer` auto-load issues. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds frame rate cap options of 160, 165, 180, and 200 to the **Maximum Frame Rate** picker in the experience settings menu. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Increases `Class.SpecialMesh` support for SLIM, and confirms `Class.CylinderMesh` support for SLIM. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Deprecates support for OpenGL ES 2.0 (legacy mobile graphics API). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.WrapDeformer\|WrapDeformers` can now attach under layered clothing meshes (for example, `Class.MeshPart\|MeshParts` that have `Class.WrapLayer` children instead of just `Class.WrapTarget` children). The difference between the `Class.WrapDeformer` cage and the `Class.WrapLayer` outer cage will deform the mesh before any layered clothing fitting. Layered clothing `Class.MeshPart\|MeshParts` deformed through the `Class.WrapDeformer` can be published just like deformed body-part `Class.MeshPart\|MeshParts`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the property `Class.Stats.MemoryTrackingEnabled`. This property checks the validity of the `Class.Stats:GetMemoryUsageMbForTag()` and `Class.Stats:GetMemoryUsageMbAllCategories()` methods, and the validity of the memory information in the **Memory** tab of the MicroProfiler and the Developer Console. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes UV issues on SLIM built-in materials. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for emissive maps in `Class.SurfaceAppearance`, `Class.MaterialVariant`, and `Class.TerrainDetail`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves `Class.Decal` support for SLIM. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds preview for `Class.AudioPlayer.AudioContent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes incorrect coloring of SLIM models. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes behavior of the sun to slowly fade in/out during sunrise/sunset. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes drag in on-screen MicroProfiler when using touch input. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The `Class.GuiObject.MouseEnter` signal no longer fires before `Class.GuiObject.MouseLeave` when you quickly move the mouse from one `Class.GuiObject` to another `Class.GuiObject`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes collision detection issues with `Class.PhysicsService:CollisionGroupSetCollidable()` for nearby objects. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `Class.BasePart.CanCollide` changes not being respected when a part is inside another's bounding box. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where sounds can be audibly played after closing an experience. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the `MaxVisibleGraphemes` property for `Class.TextLabel`, `Class.TextButton`, and `Class.TextBox` used with text containing right-to-left characters. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Smooth-skinned avatars no longer have seams at part boundaries when undergoing deformation by `Class.WrapDeformer\|WrapDeformers`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | On Windows, Studio no longer generates sporadic `Enum.UserInputState.Begin` events for a key when releasing <kbd>Shift</kbd>/<kbd>Ctrl</kbd>/<kbd>Alt</kbd> modifiers.  |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.UISizeConstraint` no longer blocks setting `Class.UISizeConstraint.MinSize\|MinSize` larger than `Class.UISizeConstraint.MaxSize\|MaxSize`, and no longer outputs a warning. If in an invalid state, then the constraint will be ignored. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.AudioEmitter` spatial offset bug for systems with high default channel count. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes false culling for skinned meshes in some scenarios. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes incorrect `vector.lerp()` behavior for some inputs in Luau Native Code Generation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Bounding boxes for cylinders and spheres will once again render the logical extent of the part rather than the physical size for better editing mechanics. |
