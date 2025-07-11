# Release notes for 670

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Introduces three-phase rollout for updates to the physics sleep system. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau’s New Type Solver, decreases the occurrence of "leaked free type" errors.  |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates logo for Roblox Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds animation support to `Class.AssetService.CreateAssetAsync` and `Class.AssetService.CreateAssetVersionAsync`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.ImageButton.HoverImageContent` and `Class.ImageButton.PressedImageContent`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a method `CFrame:AngleBetween(cf: CFrame)`, used to compute the angle of rotation between two CFrames. This is the minimum angle required to align both rotations of the CFrames together. This function does not take the position of either CFrame into account, and only looks at the relative rotation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds ragdoll death to the Avatar Joint Upgrade. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New beta feature: Fast autocompletion with fragment typechecking. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Avatar auto setup no longer uploads models as input. This prevents you from being moderated twice for the same asset. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a case where certain code fragments could cause Luau Script Analysis to consume memory and run forever. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Changes the lowest LOD of a SurfaceAppearance to use the specular value as the average value of the roughness texture, rather than have all SurfaceAppearances use a the same constant value. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer Beta: Fixes bug where pressing F to scroll to the selection and zoom the camera would sometimes not work. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer Beta: The delete shortcut now works while a script is open. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer Beta: The duplicate shortcut now works while a script is open. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | `Class.ContentProvider:RegisterEncryptedAsset` and `Class.ContentProvider:RegisterSessionEncryptedAsset` will throw an error when an invalid ContentId is provided.  |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.ContentProvider:PreloadAsync()` now supports `Class.SurfaceAppearance` and `Class.MaterialVariant` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.RunService:IsRunMode()` no longer incorrectly returns true when run on a server started from Play mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Datatype.Ray:ClosestPoint()` and `Datatype.Ray:Distance()` now produce the expected values. Both methods now use a unit vector to perform the projection in the underlying computation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Hides cursor following widgets in the Script Editor (Signature Help, Color3 Picker, Autocomplete) when the text cursor has a selection. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: The Show Hidden Objects in Explorer Studio setting now shows ALL objects including those that have dedicated settings like CoreGui. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: Explorer no longer steals PageUp and PageDown shortcuts from the script editor. |
