# Release notes for 657

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Allows developer plugins to trigger the opening of the directional curve editor. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a visual editor for <code>Class.AudioCompressor</code> and <code>Class.AudioLimiter</code> instances. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a new <code>Class.Decal.TextureContent</code> property so that <code>EditableImage</code> can be used with decals. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves lighting update performance on mobile devices with PowerVR GPUs. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Implements the <code><mark></code> tag, which lets you highlight text with a solid background. Supports the <code>color</code> and <code>transparency</code> attributes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves performance on some Android devices running on PowerVR GPUs. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reduces startup time and memory usage on Windows devices. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Script Sync and Next Gen Explorer beta features interact properly. Script Sync status and actions are now available in the Next Gen Explorer. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In a group Team Create session, the owner of the place becomes the owner of any models and assets uploaded through the Avatar Setup Tool. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds support for built-in and custom gear accessories in the Avatar Setup previewer. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Reduces how long it takes to find the desired time position in a <code>Class.VideoFrame</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Enables the <code>Class.Workspace.FallHeightEnabled</code> property to toggle the fallen height kill plane. Also fixes the kill plane logic so that models with at least one descendant fallen part or no descendant parts are deleted. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves trackpad behavior for Chromebooks. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in which playback from <code>Class.VideoFrame</code> doesn’t work under <code>Class.CanvasGroup</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Existing UGC characters no longer retarget animations, but new UGC characters support retargeting. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Sitting characters are no longer disconnected from their seats on remote clients that stream them out and back in again. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash when using the CSG <code>Class.BasePart</code> API with the solid modeling improvements beta enabled. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves performance of reading small boxes from Terrain. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Resolves a bug in the New Type Solver Beta where <code>string.format</code> previously did not respect error-suppressing types like <code>any</code>, leading to false positive type errors. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes inconsistent behavior where the Explorer behaves as if the cursor is hovering over it when you use keyboard key interactions. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where switching themes throws warnings and doesn’t change class icons in the New Explorer Beta. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where instances reparent at creation and cause errors in the New Explorer Beta. You no longer get errors when inserting free models. |
