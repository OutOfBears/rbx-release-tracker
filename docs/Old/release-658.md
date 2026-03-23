# Release notes for 658

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Implements the <code><mark></code> tag, which lets you highlight text with a solid background. Supports the <code>color</code> and <code>transparency</code> attributes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer Beta - Adds back Ungroup button (will only show for models), and Select Parents/Select Children (which are now under Hierarchy). |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue with camera zoom resetting. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Makes PlayerScripts controls enable/disable idempotent for consistent behavior. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer Beta - Fixes scenario where having an open script editor breaks all shortcuts. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue in import queue where some errored files would not be deselected before import. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <ul><br><li>Fixes longstanding bug where networked CFrame rotations could exhibit 4x more deviation than expected.</li><br><li>Removes a restriction where networked CFrame positions were clamped to ±1M studs.</li><br></ul> |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Sitting characters are no longer disconnected from their seats on remote clients that stream them out and back in again. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in OpenGL with Unified Lighting enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds time limitation for improved pathfinding. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New Explorer Beta - Fixes clearing search not jumping to your selection if it was already expanded. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Cave generation in Terrain Editor now disabled by default. |
