# Release notes for 723

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue where skyboxes with atmosphere at times would load with lower resolution. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes issue where `Class.EditableImage` objects wouldn't render on a decal with PBR maps. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `Class.StarterPlayer.LuaCharacterController` is deprecated and will be removed. Accessing this property in a live play session now logs the error "StarterPlayer.LuaCharacterController is not supported and will be removed." You should remove any references to this property from your experience to avoid errors when the flag is fully enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | The `export` keyword has been extended to support variables and functions. This works by constructing an export table and returning it from the module with the respective fields set, providing a new, consistent way for users to expose a stable API from a module. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Shows the Sandboxed and Capabilities items in the Properties widget for more instance types when the Sandboxing Beta is enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Optimizes and improves the numerical stability of `CFrame:Lerp()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds node name to animation graph logs. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.GroupService:GetRolesInGroupAsync(userId, groupId)` engine API returning all roles a user holds in a group, supporting multi-role assignment case. Deprecates `Class.Player:GetRankInGroupAsync` and `Class.Player:GetRoleInGroupAsync`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Content to string for Object now includes class name. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.UserService:GetUserFromGlobalUserIdAsync()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a read only Studio UI property `IsInSandbox` to sandbox-able instances. This property represents if the given instance or its ancestors has sandboxing enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.ProceduralModel:ForceGeneration()`, which forces generation based on the current parameters to be done immediately if possible. This is unlike normal generation, which happens as a batch once per frame. |

## Fixes

| Status | Note |
|--------|------|
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where in-game zooming would affect MicroProfiler zoom even when it was not in focus. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug in the Animation Graph Editor where when a marker event is placed on the last keyframe in a clip, the event is not fired through the graph via `Class.AnimationTrack.GetMarkerReachedSignal`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Disables platform replication when `Class.Humanoid.PlatformStand` is enabled. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes SLIM support for emissive maps in `Class.SurfaceAppearance` objects. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When cloned through scripts or duplicated in Studio, `Class.FaceControls` retains its properties. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug with `Class.CurveAnimation`, where adding a marker on the last keyframe of a curve didn't fire. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue that allowed players to send messages with excessive amounts of whitespace. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes some parts of Studio not tracking mouse location properly, specifically Explorer, Ribbon, and Animation Graph Editor. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Animation Graph Editor throwing an error when clicking New. |

