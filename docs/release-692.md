# Release notes for 692

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Increases the range slider maximum for `Class.PointLight`, `Class.SpotLight`, and `Class.SurfaceLight` to 120. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.WrapDeformer\|WrapDeformers` can now attach under layered clothing meshes (for example, `Class.MeshPart\|MeshParts` that have `Class.WrapLayer` children instead of just `Class.WrapTarget` children). The different between the `Class.WrapDeformer` cage and the `Class.WrapLayer` outer cage will deform the mesh before any layered clothing fitting. Layered clothing `Class.MeshPart\|MeshParts` deformed through the `Class.WrapDeformer` can be published just like deformed body-part `Class.MeshPart\|MeshParts`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows for nested pseudo instances such as ::UIStroke::UIGradient.   |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in the Input Action System where the thumbsticks could override other bindings while in the deadzone. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the property `Class.Stats.MemoryTrackingEnabled`. This property checks the validity of the `Class.Stats:GetMemoryUsageMbForTag()` and `Class.Stats:GetMemoryUsageMbAllCategories()` methods, and the validity of the memory information in the Memory tab of the MicroProfiler and the Developer Console. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When applied to constant strings, concat `..` operations are performed once during compilation time. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When the expression inside an interpolated string is known to be a string, it's embedded into a formatting string during compilation. If an interpolated string contains only constant strings, it’s replaced with a single constant. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver: Fixes a bug with type inference when accessing a property of a table whose type is a union of intersections. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver: Fixes some instances of spurious errors when invoking methods that are accessed via metatables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver: Comparison operators such as `<=` and `>` no longer use type functions, and instead apply a constraint that their arguments must have the same type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a "Custom" option for particle flipbook layouts, allowing you to define custom numbers of columns and rows. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for emissive maps in `Class.SurfaceAppearance`, `Class.MaterialVariant`, and `Class.TerrainDetail`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds preview for `Class.AudioPlayer.AudioContent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver: Fixes a crash that occurred when a function definition was unterminated in a call to `typeof` in a type context. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The `Class.GuiObject.MouseEnter` signal no longer fires before `Class.GuiObject.MouseLeave` when you quickly move the mouse from one `Class.GuiObject` to another `Class.GuiObject`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where cylinders/spheres with a diameter of <0.05 studs were sent to void when dragged. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates `Class.UserInputService.OnScreenKeyboardPosition` to use `Enum.ScreenInsets.DeviceSafeInsets` coordinates. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.AirController` now adjusts to `Class.ControllerManager.UpDirection` changes, even while active. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where updating Acoustic Simulation's adaptive reverb could cause long audio mix times or poor framerate. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where switching `Enum.CollisionFidelity` could cause Studio to be unresponsive on slow networks. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Speeds up selection when the Insert Object window is open. |
