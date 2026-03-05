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
  - `ItemConfigs\item_configs.json`
  - `MobConfigs\mob_configs.json`
  - `Recipes\crafting_recipes.json`
  - `ItemValues\item_values.json`
- **Destination:** `d:\23-steps\wiki`
- **How to run:** Just type `fetch_all` in any bash terminal (Git Bash). You can be inside any folder.
- **How it works:** This is an alias defined in your `~/.bashrc` which points to `d:/23-steps/wiki/fetch_all.ps1`.

---

## 3. `rebuild_economy`
- **Description:** Rebuilds the JS data wrapper files (`crafting_recipes.js`, `item_values.js`, `mob_configs.js`) from their corresponding `.json` files. Run this after any of those JSONs change so the `economy.html` page picks up updated data.
- **Location:** `d:\23-steps\wiki\rebuild-economy-data.sh`
- **How to run:** Just type `rebuild_economy` in any bash terminal (Git Bash). You can be inside any folder.
- **How it works:** This is an alias defined in your `~/.bashrc` which points to `d:/23-steps/wiki/rebuild-economy-data.sh`.
- **What it regenerates:**
  | Output file | Source JSON | JS variable |
  |---|---|---|
  | `crafting_recipes.js` | `crafting_recipes.json` | `CRAFTING_RECIPES` |
  | `item_values.js` | `item_values.json` | `ITEM_VALUES` |
  | `mob_configs.js` | `mob_configs.json` | `MOB_CONFIGS` |

---

## 4. `gen_mob_page.py`
- **Description:** Generates `mob.html` (the individual mob detail page) by reading `mob_configs.json` and embedding all mob data inline as JSON. This makes the page fully self-contained (no external fetch needed).
- **Location:** `d:\23-steps\wiki\gen_mob_page.py`
- **How to run:** `python wiki/gen_mob_page.py` from the `d:\23-steps` root, or `python gen_mob_page.py` from inside the `wiki/` folder.
- **Output:** Overwrites `d:\23-steps\wiki\mob.html`.
- **When to run:** Whenever `mob_configs.json` changes (after a `fetch_all`).

---

## 5. `embed_mob_data.py`
- **Description:** Embeds the `mob_configs.json` data inline into `mobs.html` by replacing the external `<script src="...">` tag with an inline `<script>` block. Useful for making `mobs.html` self-contained.
- **Location:** `d:\23-steps\wiki\embed_mob_data.py`
- **How to run:** `python wiki/embed_mob_data.py` from the `d:\23-steps` root, or `python embed_mob_data.py` from inside the `wiki/` folder.
- **Output:** Overwrites `d:\23-steps\wiki\mobs.html` in-place.

---

## Typical Workflow

After making changes to Unity configs, run these commands in order:

```bash
fetch_all                       # 1. Pull latest JSONs from Unity project
sync_item_icons                 # 2. Sync item icons
rebuild_economy                 # 3. Rebuild JS wrappers for economy.html
python wiki/gen_mob_page.py     # 4. Regenerate mob detail page
```
