#!/bin/bash
# rebuild-economy-data.sh  (aliased as: rebuild_data)
# Rebuilds all JS data wrappers from JSON files (item_configs, mob_configs, crafting_recipes, item_values).
# Run this whenever any of those JSONs change.
# Usage: bash rebuild-economy-data.sh

set -e
WIKI_DIR="$(cd "$(dirname "$0")" && pwd)"

wrap_json() {
  local json_file="$1"
  local js_var="$2"
  local js_file="$3"
  printf 'var %s = ' "$js_var" > "$js_file"
  cat "$json_file" >> "$js_file"
  printf ';\n' >> "$js_file"
  echo "  OK $js_file"
}

echo "Rebuilding all JS data wrappers..."
wrap_json "$WIKI_DIR/crafting_recipes.json" "CRAFTING_RECIPES" "$WIKI_DIR/crafting_recipes.js"
wrap_json "$WIKI_DIR/item_values.json"      "ITEM_VALUES"      "$WIKI_DIR/item_values.js"
wrap_json "$WIKI_DIR/mob_configs.json"      "MOB_CONFIGS"      "$WIKI_DIR/mob_configs.js"
wrap_json "$WIKI_DIR/item_configs.json"     "ITEM_CONFIGS"     "$WIKI_DIR/item_configs.js"
wrap_json "$WIKI_DIR/chestdata.json"        "CHEST_DATA"       "$WIKI_DIR/chestdata.js"

# Bust browser cache: stamp ?v=TIMESTAMP on all data/icon script tags in HTML files
TS=$(date +%s)
JS_FILES=("item_configs.js" "mob_configs.js" "crafting_recipes.js" "item_values.js" "chestdata.js" "icon_map.js")

for html in "$WIKI_DIR"/*.html; do
  changed=0
  content=$(cat "$html")
  for js in "${JS_FILES[@]}"; do
    # Replace existing ?v=... or bare filename with ?v=TS
    new_content=$(echo "$content" | sed "s|${js}?v=[0-9]*|${js}?v=${TS}|g; s|${js}\"|${js}?v=${TS}\"|g")
    if [ "$new_content" != "$content" ]; then
      content="$new_content"
      changed=1
    fi
  done
  if [ $changed -eq 1 ]; then
    echo "$content" > "$html"
    echo "  Cache-busted $(basename $html)"
  fi
done

echo "Done. Open economy.html / items.html / item.html / chests.html to see updated data."
