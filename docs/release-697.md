# Release notes for 697

## Improvements

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows for nested pseudo instances such as `::UIStroke::UIGradient`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds new Thumbstick Directional Keycodes to be used for direction separation in the Input Action System. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for emissive maps in `Class.SurfaceAppearance`, `Class.MaterialVariant`, and `Class.TerrainDetail`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds an `Class.Instance.QueryDescendants` method which allows descendant lookup using a query selector string, similar to selectors in UI styling. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds several capabilities to the `SecurityCapabilities` enum. These new values only describe engine API access control; they aren't available to use for Sandboxed instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Introduces `Class.EncodingService` with functions to perform Base64 encode/decode, computation of Blake/Md5/Sha family hashes and zstd compression. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a guard to prevent script analysis from causing Roblox Studio to crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Improves non-strict type checking performance for large function calls and function definitions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Luau's New Type Solver: Improves inference speed for some math heavy code. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | PS4: Updates the Strength in Numbers trophy text to "You followed a Roblox connection into a Roblox experience!". |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | To mitigate network traffic, only updates that differ from the existing direction by a nontrivial amount are enacted for experiences where `Class.ControllerManager.FacingDirection\|FacingDirection`, `Class.ControllerManager.MovingDirection\|MovingDirection`, and `Class.ControllerManager.UpDirection\|UpDirection` are updated very frequently. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where shadows did not respect the texture offsets on transparent materials. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where saved audio device selections were not restoring properly. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.CompressorSoundEffect` issue that could cause it to produce invalid audio data |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where Studio can hang when selecting a UI element inside a `Class.UITableLayout` with multiple `Class.UISizeConstraint` child elements. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the hardware mic indicator remained turned on despite the mic being muted. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces the frame time spent updating `Class.AudioEmitter\|AudioEmitters` and `Class.AudioListener\|AudioListeners` when the "Acoustic Simulation" beta feature is enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a rare crash in `Class.AudioPlayer` when updating them in parallel. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds support for `Class.TextChannel.ShouldDeliverCallback\|ShouldDeliverCallback` on the client, allowing client side scripts to control message delivery. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.Player.Chatted` to fire when using chat commands. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Attempting to set breakpoints on a old script versions no longer leads to a crash. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the drag events would receive the wrong position vector when `Class.ScreenGui.IgnoreGuiInset` is false. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes image upload within Material Manager for group experiences. |
