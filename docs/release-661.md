# Release notes for 661

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes the generation of some unresolved types like <code>'a <: number</code>. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash that could occur at login in Studio. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds a visual editor for <code>Class.AudioCompressor</code> and <code>Class.AudioLimiter</code> instances. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.AssetService:CreateEditableMeshAsync()</code> now supports creating an <code>Class.EditableMesh</code> from another <code>Class.EditableMesh</code> via <code>Datatype.Content.fromObject()\|Content.fromObject(editableMesh)</code>. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | MicroProfiler now shows the links between scopes that are part of the same job. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | In Luau's New Type Solver, reading from an unknown variable will now produce an unknown symbol error in non-strict mode. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a crash for the new Luau type solver on some <code>Datatype.Vector3</code> methods. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes an issue with <code>Enum.Material\|Glass</code> material rendering in Studio's "Unified Lighting" beta. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug in Studio's "New Luau type solver" beta preventing the types of unannotated variables in multiple assignments from being correctly inferred. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes bug where importing malformed animation curve <code>.rbxmx</code> files resulted in Studio crashing. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Addressed a crash that could occur with <code>TextChannel:SetDirectChatRequestor</code>. This should no longer occur. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds new <code>Enum.ProductPurchaseChannel</code> field to the <code>Class.MarketplaceService.ProcessReceipt</code> callback to inform developers of the sale channel for the purchase. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Using <code>%c</code> with a 0 value in Luau <code>Library.string.format()</code> now appends <code>\0</code> to the string instead of skipping the value. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Addresses an issue where the default <code>Class.TextChatService</code> chat window sometimes clips longer messages behind the scrollbar instead of wrapping around to the next line. |
