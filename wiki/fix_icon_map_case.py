import os
import re
import io

assets_dir = r"d:\23-steps\wiki\assets\items"
files = [f for f in os.listdir(assets_dir) if f.endswith(".png")]
case_map = {f[:-4].lower(): f[:-4] for f in files}

html_files = [
    r"d:\23-steps\wiki\chests.html",
    r"d:\23-steps\wiki\items.html",
    r"d:\23-steps\wiki\item.html",
    r"d:\23-steps\wiki\mob.html",
    r"d:\23-steps\wiki\merchants.html"
]

for html_file in html_files:
    if not os.path.exists(html_file):
        continue
    
    with io.open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to find ICON_MAP block. Usually starts with:
    # const ICON_MAP = {
    # or
    # var ICON_MAP = {
    # It ends with };
    
    # Actually, we can just find all occurrences of `"SomeKey": "someValue"` inside the HTML and replace `someValue`.
    # To be safer, we can just replace all occurrences of `"[A-Za-z0-9_]+": "([A-Za-z0-9_]+)"` in the ICON_MAP object.
    
    def replacer(match):
        key = match.group(1)
        val = match.group(2)
        real_val = case_map.get(val.lower(), val)
        if val != real_val:
            print("  Fixed: " + val + " -> " + real_val)
        return '"{0}": "{1}"'.format(key, real_val)

    # Find the ICON_MAP block
    pattern = r'(ICON_MAP\s*=\s*\{)(.*?)(\};)'
    match = re.search(pattern, content, flags=re.DOTALL)
    if not match:
        print("Could not find ICON_MAP in " + html_file)
        continue
        
    start = match.group(1)
    middle = match.group(2)
    end = match.group(3)
    
    # In the middle part, replace `"Key": "Val"` with `"Key": "CorrectCaseVal"`
    new_middle = re.sub(r'"([A-Za-z0-9_]+)"\s*:\s*"([A-Za-z0-9_]+)"', replacer, middle)
    
    new_content = content.replace(middle, new_middle)
    
    # We also have one case for Cobalt_Trident which might have an underscore: "Cobalt_Trident" or "CobaltTrident". The regex `[A-Za-z0-9_]+` handles underscores.
    
    with io.open(html_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
        print("Updated " + html_file)
    
