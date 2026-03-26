# Release notes for 713

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, memory usage for subtyping has been generally optimized. This should result in faster time to Luau interaction (time until script analysis warnings / autocomplete) and less instances of Roblox Studio running out of memory. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Optimize updates to Grass length and density. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces new `const` keyword for declaring local variables. It can be used in any position `local` is used. After variable is declared, it cannot be reassigned later but can be shadowed with new declaration. More details in RFC: [https://github.com/luau-lang/rfcs/pull/166](https://github.com/luau-lang/rfcs/pull/166). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Further minor memory usage improvements for `Class.Attachment` and `Class.Constraint` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The AssetImporter now supports an additional scaling factor when importing models and animations. The stud-to-meter conversion factor will be updated from (20:1) to (25:7). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Enables `ko-KR`, `zh-CN`, `zh-HK`, `zh-TW` in the Xbox package's application manifest. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes receiving Lua output from the RCC server while in Team Test mode. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `Class.GuiService.ViewportDisplaySize` could report incorrect sizes on large-screen devices. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in the Adaptive Animation Beta where scaling a model causes incorrect translation on the root when animating the model. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with cylinder part UVs being stretched on the left face. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the same drag gesture on a `Class.ScrollingFrame` may produce different inertial velocities on different devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where unloading audio assets that stream from disk could block other audio APIs, leading to frame-time spikes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau Script Analysis will no longer warn when pcall is passed a function that does not return anything. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes duplicate TexturePack requests when loading `Class.MaterialVariant` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in IAS where engine sunk analog inputs like gamepad thumbsticks and triggers did not reset as expected. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the root bone would not animate on certain imported character configurations. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves an error message when engine APIs like `task.spawn` call `require` directly. |

