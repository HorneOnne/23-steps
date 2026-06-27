import codecs
import re

path = r'd:\23-steps\wiki\explode-castle.html'
with codecs.open(path, 'r', 'utf-8') as f:
    text = f.read()

# Split the text into the materials table and the rest of the document
materials_start = text.find('<tbody>', text.find('<th>Material</th>'))
materials_end = text.find('</tbody>', materials_start) + len('</tbody>')

ammo_start = text.find('<tbody>', text.find('<th>Ammo Type</th>'))
ammo_end = text.find('</tbody>', ammo_start) + len('</tbody>')

# Extract materials tbody
materials_tbody = text[materials_start:materials_end]

# Extract ammo tbody
ammo_tbody = text[ammo_start:ammo_end]

# 1. Clean the Materials table and re-index it correctly
materials_tbody = re.sub(r'<tr>\s*<td style="text-align: center;"><strong>[\d\-]+</strong></td>', '<tr>', materials_tbody)

count = 1
def repl_mat(m):
    global count
    res = '<tr>\n                        <td style="text-align: center;"><strong>{}</strong></td>'.format(count)
    count += 1
    return res

materials_tbody = re.sub(r'<tr>', repl_mat, materials_tbody)

# 2. Clean the Ammo table (remove any index columns that were incorrectly added)
ammo_tbody = re.sub(r'<tr>\s*<td style="text-align: center;"><strong>[\d\-]+</strong></td>', '<tr>', ammo_tbody)

# Replace back into text
text = text[:materials_start] + materials_tbody + text[materials_end:ammo_start] + ammo_tbody + text[ammo_end:]

# Ensure Ammo table header does not have Index (it shouldn't, but just in case)
# And make sure Materials table has it. (We already added it in the previous step, so it should be fine)

with codecs.open(path, 'w', 'utf-8') as f:
    f.write(text)

print("Materials indexed: ", count - 1)
