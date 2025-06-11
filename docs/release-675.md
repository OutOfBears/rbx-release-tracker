# Release notes for 675

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves type checking for functions with generic type pack arguments. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau's New Type Solver: Fixes an instance of an internal compiler exception when calling some built-in functions, like <code>table.freeze</code>, as a child of <code>or</code> or <code>and</code> expressions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves display names of threads, closures, and their prototypes in the Luau Heap Profiler using "thread at name:line source", "name:line source" and "proto name:line source" formats. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Deprecates use of <code>Class.TextFilterResult.GetChatForUserAsync</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | First of several updates targeting Studio performance for large selections. This update makes a ~15% improvement in performance of Properties Widget when dealing with large selections. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Implements <code>Class.UserInputService.PreferredInput</code> for detecting the user's current primary input type. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the <code>GetSize()</code> method to the <code>MemoryStoreQueue</code> data structure. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the <code>GetSize()</code> method to the <code>MemoryStoreSortedMap</code> data structure. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Type inference for singles is now disabled for large tables. The intended order of magnitude here is hundreds of elements. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Enables support for write-only property types in tables. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a persistent setting for adaptive camera speed. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes blurry engine-based UI in Studio on Windows, such as the new ribbon bar and new Explorer window. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issues with Script Analysis randomly reporting internal "Analysis has been cancelled by user" and "Typeinfer failed to complete in allotted time" errors and stopping auto-complete from running. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes the way Luau renders out the empty type pack so that you will consistently see <code>()</code> in errors for things like empty function returns. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer Beta: Fixes selection occurring during shutdown triggering a "selectionChanged without connection" error. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Adds clarification to wording of Luau's error when not being able to call something of the primitive type <code>function</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Union not being enabled/disabled correctly. |
