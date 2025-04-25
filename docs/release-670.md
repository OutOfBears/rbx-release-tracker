# Release notes for 670

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates logo for Roblox Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds animation support to <code>Class.AssetService.CreateAssetAsync</code> and <code>Class.AssetService.CreateAssetVersionAsync</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces three-phase rollout for updates to the physics sleep system. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds an explicit error that user defined type functions named "typeof" are not allowed. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>CapabilityControl</code> which allows sandboxed scripts to modify the capabilities and sandboxing of other instances. We also update drules to keep sandboxing safe when these properties are changed. In general, scripts cannot modify capabilities of an instance if the resulting capabilities exceeds their own. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds preset selection to the visual editor for <code>Class.AudioEmitter.DistanceAttenuation</code> and <code>Class.AudioListener.DistanceAttenuation</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.WireframeHandleAdornment.Thickness</code>, enabling drawling lines of different thicknesses. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau’s New Type Solver, decreases the occurrence of "leaked free type" errors. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.ImageButton.HoverImageContent</code> and <code>Class.ImageButton.PressedImageContent</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a method <code>CFrame:angleBetween(cf: CFrame)</code>, used to compute the angle of rotation between two CFrames. This is the minimum angle required to align both rotations of the CFrames together. This function does not take the position of either CFrame into account, and only looks at the relative rotation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds ragdoll death to the Avatar Joint Upgrade. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Enum.AudioFilterType.Lowpass6dB</code>, which produces a gentler muffling effect when assigned to an <code>Class.AudioFilter</code>, compared to <code>Enum.AudioFilterType.Lowpass12dB</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New beta feature: Fast autocompletion with fragment typechecking. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Avatar auto setup no longer uploads models as input. This prevents you from being moderated twice for the same asset. |
## Fixes

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: The new non-strict mode now reports unknown symbol errors for annotations of non-existent types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Fixes a bug where script analysis would not report argument count errors for call sites omitting parameters with the type <code>unknown</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.ContentProvider:PreloadAsync()</code> now supports <code>Class.SurfaceAppearance</code> and <code>Class.MaterialVariant</code> objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.RunService:IsRunMode()</code> no longer incorrectly returns true when run on a server started from Play mode. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where unicode in the user directory name could cause sound files to fail to load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue in <code>Class.EditableMesh</code> where removing faces could sometimes corrupt the internal mesh data structure and cause crashes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Datatype.Ray:ClosestPoint()</code> and <code>Datatype.Ray:Distance()</code> now produce the expected values. Both methods now use a unit vector to perform the projection in the underlying computation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes water editing tools sometimes not working correctly on legacy placefiles that were not previously converted to Shorelines. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue with lighting property migration when enabling the Unified Lighting Studio beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a case where certain code fragments could cause Luau Script Analysis to consume memory and run forever. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes the lowest LOD of a SurfaceAppearance to use the specular value as the average value of the roughness texture, rather than have all SurfaceAppearances use a the same constant value. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Hides cursor following widgets in the Script Editor (Signature Help, Color3 Picker, Autocomplete) when the text cursor has a selection. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: The Show Hidden Objects in Explorer Studio setting now shows ALL objects including those that have dedicated settings like CoreGui. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: Fixes bug where pressing F to scroll to the selection and zoom the camera would sometimes not work. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: The delete shortcut now works while a script is open. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: The duplicate shortcut now works while a script is open. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: Explorer no longer steals PageUp and PageDown shortcuts from the script editor. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.ContentProvider:RegisterEncryptedAsset</code> and <code>Class.ContentProvider:RegisterSessionEncryptedAsset</code> will throw an error when an invalid ContentId is provided. |
