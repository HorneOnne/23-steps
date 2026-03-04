# Custom Commands Reference

This file documents all the custom terminal commands (aliases and scripts) created to help speed up the workflow for this project.

---

## 1. `sync_item_icons`
- **Description:** Automatically copies all new or updated `.png` item icons from the main Unity project directly into the wiki's asset folder. It safely ignores any Unity `.meta` files.
- **Source Folder:** `d:\UnityProject\1PercentGameStudio\Mine&Dungeon\Assets\Resources\Items`
- **Destination:** `d:\23-steps\wiki\assets\items`
- **How to run:** Just type `sync_item_icons` in any bash terminal (Git Bash). You can be inside any folder.
- **How it works:** This is an alias defined in your `~/.bashrc` which points to `d:/23-steps/wiki/sync_item_icons.ps1`.

---

## 2. `fetch_all`
- **Description:** Automatically copies `item_configs.json`, `mob_configs.json`, and `crafting_recipes.json` from the main Unity project directly into the wiki folder.
- **Source Folder:** `d:\UnityProject\1PercentGameStudio\Mine&Dungeon\Assets\Resources`
- **Destination:** `d:\23-steps\wiki`
- **How to run:** Just type `fetch_all` in any bash terminal (Git Bash). You can be inside any folder.
- **How it works:** This is an alias defined in your `~/.bashrc` which points to `d:/23-steps/wiki/fetch_all.ps1`.
