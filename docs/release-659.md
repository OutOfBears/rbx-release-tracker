# Release notes for 659

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds new "ProductPurchaseChannel" field to the ProcessReceipt API with enums (Unknown, InExperience, ExperienceDetailsPage) to inform developers of the sale channel for the purchase. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a visual editor for <code>Class.AudioCompressor</code> and <code>Class.AudioLimiter</code> instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | "Save as local plugin" now always saves a .rbxmx file to preserve RunContext information. "Save as file" can still be used to obtain a .lua file, and .lua plugins will still run as expected. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.AudioAnalyzer.WindowSize</code> and <code>Class.AudioPitchShifter.WindowSize</code> properties, which can be used to adjust responsiveness against quality. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in the new Luau type solver beta where duplicate keys in a table literal always causes Studio to crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allow layered clothing to be previewed on Avatar Bodies created using WrapDeformer before publishing. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reduces how long it takes to find the desired time position in a <code>Class.VideoFrame</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Beta Constraint Tool preserves existing initial attachments when using escape to cancel. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Removes invalid unicode handling for characters in error logs on Windows. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The Controls Emulator widget is only visible now when a placefile is open. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves trackpad behavior for Chromebooks. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in Luau's type system where extending tables copied with <code>table.clone</code> would cause the types of both tables to be inaccurately combined. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Deprecates the <code>Class.AudioPlayer.AssetId</code> property, which was a string, and replaces it with <code>AudioPlayer.Asset</code>, which is of type <code>Content</code>. This autocompletes <code>rbxassetid://</code> in studio when typing numbers into the text box. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed an issue that made scripts in plugins with the Plugin RunContext not run. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.WrapDeformer</code> now respects its CageOrigin property rather than using the position of its sibling WrapTarget. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Mention task.wait() in the warning message for calling task.wait(t) or task.delay(t, f) where t is NaN or infinity. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixed a crash when connection is made to a signal that doesn't exist (e.g. Instance.StyledPropertiesChanged). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Resolved some Beta Constraint Tool errors when not hovering over a BasePart. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.UserInputService.TouchEnabled</code> will be set to true for windows touch devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Added a warning in the Output console window when a sound fails to load in an AudioPlayer. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue causing <code>Class.Sound.DidLoop</code> to sometimes trigger more than once after a loop. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Memory profiler now shows separate items for terrain textures vs. terrain meshes under GPU memory. Previously this was counted together. |
