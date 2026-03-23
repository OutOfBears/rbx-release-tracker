# Release notes for 651

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a <code>Class.Players</code> property named <code>BanningEnabled</code>, which enables/disables the three <code>Class.Players</code> methods that constitute the ban API. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Changes <code>Class.EditableMesh</code> to inherit from <code>Class.Object</code> and live outside the <code>Class.DataModel</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Refines type information for <code>require</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed issue with terrain in lighting propagation. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Added support for <code>Plugin</code> RunContext attribute—a <code>Script</code> that only runs as part of a plugin. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improved Output window performance when printing large tables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces the memory usage of ShadowMap and Future lighting technologies when running at low graphics quality levels. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes bug where an invalid <code>Class.ParticleEmitter.FlipbookLayout</code> could be applied to a <code>Class.ParticleEmitter</code> if a different property was modified. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issues with the mobile touch jump button on character death. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Enables <code>UIStroke</code> to be used in conjunction with rich text. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixing crashes and glitches in self-view animation. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The Gamepad Controller now opens when it's launched for the first time. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes autocomplete for string literals that contain special characters. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | User-defined function documentation is now pulled from comments above function attributes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a class of bugs in the new Luau solver regarding unsolved contraints. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Restore the defining module name metadata for types in the New Type Solver Beta that allows for more detailed error messages that include the module the type originates from. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updating retargeting cache so it doesn't cache procedural rig modifications. This could result in broken looking animation in some experiences. |
