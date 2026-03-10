# -*- coding: utf-8 -*-
import io, re, os

print("Extracting ICON_MAP...")

with io.open(r'd:\23-steps\wiki\chests.html', 'r', encoding='utf-8') as f:
    chests_content = f.read()

m = re.search(r'const ICON_MAP = \{(.*?)\};', chests_content, re.DOTALL)
if not m:
    print("Could not find ICON_MAP in chests.html")
    exit(1)

icon_map_content = m.group(1)

js_content = """// icon_map.js
// Centralized mapping for item icons to handle different casings and special names

const ICON_MAP = {""" + icon_map_content + """};

// A fallback-friendly iconUrl function
function iconUrl(itemID) {
    if (!itemID || itemID === 'None' || itemID === 'none') return null;
    const file = ICON_MAP[itemID] || itemID.toLowerCase();
    return 'assets/items/' + file + '.png';
}
"""

with io.open(r'd:\23-steps\wiki\icon_map.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
print("Created icon_map.js!")

html_files = [
    r'd:\23-steps\wiki\chests.html',
    r'd:\23-steps\wiki\item.html',
    r'd:\23-steps\wiki\items.html',
    r'd:\23-steps\wiki\merchants.html',
]

for file in html_files:
    if not os.path.exists(file): continue
    with io.open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove ICON_MAP
    content = re.sub(r'(const|var)\s+ICON_MAP\s*=\s*\{.*?\};', '', content, flags=re.DOTALL)
    
    # Remove iconUrl
    content = re.sub(r'function\s+iconUrl\s*\([^)]*\)\s*\{[^}]*\}', '', content, flags=re.DOTALL)
    
    # Remove const ICON_PATH
    content = re.sub(r'const\s+ICON_PATH\s*=\s*[\'"].*?[\'"];\s*', '', content)
    
    if '<script src="item_configs.js"></script>' in content and 'icon_map.js' not in content:
        content = content.replace('<script src="item_configs.js"></script>', 
                                  '<script src="item_configs.js"></script>\n    <script src="icon_map.js"></script>')
                                  
    with io.open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated", file)

print("Updating gen_mob_page.py")
with io.open(r'd:\23-steps\wiki\gen_mob_page.py', 'r', encoding='utf-8') as f:
    gen = f.read()

# Remove any old ICON_MAP
gen = re.sub(r'(const|var)\s+ICON_MAP\s*=\s*\{.*?\};', '', gen, flags=re.DOTALL)

# Inject script tag
if 'icon_map.js' not in gen:
    gen = gen.replace('</script>\n  <script>\n    /* ── Helpers ── */', 
                      '</script>\n  <script src="icon_map.js"></script>\n  <script>\n    /* ── Helpers ── */')

# Replace itemIconSrc wrapper
gen = re.sub(r'function itemIconSrc\([^)]*\)\s*\{[^}]*\}', 'function itemIconSrc(itemId) { return iconUrl(itemId); }', gen, flags=re.DOTALL)

with io.open(r'd:\23-steps\wiki\gen_mob_page.py', 'w', encoding='utf-8') as f:
    f.write(gen)
    
os.system(r'python d:\23-steps\wiki\gen_mob_page.py')

with io.open(r'd:\23-steps\wiki\mob.html', 'r', encoding='utf-8') as f:
    mob = f.read()
    if 'icon_map.js' not in mob:
        print("WARNING: icon_map.js not found in mob.html")
    else:
        print("mob.html verified OK")
