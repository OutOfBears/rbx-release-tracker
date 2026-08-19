# Release notes for 735

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Exposes new AnimationNodeDefinition APIs for input management: AddInputPin(pin), RemoveInputPin(pin), GetOrderedInputPinNames(), SetOrderedInputPinNames(pins), InputPinsChanged (event). |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | New entry point for `Class.CollectionService`. See `Class.CollectionService:CreateCollection()`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Classes and services with `AcousticSimulationEnabled`, such as `Class.SoundService`, now have subcategories where you can enable or disable `Occlusion` and `Reverb` independently. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `require("@rbx/PlayerModule")` if opted into PlayerScriptsUseInputActionSystem. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | `UIShadow` can now be affected by a child `UIGradient`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | When completing method calls in the script editor, autocomplete now automaticallys replace a dot with a colon when necessary. (eg a.Find to a:FindFirstChild() ) |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a new instance type: PlayerControlState for replicating scripted inputs in Server Authority. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Allows `Class.TextBox` objects with `TextEditable` = `false` to copy the `Class.TextBox.Text` on mobile devices without showing the native keyboard. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds new `Class.EditableImage` function called `SampleImageProjected` that's the opposite of `Class.EditableImage.DrawImageProjected\|DrawImageProjected`, with the projection defining how to sample texels from the source texture onto the decal texture. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds additional `Class.EditableImage` blending mode: `ImageCombineType.Subtract`. Subtract subtracts source image color and alpha from the destination image. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.UIShadow.Inset`,  which allows you to specify a `UIShadow` to be rendered above and within the parent element, and `UIShadow.ShowBehindParent`, which allows you to show or hide the part of `UIShadow` that's behind the parent element. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves performance when calling CreateDataModelContentAsync from a DataModelContent mesh. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Scripts inside a nested sandboxed container that declares `AccessOutsideWrite` can now access instances up to their parent container's isolation boundary, rather than losing all outside access when an ancestor container withholds AOW. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes textbox focus sometimes getting stuck on consoles. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau script analysis, inferred generics are now named T, U, V, ... instead of a, b, c, ... |

## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue where `TextLabel` with auto-scaled rich text may disappear under small scales. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes `Class.LogService.MessageOut\|MessageOut` behavior in deferred signals mode so that printing inside the signal handler no longer causes an infinite loop. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds new `InputSink` property for UI that allows for the deprecation of the "Active" property. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Make Z-near plane more consistent across all platforms. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Improves mouse click handling on Xbox. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where clients running above 60FPS would encounter more movement mispredictions when `Class.Workspace.AuthorityMode` was set to `Server`. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes issue where the Windows system’s keyboard layout would switch to English on launch for players who didn’t have US QWERTY installed. The active input language is now left untouched, so typing in chat and search uses your own layout. Keybinds such as WASD continue to follow physical key positions. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where `Class.MarketplaceService:PromptBundlePurchase()` did not mark purchased bundles as owned when testing in Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where tags on `ServerStorage` were deleted when using Team Create. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug that prevented type errors from being reported correctly when using the compound assignment operator (`+=`). |

