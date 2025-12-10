# Release notes for 695

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Makes the 6db lowpass filter for `Class.AudioFilter` 25% faster. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a second argument to the `Class.Players.PlayerRemoving` signal to specify the exit reason for the removing player. For now, the specifications are coarse (`Enum.PlayerExitReason\|CreatorKick`, `Enum.PlayerExitReason\|PlatformKick`, `Enum.PlayerExitReason\|Unknown`) and may be expanded in the future. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes various `Class.VideoPlayer` auto-load issues. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Deprecates support for OpenGL ES 2.0 (legacy mobile graphics API). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the property `Class.Stats.MemoryTrackingEnabled`. This property checks the validity of the `Class.Stats:GetMemoryUsageMbForTag()` and `Class.Stats:GetMemoryUsageMbAllCategories()` methods, and the validity of the memory information in the **Memory** tab of the MicroProfiler and the Developer Console. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds preview for `Class.AudioPlayer.AudioContent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes behavior of the sun to slowly fade in/out during sunrise/sunset. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes drag in on-screen MicroProfiler when using touch input. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes the `MaxVisibleGraphemes` property for `Class.TextLabel`, `Class.TextButton`, and `Class.TextBox` used with text containing right-to-left characters. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes collision detection issues with `Class.PhysicsService:CollisionGroupSetCollidable()` for nearby objects. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | On Windows, Studio no longer generates sporadic `Enum.UserInputState.Begin` events for a key when releasing <kbd>Shift</kbd>/<kbd>Ctrl</kbd>/<kbd>Alt</kbd> modifiers. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `Class.BasePart.CanCollide` changes not being respected when a part is inside another's bounding box. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.UISizeConstraint` no longer blocks setting `Class.UISizeConstraint.MinSize\|MinSize` larger than `Class.UISizeConstraint.MaxSize\|MaxSize`, and no longer outputs a warning. If in an invalid state, then the constraint will be ignored. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes false culling for skinned meshes in some scenarios. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes incorrect `vector.lerp()` behavior for some inputs in Luau Native Code Generation. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Bounding boxes for cylinders and spheres will once again render the logical extent of the part rather than the physical size for better editing mechanics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where sounds can be audibly played after closing an experience. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.AudioEmitter` spatial offset bug for systems with high default channel count. |
