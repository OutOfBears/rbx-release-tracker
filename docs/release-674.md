# Release notes for 674

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Error messages for some incorrect types in table literals are now more specific. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The new `SolidMesh` pipelines now have material box mapping that matches the behavior of the previous version. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Fixes some instances of redundant unions in table indexer types. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds Mouse `KeyCodes` for bool `InputAction` types. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Renames the `?` tab in MicroProfiler HTML dumps to `Info` for better clarity. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reduces the CPU usage of Acoustic Simulation's area-density calculations by up to 20%. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Fixes some crashes around aliases containing type assertion expressions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash that occurred when passing a function from another module as an argument to a generic function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.TerrainDetail.ColorMapContent`, `Class.TerrainDetail.MetalnessMapContent`, `Class.TerrainDetail.NormalMapContent`, and `Class.TerrainDetail.RoughnessMapContent` properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the Import 3D button to the Home tab of the Next Gen Studio Preview beta feature. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `CatalogSearchParams.AssetTypes` was mistakenly given the wrong type. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where assigning a value to a read-only property would report an error saying "Property is not a valid member of Class" instead of "Property cannot be assigned to". |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `AudioRecorder`'s recordings could get garbage-collected before they had finished loading into an `AudioPlayer`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Type functions called on erroneous arguments no longer yield duplicate errors about the type function itself. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer Beta: Fixes "NYI: Parented to nil" and other errors when stopping and starting play solo with certain search terms. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Switching between bold and italic tags now updates visuals accordingly when you're working with Rich Text on Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Instances of "uninhabited type function" when using math in loops now occur considerably less often. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: The instance picker no longer deactivates when switching tabs while panels are docked together, or moving the viewport camera. Also, instance picker no longer sets the instance to nil when deactivating.  |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: Scrolling the Next Gen Explorer while reparenting an Instance now works on Windows even if DPI scaling is not set to 100%. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where "Failed to apply `StyleRule` property" warnings appeared in the Output widget when you used the Next Gen Studio Preview beta feature. |
