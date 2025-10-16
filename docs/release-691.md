# Release notes for 691

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Attributes and tags on instances are now stored more efficiently, decreasing memory pressure. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds support for LR and ISR metrics on the **Network Stats** diagnostic. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, improve instantiation of generics by allowing unions and intersections to be in their bounds. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, clarify the error message when a valid instantiation for a generic could not be inferred. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds autocomplete support for Luau function attributes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for occlusion culling lights. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, non strict mode will no longer issue warnings for usages of unreduced type functions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes a bug where arguments to a function may not be inferred correctly when using a function with several optional arguments. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, aligns the behavior of type checking property access on the `table` type between if-else statements and if-else expressions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Very large commands no longer save to the command bar history.  |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes collisions with very small triangle meshes with sizes less than 0.05. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where having many `Class.Sound\|Sounds`, `Class.SoundGroup\|SoundGroups`, `Class.AudioPlayer\|AudioPlayers`, `Class.AudioAnalyzer\|AudioAnalyzers`, or `Class.AudioTextToSpeech` could cause `Sound:Stop()` to be very slow. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a case where another gamepad can't control the player after the first gamepad was disconnected on Xbox. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `typeof` with a vector value known at compile time would incorrectly return "vector" instead of "Vector3". |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves type-checking and autocomplete when using ObjectValues in `require`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Autocomplete correctly makes suggestions in unfinished `repeat` blocks when typing at the end of the file. |
