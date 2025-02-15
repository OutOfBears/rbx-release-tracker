# Release notes for 658

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Implements the <code><mark></code> tag, which lets you highlight text with a solid background. Supports the <code>color</code> and <code>transparency</code> attributes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds new "ProductPurchaseChannel" field to the ProcessReceipt API with enums (Unknown, InExperience, ExperienceDetailsPage) to inform developers of the sale channel for the purchase. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer Beta - Adds back Ungroup button (will only show for models), and Select Parents/Select Children (which are now under Hierarchy). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a visual editor for <code>Class.AudioCompressor</code> and <code>Class.AudioLimiter</code> instances. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reduces how long it takes to find the desired time position in a <code>Class.VideoFrame</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Existing UGC characters no longer retarget animations, but new UGC characters support retargeting. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Beta Constraint Tool preserves existing initial attachments when using escape to cancel. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue with camera zoom resetting. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Makes PlayerScripts controls enable/disable idempotent for consistent behavior. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer Beta - Fixes scenario where having an open script editor breaks all shortcuts. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | New Explorer Beta - Fixes clearing search not jumping to your selection if it was already expanded. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue in import queue where some errored files would not be deselected before import. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves trackpad behavior for Chromebooks. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Sitting characters are no longer disconnected from their seats on remote clients that stream them out and back in again. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in Luau's type system where extending tables copied with <code>table.clone</code> would cause the types of both tables to be inaccurately combined. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a crash in OpenGL with Unified Lighting enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds time limitation for improved pathfinding. |
