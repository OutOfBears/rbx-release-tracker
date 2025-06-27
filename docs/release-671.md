# Release notes for 671

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where loop variables were being inferred as having generic types. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds an explicit error to alert that user-defined type functions named `typeof` are not allowed. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a stricter check on accessing table indexes in the conditions of `if` statements. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where Roblox would silently lose connection without notice or the option to rejoin. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Fixes a crash that could occur when passing a type pack to `string.format`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash caused by iterating through magic functions like `require` using a `for ... in` loop. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a `Class.LineForce.ReactionForceEnabled\|ReactionForceEnabled` property to the `Class.LinearVelocity\|LinearVelocity` constraint to be consistent with other `Class.BodyMover\|BodyMovers`. If you toggle the property off, the constraint only affects `Class.Constraint.Attachment0\|Attachment0`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Enables a new service called `Class.ReflectionService` to inspect available `Objects` and their properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves Studio Luau type information for some instance methods that currently take tables as arguments. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where CSG operations wouldn't copy `Class.BasePart.AudioCanCollide` from the source. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.AudioFilterType.Lowpass6dB`, which produces a gentler muffling effect when assigned to an `Class.AudioFilter` when compared to `Enum.AudioFilterType.Lowpass12dB`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Implements an `AudioRecorder` instance, which can be used to record audio streams in-experience. The results can be loaded back into an `Class.AudioPlayer` for playback. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Fixes a bug where script analysis would not report argument count errors for call sites omitting parameters with the type `unknown`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue in `Class.EditableMesh` where removing faces could sometimes corrupt the internal mesh data structure and cause crashes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes water editing tools that would sometimes not work correctly on legacy placefiles that had not been previously converted to Shorelines. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in Avatar Setup where custom assets wouldn't appear in Test in Experience. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the robustness of the `Class.GeometryService` CSG API. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where volumetric sounds could become much louder when unparented from a `Class.Part`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a rare edge case in Draggers where follow-the-cursor dragging of an object over certain surfaces could cause it to disappear. |
