# Release notes for 667

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Removes lighting calculations from rendering. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Introduces support for deprecating methods in Luau class declarations. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | When using Luau user-defined type functions in Luau's New Type Solver, autocomplete now works on the types coming from evaluation of those type functions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds an 'Ask Assistant' option to the right-click menu of script errors in the output window. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the new Explorer, added box select. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the new Explorer, removed "select on insertion" setting from dropdown (but is still accessible from the Insert Object settings menu). "Highlight hierarchy under selection" has been removed and is now forced on. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes the superclass of <code>Camera</code> from <code>Instance</code> to <code>PVInstance</code>. This doesn't do anything meaningful <em>yet</em>, but it will :) |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the performance of the IK tool for "Body Part" mode in the Animation Clip Editor. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In many cases, we were previously enforcing that concat operands be only strings, and have updated the type solver to accept numbers in those cases as well. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Sandboxing is now available for ModuleScripts. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | For the Luau New Type Solver, fixed some instances of being unable to use table literals in a "more general" manner. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Editable mesh updates:<br><ul><br><li>Add get methods for a vertex on a face. <code>GetVertexFaceColor</code>, <code>GetVertexFaceNormal</code>, <code>GetVertexFaceUV</code></li><br><li>Add set methods for a vertex on a face. <code>SetVertexFaceColor</code>, <code>SetVertexFaceNormal</code>, <code>SetVertexFaceUV</code></li><br><li>Add get methods for all corners involving a vertex. <code>GetVertexColors</code>, <code>GetVertexNormals</code>, <code>GetVertexUVs</code>, <code>GetVertexFaces</code></li><br><li>Deprecate <code>GetVerticesWithAttribute</code> in favor of new alternatives. <code>GetVerticesWithColor</code>, <code>GetVerticesWithNormal</code>, <code>GetVerticesWithUV</code>, <code>GetFaceVertices</code></li><br><li>Deprecate <code>GetFacesWithAttribute</code> in favor of new alternatives. <code>GetFacesWithColor</code>, <code>GetFacesWithNormal</code>, <code>GetFacesWithUV</code>, <code>GetVertexFaces</code></li><br></ul> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Logs an error if users access API's are deemed to not be AuroraScript safe. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a property to <code>Class.VoiceChatService\|VoiceChatService</code> that sets the default distance attenuation curve for default voice emitters. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New beta feature: Fast autocompletion with fragment typechecking. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issues of Luau user-defined type functions failing with 'Type function instance is uninhabited' error when used inside type aliases like <code>type Wrap<T> = { a: UserFunction<T?> }</code> and other nested scenarios. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | DragDetector callbacks may change the Anchored property of the dragged part without fear of crashing. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes crash that could occur on startup if client settings failed to download. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an animation bug where running IK Control with either the End Effector or Chain Root wrapping a PoseHandle would cause a crash |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, fixes a bug with type refinements that would sometimes lead to types exploding to include <code>boolean \| buffer \| class \| function \| number \| string \| table \| thread</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, overloaded functions with singleton type arguments now more often infer the correct argument types without casting. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that could cause Model LOD to flicker when characters get out of a seat. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in Luau where writing a union of string literal types as a table indexer would cause an unnecessary parse error without being parenthesized. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that sometimes caused sounds shorter than one frame not to play. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where inserting from a file into locations other than Workspace would be ignored by undo history. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the issue with math operations broken in Properties widget. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Changes to the ShowDevelopmentGui property are now excluded from change history. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a rare crash relating to the insert object action (Ctrl+I). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where Studio shortcuts would become disabled after stopping a play test with a text input UI having focus. |
