# Release notes for 659

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds new "ProductPurchaseChannel" field to the ProcessReceipt API with enums (Unknown, InExperience, ExperienceDetailsPage) to inform developers of the sale channel for the purchase. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | "Save as local plugin" now always saves a .rbxmx file to preserve RunContext information. "Save as file" can still be used to obtain a .lua file, and .lua plugins will still run as expected. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds <code>Class.AudioAnalyzer.WindowSize</code> and <code>Class.AudioPitchShifter.WindowSize</code> properties, which can be used to adjust responsiveness against quality. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash in the new Luau type solver beta where duplicate keys in a table literal always causes Studio to crash. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Allow layered clothing to be previewed on Avatar Bodies created using WrapDeformer before publishing. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Beta Constraint Tool preserves existing initial attachments when using escape to cancel. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed an issue that made scripts in plugins with the Plugin RunContext not run. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixed a crash when connection is made to a signal that doesn't exist (e.g. Instance.StyledPropertiesChanged). |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Resolved some Beta Constraint Tool errors when not hovering over a BasePart. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces how long it takes to find the desired time position in a <code>Class.VideoFrame</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves trackpad behavior for Chromebooks. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Mention task.wait() in the warning message for calling task.wait(t) or task.delay(t, f) where t is NaN or infinity. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added a warning in the Output console window when a sound fails to load in an AudioPlayer. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The Controls Emulator widget is only visible now when a placefile is open. |
