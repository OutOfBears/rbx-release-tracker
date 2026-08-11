# Release notes for 733

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Improves memory-tracking system. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds type information for `Class.Player:GetCameraState()`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a `FontFace` editing bug for `Class.InputActionLabel`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Optimizations and stability improvements for Bone and Attachment-based rigs. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `BatchGetAsync` to ordered data stores, allowing retrieval of multiple key-value pairs in a single request. Accepts an array of up to 100 string keys and returns a dictionary mapping each key to its value. Gated by `DataStoreEnableOrderedBatchGetAsync`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves the Input Action System to correctly handle multiple touches originating on `UIButtons` and `UIModifiers`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Enum.PreferredInput.MicroGamepad\|MicroGamepad` for when a player has connected or most recently interacted with a gamepad without a thumbstick (for example, a TV remote or another limited-input gamepad). Also adds `Enum.KeyCode.ButtonCenter\|ButtonCenter`, `Enum.KeyCode.ButtonBack\|ButtonBack`, `Enum.KeyCode.ButtonUp\|ButtonUp`, `Enum.KeyCode.ButtonDown\|ButtonDown`, `Enum.KeyCode.ButtonLeft\|ButtonLeft`, and `Enum.KeyCode.ButtonRight\|ButtonRight`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes various crashes related to physics constraints. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where the MicroProfiler only showed local IP addresses when connecting to it. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds the `MemoryStoreDistributedCounter` data structure to the `MemoryStoreService` with support for `GetAsync()` and `IncrementAsync()` methods. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Updates `Player:IsVerified` API to accept verification level enum. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds min and max value controls to the `NumberSequence` editor in QT Properties. |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes mesh LOD flickering by transferring the cull handle instead of recreating it. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Scripts can now rename a player's Character model at any point in its lifecycle. The name lock that previously blocked renames without `WritePlayer` is no longer applied. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM support for emissive maps in `Class.SurfaceAppearance` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where tables containing a `message` key were not fully output when passed to `error`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes `Class.LogService.MessageOut\|MessageOut` behavior in deferred signals mode so that printing inside the signal handler no longer causes an infinite loop. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where equipping and unequipping tools sometimes caused full `FastCluster` (avatar rendering) rebuilds and framerate spikes. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where user-defined type function instances were not evaluated for autocomplete. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes occasional cursor lock when the app starts in the background. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where exported type functions would sometimes be replaced with `**error-type**` or raise an error alluding to modification across arenas. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes order-dependent logic when comparing attributes under server authority. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes the `AccessOutsideWrite` capability for sandboxed `ModuleScripts`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | "Remove from list" no longer appears in the context menu of local files in the Experiences page. |

