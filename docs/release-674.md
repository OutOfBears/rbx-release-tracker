# Release notes for 674

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The new <code>SolidMesh</code> pipelines now have material box mapping that matches the behavior of the previous version. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves type checking for functions with generic type pack arguments. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Renames the <code>?</code> tab in MicroProfiler HTML dumps to <code>Info</code> for better clarity. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Fixes an instance of an internal compiler exception when calling some built-in functions, like <code>table.freeze</code>, as a child of <code>or</code> or <code>and</code> expressions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.Bone.LocalCFrame</code> and <code>Class.Bone.WorldCFrame</code> properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Error messages for some incorrect types in table literals are now more specific. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.MaterialVariant.ColorMapContent</code>, <code>Class.MaterialVariant.MetalnessMapContent</code>, <code>Class.MaterialVariant.NormalMapContent</code>, and <code>Class.MaterialVariant.RoughnessMapContent</code> properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds <code>Class.TerrainDetail.ColorMapContent</code>, <code>Class.TerrainDetail.MetalnessMapContent</code>, <code>Class.TerrainDetail.NormalMapContent</code>, and <code>Class.TerrainDetail.RoughnessMapContent</code> properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Fixes some instances of redundant unions in table indexer types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds Mouse <code>KeyCodes</code> for bool <code>InputAction</code> types. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | You can now visualize <code>Class.WrapTarget</code> cage mesh vertices pre- and post-deformation by <code>Class.WrapDeformer</code>. By default, visualization shows post-deformation vertices, but the new debug visualization setting of <code>PreWrapDeformerCage</code> lets you view the <code>Class.WrapTarget</code> cage verts prior to deformation. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the <code>GetSize()</code> method to the <code>MemoryStoreQueue</code> data structure. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the <code>GetSize()</code> method to the <code>MemoryStoreSortedMap</code> data structure. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces the CPU usage of Acoustic Simulation's area-density calculations by up to 20%. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Fixes some crashes around aliases containing type assertion expressions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash that occurred when passing a function from another module as an argument to a generic function. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Enables improved replication of simulated physics. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a persistent setting for adaptive camera speed. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the Import 3D button to the Home tab of the Next Gen Studio Preview beta feature. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer Beta: Fixes "NYI: Parented to nil" and other errors when stopping and starting play solo with certain search terms. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where <code>CatalogSearchParams.AssetTypes</code> was mistakenly given the wrong type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes blurry engine-based UI in Studio on Windows, such as the new ribbon bar and new Explorer window. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Switching between bold and italic tags now updates visuals accordingly when you're working with Rich Text on Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Smooth-skinned avatars no longer have seams at part boundaries when undergoing deformation by <code>Class.WrapDeformer\|WrapDeformers</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Instances of "uninhabited type function" when using math in loops now occur considerably less often. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where unicode in the user directory name could cause sound files to fail to load. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Parts created on the client are now destroyed when they hit the killplane. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bugs that could cause the pathfinding navigation mesh visualization to flicker or fail to render under certain conditions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where pixels would shift on R15 humanoid heads in non-PBR cases. While final pixels on heads might render slightly offset, this is the correct and expected behavior, ensuring the result in terms of diffuse textures is the same whether a head is rendered with PBR or not. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where assigning a value to a read-only property would report an error saying "Property is not a valid member of Class" instead of "Property cannot be assigned to". |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where <code>AudioRecorder</code>'s recordings could get garbage-collected before they had finished loading into an <code>AudioPlayer</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Type functions called on erroneous arguments no longer yield duplicate errors about the type function itself. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: The instance picker no longer deactivates when switching tabs while panels are docked together, or moving the viewport camera. Also, instance picker no longer sets the instance to nil when deactivating. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer Beta: Scrolling the Next Gen Explorer while reparenting an Instance now works on Windows even if DPI scaling is not set to 100%. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where "Failed to apply <code>StyleRule</code> property" warnings appeared in the Output widget when you used the Next Gen Studio Preview beta feature. |
