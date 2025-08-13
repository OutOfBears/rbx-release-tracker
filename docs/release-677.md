# Release notes for 677

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds a `Class.Sky.SkyboxOrientation\|SkyboxOrientation` property to `Class.Sky`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | When a gamepad is used, the **X** button will now trigger the closest dialog that is **visible** on screen, rather than just the closest one. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Updates the type signature of the `getmetatable()` builtin to use the `getmetatable()` type function. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau type solver, fixed some instances of un-reducible cyclic type functions when using compound assignment, for example `+=` or `-=`. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the New Luau Type Solver, resolve some instances of generic types "leaking" into lambdas, creating unusable callbacks. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Adds two new APIs, `Class.SocialService:GetEventRsvpStatusAsync()` and `Class.SocialService:PromptRsvpToEventAsync()`, which allow experience events to be subscribed to in-experience. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | On the Studio start page, the "@" symbol is no longer present in group names. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds `Class.MaterialVariant.ColorMapContent`, `Class.MaterialVariant.MetalnessMapContent`, `Class.MaterialVariant.NormalMapContent`, and `Class.MaterialVariant.RoughnessMapContent` properties. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, fixes a number of bugs where Roblox API types would get refined to `never` both inside and after conditionals. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In Luau's New Type Solver, improves the error reporting for `Library.string.format()` calls with non-literal format strings. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in the audio engine where playing thousands of `Class.AudioPlayer\|AudioPlayers` at once would not properly prioritize rendering the loudest ones. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Fixes performance drops when new search results would come in. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Box select can now be started from the blank space below the last instance in the hierarchy. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Fixes bug where hover effects wouldn't work on an undocked Explorer. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Fixes bug where scrolling to selected instances would sometimes not occur after clearing a search. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Fixes hangs related to instances being created/modified in bulk. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Next Gen Explorer beta: Fixes cases of errors throwing while searching if the instances are moved. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | On the Studio start page, in the experiences view, sort dropdown text that exceeds bounds is now truncated, namely "Date Created (Descending)." Also changes group dropdown truncate method to match. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes collaborator icons on the start page: previously the page showed info tiles with 3 collaborators as two avatars with an additional icon and "+1" text; now, the "+1" icon shows the third collaborator avatar. Also replaces the third collaborator with "+{N-2}" for a collaborative session with more than 3 collaborators where "N" represents the total number of collaborators. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | In the Next Gen Studio Preview beta feature, restores support for the <kbd>Shift</kbd><kbd>2</kbd> and <kbd>Alt</kbd><kbd>R</kbd> shortcuts to focus the **Move** increment spinbox and the **Rotate** increment spinbox, respectively. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes Studio Settings not saving for users with non-ASCII characters in OS usernames. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes an issue where `Class.Sound.TimePosition` and `Class.AudioPlayer.TimePosition` advance while `Class.Sound.PlaybackSpeed` or `Class.AudioPlayer.PlaybackSpeed` is set to `0`. |
