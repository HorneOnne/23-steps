# Custom Commands Reference

This file documents all the custom terminal commands (aliases and scripts) created to help speed up the workflow for this project.

---

## 1. `sync_icons`
- **Description:** Automatically copies all new or updated `.png` item and mob icons from the main Unity project directly into the wiki's asset folders. It safely ignores any Unity `.meta` files.
- **Source Folders:**
  - Items: `d:\UnityProject\1PercentGameStudio\MineAndDungeon\Assets\Resources\Items`
  - Mobs: `d:\UnityProject\1PercentGameStudio\MineAndDungeon\Assets\Resources\MobIcons`
  - Tiles: `d:\UnityProject\1PercentGameStudio\MineAndDungeon\Assets\Sprites\Icons\tiles`
- **Destination Folders:**
  - Items: `d:\23-steps\wiki\assets\items`
  - Mobs: `d:\23-steps\wiki\assets\mobs`
  - Tiles: `d:\23-steps\wiki\assets\tiles`
- **How to run:** Just type `sync_icons` in any bash terminal (Git Bash). You can be inside any folder.
- **How it works:** This is an alias defined in your `~/.bashrc` which points to `d:/23-steps/wiki/sync_icons.ps1`.

---

## 2. `fetch_all`
- **Description:** Automatically copies `item_configs.json`, `mob_configs.json`, `crafting_recipes.json`, `item_values.json`, `chestdata.json`, and `tile_to_item_mapping.json` from the main Unity project directly into the wiki folder.
- **Source Folder:** `d:\UnityProject\1PercentGameStudio\MineAndDungeon\Assets\Resources`
  - `ItemConfigs\item_configs.json`
  - `MobConfigs\mob_configs.json`
  - `Recipes\crafting_recipes.json`
  - `ItemValues\item_values.json`
  - `ChestLoot\chestdata.json`
  - `OtherData\tile_to_item_mapping.json`
- **Destination:** `d:\23-steps\wiki`
- **How to run:** Just type `fetch_all` in any bash terminal (Git Bash). You can be inside any folder.
- **How it works:** This is an alias defined in your `~/.bashrc` which points to `d:/23-steps/wiki/fetch_all.ps1`.

---

## 3. `push_all`
- **Description:** Inverse of `fetch_all`. Copies `item_configs.json`, `mob_configs.json`, `crafting_recipes.json`, `item_values.json`, `chestdata.json`, and `tile_to_item_mapping.json` from the wiki folder back into the Unity Resources folder.
- **Source Folder:** `d:\23-steps\wiki`
- **Destination Folder:** `d:\UnityProject\1PercentGameStudio\MineAndDungeon\Assets\Resources`
  - `item_configs.json` → `ItemConfigs\`
  - `mob_configs.json` → `MobConfigs\`
  - `crafting_recipes.json` → `Recipes\`
  - `item_values.json` → `ItemValues\`
  - `chestdata.json` → `ChestLoot\`
  - `tile_to_item_mapping.json` → `OtherData\`
- **How to run:** Just type `push_all` in any bash terminal (Git Bash). You can be inside any folder.
- **How it works:** This is an alias defined in your `~/.bashrc` which points to `d:/23-steps/wiki/push_all.ps1`.

---

## 4. `rebuild_data`
- **Description:** Rebuilds the JS data wrapper files (`crafting_recipes.js`, `item_values.js`, `mob_configs.js`, `item_configs.js`) from their corresponding `.json` files. Run this after any of those JSONs change so `economy.html`, `items.html`, `item.html`, and `merchants.html` pick up updated data.
- **Location:** `d:\23-steps\wiki\rebuild-economy-data.sh`
- **How to run:** Just type `rebuild_data` in any bash terminal (Git Bash). You can be inside any folder.
- **How it works:** This is an alias defined in your `~/.bashrc` which points to `d:/23-steps/wiki/rebuild-economy-data.sh`.
- **What it regenerates:**
  | Output file | Source JSON | JS variable |
  |---|---|---|
  | `crafting_recipes.js` | `crafting_recipes.json` | `CRAFTING_RECIPES` |
  | `item_values.js` | `item_values.json` | `ITEM_VALUES` |
  | `mob_configs.js` | `mob_configs.json` | `MOB_CONFIGS` |
  | `item_configs.js` | `item_configs.json` | `ITEM_CONFIGS` |
  | `chestdata.js` | `chestdata.json` | `CHEST_DATA` |

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

## 6. `start_server`
- **Description:** Starts a local HTTP server on port 8080 serving the `23-steps` project root, then opens the wiki in your default browser. Required to preview `.html` pages (avoids CORS issues with local `fetch()` calls to JSON files).
- **How to run:** Just type `start_server` in any bash terminal (Git Bash). You can be inside any folder.
- **How it works:** This is an alias defined in your `~/.bashrc` which points to `d:/23-steps/wiki/start_server.ps1`. The script runs `python -m http.server 8080` from the project root.
- **Wiki URL:** [http://localhost:8080/wiki/](http://localhost:8080/wiki/)
- **How to stop:** Press `Ctrl+C` in the terminal where the server is running.

---

## Typical Workflow

After making changes to Unity configs, run these commands in order:

```bash
fetch_all                       # 1. Pull latest JSONs from Unity project
sync_icons                      # 2. Sync item and mob icons
rebuild_data                    # 3. Rebuild all JS data wrappers
python wiki/gen_mob_page.py     # 4. Regenerate mob detail page
```
