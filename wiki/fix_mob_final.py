import json, io

# Load JSON data
with io.open('mob_configs.json', encoding='utf-8') as f:
    data = json.load(f)
json_blob = json.dumps(data, separators=(',', ':'), ensure_ascii=False)

with io.open('mob.html', encoding='utf-8') as f:
    html = f.read()

# 1. Re-inject JSON blob into the empty script tag
import re
html = re.sub(
    r'(<script id="mob-data" type="application/json">).*?(</script>)',
    r'\g<1>' + json_blob + r'\2',
    html,
    flags=re.DOTALL
)

# 2. Fix missing Merchants and Economy tabs — replace the tab-bar block
old_tabs = '''      <a class="tab-btn active" href="mobs.html"><i class="fas fa-skull"></i> Mobs</a>
      <a class="tab-btn" href="items.html"><i class="fas fa-boxes-stacked"></i> Items</a>
      <span class="tab-btn disabled"><i class="fas fa-map"></i> Maps <span class="tab-badge">Soon</span></span>
      <span class="tab-btn disabled"><i class="fas fa-scroll"></i> Quests <span class="tab-badge">Soon</span></span>
      <span class="tab-btn disabled"><i class="fas fa-hat-wizard"></i> Bosses <span class="tab-badge">Soon</span></span>
      <span class="tab-btn disabled"><i class="fas fa-hammer"></i> Crafting <span class="tab-badge">Soon</span></span>'''

new_tabs = '''      <a class="tab-btn active" href="mobs.html"><i class="fas fa-skull"></i> Mobs</a>
      <a class="tab-btn" href="items.html"><i class="fas fa-boxes"></i> Items</a>
      <a class="tab-btn" href="merchants.html"><i class="fas fa-store"></i> Merchants</a>
      <a class="tab-btn" href="economy.html"><i class="fas fa-chart-line"></i> Economy</a>
      <span class="tab-btn disabled"><i class="fas fa-map"></i> Maps <span class="tab-badge">Soon</span></span>
      <span class="tab-btn disabled"><i class="fas fa-scroll"></i> Quests <span class="tab-badge">Soon</span></span>
      <span class="tab-btn disabled"><i class="fas fa-hat-wizard"></i> Bosses <span class="tab-badge">Soon</span></span>
      <span class="tab-btn disabled"><i class="fas fa-hammer"></i> Crafting <span class="tab-badge">Soon</span></span>'''

if old_tabs in html:
    html = html.replace(old_tabs, new_tabs)
    print("Tabs fixed.")
else:
    print("WARNING: tab block not found, trying regex...")
    html = re.sub(
        r'(<a class="tab-btn active" href="mobs\.html">.*?</a>\s*<a class="tab-btn" href="items\.html">.*?</a>)',
        '''      <a class="tab-btn active" href="mobs.html"><i class="fas fa-skull"></i> Mobs</a>
      <a class="tab-btn" href="items.html"><i class="fas fa-boxes"></i> Items</a>
      <a class="tab-btn" href="merchants.html"><i class="fas fa-store"></i> Merchants</a>
      <a class="tab-btn" href="economy.html"><i class="fas fa-chart-line"></i> Economy</a>''',
        html, flags=re.DOTALL
    )
    print("Tabs fixed via regex.")

# 3. Fix broken onerror quotes inside JS strings — replace unescaped single quotes
#    The broken pattern is:  onerror="this.style.display='none';..."
#    Should be escaped as:   onerror=\"this.style.display=\\'none\\';...\"  inside JS string
#    In the HTML it appears as: onerror="this.style.display='none'..." (unescaped in JS string context)

# The JS strings that build innerHTML have the onerror attr — fix them with proper JS escaping
html = html.replace(
    "onerror=\"this.style.display='none';this.nextElementSibling.style.display='flex'\"",
    r"onerror=\"this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'\""
)
print("onerror quotes fixed:", html.count(r"onerror=\"this.style.display=\'none\'"), "occurrences")

with io.open('mob.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Done! mob.html fixed.")
print("JSON data length:", len(json_blob), "chars")
