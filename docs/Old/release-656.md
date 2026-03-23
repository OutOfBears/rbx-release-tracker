# Release notes for 656

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes voxelization of invalid parts and meshes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reduces overhead of accessing Instance properties between 24-45%. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds <code>buffer.readbits</code> and <code>buffer.writebits</code> functions to the Luau buffer library. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds Luau <code>math.lerp</code> method to interpolate numbers. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Avatar Setup now automatically reruns avatar marketplace validations if you change the scale of your avatar. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Next Gen Explorer beta now displays status for Packages and offers package quick actions when clicking the package status indicator. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Corrects inaccurate median calculation in the web-based MicroProfiler JSON export. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where "Function encountered an internal lowering failure" was reported on native functions with a large number of table accesses. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where rendering bounding box is different from physics bounding box for mesh parts. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds two new Studio settings to allow users to specify which autocomplete behavior (replace or insert) they want for the Enter/Return and Tab keys. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes the incorrect insert position for items from autocomplete plugin API. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where destroying the parent of a <code>Class.UIDragDetector</code> during dragEnd caused improper termination of the drag. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer Beta - Fixes a bug where dragging into something not previously expanded would lose it. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Under the Explorer beta, the Insert Object menu shows up attached to the place you requested it in the Explorer rather than in the top right corner of the screen. It will still cut off the edge of the screen if in Expanded mode, that's a separate known issue. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer Beta - Fixes a bug where things would nag about tree descendant count underflows when moving things out of unexpanded parents. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer Beta - Fixes a bug where selecting an instance and then clearing a search would expand it, leaving it broken if it had no children. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates the Bulk Importer's error messages to display more information. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Increases Unreliable Remote Events payload maximum from 900 to 1000 (997 characters for a single string), and fixes a bug where the maximum size was inaccurate after a large number of players joined the game session. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Studio crashing during some instances of Luau having an internal compiler error. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug where part streaming would cause animation retargeting glitches. |
