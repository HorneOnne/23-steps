#!/bin/bash
# rebuild-economy-data.sh
# Run this whenever crafting_recipes.json, item_values.json, item_configs.json, or mob_configs.json changes.
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
  echo "  ✓ $js_file"
}

echo "Rebuilding economy JS data wrappers..."
wrap_json "$WIKI_DIR/crafting_recipes.json" "CRAFTING_RECIPES" "$WIKI_DIR/crafting_recipes.js"
wrap_json "$WIKI_DIR/item_values.json"      "ITEM_VALUES"      "$WIKI_DIR/item_values.js"
wrap_json "$WIKI_DIR/mob_configs.json"      "MOB_CONFIGS"      "$WIKI_DIR/mob_configs.js"
echo "Done. Open economy.html to see updated data."
