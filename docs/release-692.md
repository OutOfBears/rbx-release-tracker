# Release notes for 692

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Type Solver: Fixes a bug with type inference when accessing a property of a table whose type is a union of intersections. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Increases the range slider maximum for `Class.PointLight`, `Class.SpotLight`, and `Class.SurfaceLight` to 120. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When applied to constant strings, concat `..` operations are performed once during compilation time. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When the expression inside an interpolated string is known to be a string, it's embedded into a formatting string during compilation. If an interpolated string contains only constant strings, it’s replaced with a single constant. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver: Fixes some instances of spurious errors when invoking methods that are accessed via metatables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver: Comparison operators such as `<=` and `>` no longer use type functions, and instead apply a constraint that their arguments must have the same type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Type Solver: Fixes a crash that occurred when a function definition was unterminated in a call to `typeof` in a type context. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where updating Acoustic Simulation's adaptive reverb could cause long audio mix times or poor framerate. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where cylinders/spheres with a diameter of <0.05 studs were sent to void when dragged. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Speeds up selection when the Insert Object window is open. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates `Class.UserInputService.OnScreenKeyboardPosition` to use `Enum.ScreenInsets.DeviceSafeInsets` coordinates. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where switching `Enum.CollisionFidelity` could cause Studio to be unresponsive on slow networks. |
