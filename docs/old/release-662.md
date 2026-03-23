# Release notes for 662

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes some issues with assigning tables in Luau’s New Type Solver where optional fields were mistakenly required. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Overhauls the handling of scrolling in the Roblox engine so that scroll deltas are no longer always integers. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a field to <code>Class.DataModel</code> called <code>MatchmakingType</code> and a corresponding enum with the following values: <code>Default</code>, <code>XboxOnly</code>, and <code>PlayStationOnly</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When you set a custom icon theme, <code>StudioService:GetClassIcon()</code> now returns your custom icons within the New Explorer Beta. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the Lock button and Anchor tool button to the new Ribbon in Next Gen Studio Preview. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash that would occur when an avatar rig contained legacy clothing alongside layered clothing without a <code>Class.SurfaceAppearance</code> object. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where an animation assetID would sometimes overlap the copy button in the post-publish pop-up window. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Luau require expressions now support arguments containing () or typeof type annotations containing a resolvable instance path. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a Next Gen Studio Preview bug where the command bar would hide when opening a script. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.WrapDeformer</code> now respects its <code>Class.WrapDeformer.CageOrigin\|CageOrigin</code> property rather than using the position of its sibling <code>Class.WrapTarget</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes bug where parts of the rig in the IK chain of <code>Class.IKControl</code> have incorrect scale and offset when <code>ScaleTo</code> is called on the model. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a New Explorer Beta bug where inserted services didn't become visible in the Explorer window. |
