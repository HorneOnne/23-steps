import codecs
import re

path = r'd:\23-steps\wiki\explode-castle.html'
with codecs.open(path, 'r', 'utf-8') as f:
    text = f.read()

# Materials table
mat_th_idx = text.find('Material</th>')
materials_start = text.find('<tbody>', mat_th_idx)
materials_end = text.find('</tbody>', materials_start) + len('</tbody>')

# Ammo table
ammo_th_idx = text.find('Ammo Type</th>')
ammo_start = text.find('<tbody>', ammo_th_idx)
ammo_end = text.find('</tbody>', ammo_start) + len('</tbody>')

materials_tbody = text[materials_start:materials_end]
ammo_tbody = text[ammo_start:ammo_end]

# Remove index from Materials table
materials_tbody = re.sub(r'<tr>\s*<td style="text-align: center;"><strong>[\d\-]+</strong></td>', '<tr>', materials_tbody)

count = 1
def repl_mat(m):
    global count
    res = '<tr>\n                        <td style="text-align: center;"><strong>{}</strong></td>'.format(count)
    count += 1
    return res

materials_tbody = re.sub(r'<tr>', repl_mat, materials_tbody)

# Remove index from Ammo table
ammo_tbody = re.sub(r'<tr>\s*<td style="text-align: center;"><strong>[\d\-]+</strong></td>', '<tr>', ammo_tbody)

# Also check for Ammo table header and make sure it doesn't have an extra column
ammo_thead_start = text.rfind('<thead>', 0, ammo_start)
ammo_thead_end = text.find('</thead>', ammo_thead_start)
ammo_thead = text[ammo_thead_start:ammo_thead_end]
if '<th>Index</th>' in ammo_thead:
    ammo_thead = ammo_thead.replace('<th style="width: 40px; text-align: center;">Index</th>\n', '')
    text = text[:ammo_thead_start] + ammo_thead + text[ammo_thead_end:]
    # update offsets
    ammo_start = text.find('<tbody>', ammo_th_idx)
    ammo_end = text.find('</tbody>', ammo_start) + len('</tbody>')

text = text[:materials_start] + materials_tbody + text[materials_end:ammo_start] + ammo_tbody + text[ammo_end:]

with codecs.open(path, 'w', 'utf-8') as f:
    f.write(text)

print("Materials indexed: ", count - 1)
