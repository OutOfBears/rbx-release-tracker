# Release notes for 679

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau autocomplete now prioritizes showing table properties in index expressions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new `Class.Decal.TextureContent` property so that `EditableImage` can be used with decals.  |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, fixes an instance where refining an intersection of tables resulted in the `never` type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, table literals within function calls now have more precise errors. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau type solver, the `keyof` type function now respects empty string properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer: Pressing tab/shift-tab while renaming now lets you rename the next/previous instance. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where unicode in the user directory name could cause sound files to fail to load. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with lighting property migration when enabling the "Unified Lighting" beta. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue that caused streaming to be very slow when an experience uses a large amount of model LoD. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where the Luau Heap report displayed the same path information in the Unique References section. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `Class.ParticleEmitter\|ParticleEmitters` and Lights don't follow Detached `Class.Attachment\|Attachments` |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where move/rotate/scale draggers don't work with Detached `Class.Attachment\|Attachments`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue in the Next Gen Studio Preview beta where the Move Left and Move Right options on the buttons of a custom tab didn't always work on the first try. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In the New Luau Type Solver, refinements on table index expressions no longer prevent you from assigning to the same expression. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Parts created on the client are now destroyed when they hit the killplane. |
