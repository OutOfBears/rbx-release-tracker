# Release notes for 671

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where loop variables were being inferred as having generic types. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds an explicit error to alert that user-defined type functions named <code>typeof</code> are not allowed. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a stricter check on accessing table indexes in the conditions of <code>if</code> statements. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where Roblox would silently lose connection without notice or the option to rejoin. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash caused by iterating through magic functions like <code>require</code> using a <code>for ... in</code> loop. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a <code>Class.LineForce.ReactionForceEnabled\|ReactionForceEnabled</code> property to the <code>Class.LinearVelocity\|LinearVelocity</code> constraint to be consistent with other <code>Class.BodyMover\|BodyMovers</code>. If you toggle the property off, the constraint only affects <code>Class.Constraint.Attachment0\|Attachment0</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a <code>SkyboxOrientation</code> property to <code>Class.Sky</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Enables a new service called <code>Class.ReflectionService</code> to inspect available <code>Objects</code> and their properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves Studio Luau type information for some instance methods that currently take tables as arguments. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where CSG operations wouldn't copy <code>Class.BasePart.AudioCanCollide</code> from the source. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Enum.AudioFilterType.Lowpass6dB</code>, which produces a gentler muffling effect when assigned to an <code>Class.AudioFilter</code> when compared to <code>Enum.AudioFilterType.Lowpass12dB</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Implements an <code>AudioRecorder</code> instance, which can be used to record audio streams in-experience. The results can be loaded back into an <code>Class.AudioPlayer</code> for playback. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Fixes a crash that could occur when passing a type pack to <code>string.format</code>. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue in <code>Class.EditableMesh</code> where removing faces could sometimes corrupt the internal mesh data structure and cause crashes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes water editing tools that would sometimes not work correctly on legacy placefiles that had not been previously converted to Shorelines. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in Avatar Setup where custom assets wouldn't appear in Test in Experience. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Fixes a bug where script analysis would not report argument count errors for call sites omitting parameters with the type <code>unknown</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the robustness of the <code>Class.GeometryService</code> CSG API. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where volumetric sounds could become much louder when unparented from a <code>Class.Part</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a rare edge case in Draggers where follow-the-cursor dragging of an object over certain surfaces could cause it to disappear. |
