# -*- coding: utf-8 -*-
"""
update_mob_html.py
Replaces the embedded mob data in mob.html with the current mob_configs.json,
and updates the JS loot-rendering section to remove the obsolete
HasRareDrop / RareDrop / RareDropChance logic.
"""
import re, json, sys
from pathlib import Path

WIKI = Path(__file__).parent
MOB_HTML   = WIKI / "mob.html"
MOB_JSON   = WIKI / "mob_configs.json"

# ── 1. Load & validate new JSON ──────────────────────────────────────────────
data = json.loads(MOB_JSON.read_text(encoding="utf-8"))
new_json = json.dumps(data, indent="  ", ensure_ascii=False)

# ── 2. Read mob.html ─────────────────────────────────────────────────────────
html = MOB_HTML.read_text(encoding="utf-8")

# ── 3. Replace the embedded JSON block ───────────────────────────────────────
# Pattern: <script id="mob-data" type="application/json">…</script>
json_pattern = re.compile(
    r'(<script\s+id="mob-data"\s+type="application/json"\s*>)'
    r'.*?'
    r'(</script>)',
    re.DOTALL
)
if not json_pattern.search(html):
    sys.exit("ERROR: could not find <script id=\"mob-data\"> block in mob.html")

html = json_pattern.sub(rf'\g<1>{new_json}\g<2>', html)
print("✓ Embedded JSON replaced")

# ── 4. Replace the loot-rendering JS section ─────────────────────────────────
# Old block (HasRareDrop / RareDrop  aware):
old_loot_js = re.compile(
    r'/\* Loot \*/\s*\n'
    r'.*?'
    r"(?=\s*/\* Assemble \*/)",
    re.DOTALL
)

new_loot_js = """\
      /* Loot */
      var lootHtml = '';
      if (loot.DropsLoot && loot.LootDrops && loot.LootDrops.length) {
        lootHtml += '<div class="loot-grid">';
        loot.LootDrops.forEach(function (d) {
          var qty = d.MinQuantity === d.MaxQuantity
            ? 'x' + d.MinQuantity
            : 'x' + d.MinQuantity + ' \\u2013 x' + d.MaxQuantity;
          var src = itemIconSrc(d.ItemID);
          lootHtml += '<div class="loot-row">';
          lootHtml += '<div class="loot-icon-wrap"><img src="' + src + '" alt="' + d.ItemID + '" onerror="this.style.display=\\x27none\\x27;this.nextElementSibling.style.display=\\x27flex\\x27" />' +
            '<span class="loot-ph" style="display:none">&#128142;</span></div>';
          lootHtml += '<div class="loot-info"><div class="loot-name">' + d.ItemID + '</div></div>';
          lootHtml += '<div class="loot-right"><span class="loot-qty">' + qty + '</span><span class="loot-chance">' + pct(d.DropChance) + '</span></div>';
          lootHtml += '</div>';
        });
        lootHtml += '</div>';
      } else {
        lootHtml = '<div class="no-loot">No loot drops.</div>';
      }

      """

match = old_loot_js.search(html)
if not match:
    sys.exit("ERROR: could not find loot JS block in mob.html")

html = html[:match.start()] + new_loot_js + html[match.end():]
print("✓ Loot JS rendering updated (HasRareDrop / RareDrop removed)")

# ── 5. Write back ────────────────────────────────────────────────────────────
MOB_HTML.write_text(html, encoding="utf-8")
mob_count = len(data.get("MobConfigs", []))
print(f"✓ mob.html updated — {mob_count} mobs embedded")
