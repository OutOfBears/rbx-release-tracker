# Release notes for 706

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves error message around `Class.AnimationTrack` limit being reached. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, adds "subtyping driven unification:". This uses the solver's understanding of subtyping to drive unification for some internal callsites and is a broad change that should result in more consistent inference. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Add 18 new Capabilities for scripts & assigns additional classes to existing Capabilities. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Opaque `*Content` in Studio is now shown as `Content` instead of blank in the **Properties** window. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.KeyCode.Touch` for the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a spurious strict mode script analysis warning that would pop up when calling `Datatype.UDim2.new()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.MaterialVariant.AlphaMode` beta feature to Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, hover types are now more accurate with respect to overloaded functions that can take type packs. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue in script debugging so that when a debugger break is hit, all other Luau threads immediately stop executing to keep the experience's state consistent. All threads resume normal execution when the debugger continues. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Replaces the legacy implementation of `Class.Sound\|Sounds` with internal audio wiring API instances when the **Sound as a Shim** beta feature is enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a `Serialized` boolean to classes and the `Owner` classname to properties output by `Class.ReflectionService`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the tag for embedder-provided types (like Roblox API types) in type functions from `class` to `extern`. You may need to make small revisions to type functions to not produce incorrect type errors if you were explicitly testing against this tag. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the appearance of thumbnails with transparent materials (like ice) to look more accurate and less washed out. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Alphabetizes the list of Capabilities for scripts in the **Properties** window. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes color gradients forming across triangles during solid modeling. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a type alias for `Class.HumanoidDescription:SetAccessories()\|SetAccessories()` and `Class.HumanoidDescription:GetAccessories()\|GetAccessories()` to enable better autocomplete. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed an issue with **Performance** and **MicroProfiler** text display being corrupted. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a hypothetical vulnerability in physics data forwarding from server to clients. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Humanoid health bar no longer renders "negative" health, which can be observed as a health bar that extends leftward. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Setting accessories on a `Class.Humanoid` with an `Class.AccessoryDescription` no longer uses `Class.AccessoryDescription.IsLayered\|IsLayered` set in the accessory data, and instead relies on a `Class.WrapLayer` existing under the `Handle`. This fixes a bug where `Class.AccessoryDescription.IsLayered\|IsLayered` should not be considered while setting. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds mouse support to iPadOS. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds throttling to memory tracking logs to help avoid negative performance impact from ill-formed memory checks in code loops. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes **Go to Definition** on exported types from modules. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.AvatarEditorService:CheckApplyDefaultClothingAsync()\|CheckApplyDefaultClothingAsync()` would crash if `Class.Instance.Archivable\|Archivable` was set to `false` in `Class.HumanoidDescription`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug that prevented autocomplete from displaying suggestions for require‑by‑string aliases like `@game` and `@self`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes incorrect reporting of <kbd>Command</kbd> keys on Mac. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where disabling and re-enabling `Class.IKControl` with `Class.IKControl.Type\|Type` of `Enum.IKControlType.LookAt` led to initial jitter on the part. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes invalid errors in the Luau typechecker when multiple user-defined type functions are defined and some of them were using type aliases. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes viewport issues when the **Device Emulator** is active. |
