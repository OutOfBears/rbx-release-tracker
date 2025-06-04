# Release notes for 668

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, fixes crashes that occurred when the <code>index</code> type function was used cyclically to define the indexer of a table type. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds support for a new <code>@self</code> alias to directly access children when using <code>require-by-string</code>, and deprecates the special treatment of ModuleScripts named <code>Init</code> or <code>init</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Add a new default <code>@self</code> alias as an autocomplete option when using <code>require-by-string</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau’s New Type Solver, resolves some crashes related to using type assertions with a leading union or intersection type, such as:<br><pre><code>local x = 42 :: \| number <br>                \| string<br></code></pre> |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Studio Debug Assistant error actions in the output context menu now retain on exiting Play mode. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the new Explorer, selected instances now have darker text. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds section headers to the Draggers dropdown in the Nex Gen Studio toolbar. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allow users to specify body mesh, or layered or rigid clothing and accessories for input models of Avatar Setup. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Mac Studio now supports pinch to zoom. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | <code>Class.RopeConstraint</code>, <code>Class.RodConstraint</code>, and <code>Class.SpringConstraint</code> objects are now visible by default when you create them using the Beta Constraint tool. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes long heap profiler entries to be properly cut off instead of disappearing. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, fixes an internal compiler exception when passing the same argument twice to <code>table.freeze</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | The Beta Constraint tool now correctly resizes attachment adorns in accordance with the spinbox value. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with glass refraction when unified lighting is enabled. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the new Explorer, the scroll bar now snaps to the edges when you go out of bounds, rather than stopping still. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes ScaleTo behavior for <code>Class.Trail</code> instances. <code>Class.Trail.TextureLength</code> should not be scaled in <code>Enum.TextureMode.Stretch</code> mode, and <code>Class.Trail.WidthScale</code> should never be scaled. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the new Explorer, fixes broken box select behavior. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Mutually recursive types must agree on their type parameters. This restriction always existed, but it caused random behavior if it was broken. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Studio selections counting as Triangles and Drawcalls in scene statistics. |
