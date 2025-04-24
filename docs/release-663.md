# Release notes for 663

## Improvements

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Optimizes join times for Android devices running OpenGL ES. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Reduces the memory footprint of <code>Class.VideoFrame</code> instances that are paused and haven't been modified recently. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a New Type Solver Beta bug where refinements on generic types would lead to unexpected type errors about the <code>intersect</code> type function being uninhabited. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a New Type Solver bug where recursive function calls could lead to overly-complicated types, or constraint-solving wouldn't finish errors. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Spin boxes now clear on focus in the Next Gen Studio UI. |
## Fixes

| Status | Note |
|--------|------|
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where the camera would reset angles when switching modes. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes <code>Class.Actor.SendMessage</code> in plugin scripts using the <code>RunContext</code> plugin. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a New Explorer Beta bug where "Save as Local Plugin" wouldn't show for folders. |
| ![Live](https://img.shields.io/badge/Live-009E57?style=flat)  | Fixes a bug where the <code>Class.DragDetector.RestartDrag</code> dragged part would jump to the wrong location during the restart. The <code>RestartDrag</code> method now allows you to change the <code>DragDetector</code> direction or <code>DragStyle</code> without releasing the mouse when the <code>ModeSwitchKey</code> is pressed by <code>TranslatePlaneOrLine</code> and <code>TranslateLineOrPlane</code> drag styles. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a bug where a sandbox escape could happen when a player equipped items like tools and flags. When parented from players, these instances now become sandboxed with the appropriate capabilities. These instances remain sandboxed even when they're unparented later. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a New Explorer Beta bug where Studio would hang when you changed the parent or <code>SoundGroup</code> of a sound in the Properties window. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>Class.UserInputService.TouchEnabled</code> is now set to <code>true</code> for Windows touch devices. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Fixes a New Type Solver bug where, in an <code>if</code> condition, a function call with a table as an argument would narrow that table to <code>never</code> in the <code>if</code> body. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | <code>readparent</code> and <code>writeparent</code> are now correctly implemented for class types in user-defined functions in the New Type Solver. |
| ![Pending](https://img.shields.io/badge/Pending-DEA517?style=flat)  | Adds back plugin debugging context menu actions to the New Explorer Beta. |
