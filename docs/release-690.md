# Release notes for 690

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a `Enum.InputActionType.ViewportPosition\|ViewportPosition` action type to the Input Action System. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a `Enum.InputActionType.ViewportPosition\|ViewportPosition` action type to the Input Action System. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with Input Action System mouse bindings triggering on touch and VR. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with Input Action System mouse bindings triggering on touch and VR. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a new `Class.Instance` type called `Class.TextGenerator` that provides a method for getting LLM-generated text. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an infrequent error in the Luau typechecking that could cause type inference to fail when typechecking generics with default parameters |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.AudioPlayer.SoundContent`, `Class.Sound.SoundContent`, and `Class.VideoPlayer.VideoContent` properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for occlusion culling lights. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `Class.AudioTremolo` instance, which works the same as `Class.TremoloSoundEffect` but for newer audio classes such as `Class.AudioPlayer` and `Class.Wire`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves adaptive reverb in the Acoustic Simulation beta feature. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the new Luau Type Solver, removed the ICE which occured when the Constraint Generator hit a recursion limit. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Right-to-left text support is now permanently enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix a bug where the New Luau Type Solver was not warning on incorrect use of a generic function. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes handling of triggers on Xbox Elite controller in the Xbox app. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau native code generation has been improved to avoid cases of lowering failures on arm64. One failure case was compiling certain hashing algorithm implementations like Blake2b. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix a bug where the New Luau Type Solver would incorrectly warn on certain valid uses of xpcall. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fix a case where the New Luau Type Solver could erroneously warn when passing a table literal to a function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves error messages for uninstantiated generic types in scripts typechecked with the new solver. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves error message for incompatible generic types in scripts typechecked with the new solver. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.EditableImage\|EditableImages` with `Class.SurfaceApperance.AlphaMode` set to `Transparency`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in Roblox Studio that occurred when using the "Compare Package Versions" feature with packages containing UIDragDetector objects. |
