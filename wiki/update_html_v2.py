import codecs
import re

path = r'd:\23-steps\wiki\explode-castle.html'
with codecs.open(path, 'r', 'utf-8') as f:
    text = f.read()

# Make sure TH has #
if '<th>#</th>' not in text:
    text = text.replace('<th>Icon</th>', '<th>#</th>\n                        <th>Icon</th>')

s = text.find('<tbody>', text.find('<th>Material</th>'))
e = text.find('</tbody>', s)
tbody = text[s:e]

# Clean existing index. Matches any line that is exactly a tr followed by a td with text-align center and a strong tag containing numbers or dashes.
# Actually, the <tr> is followed by a newline and then <td...
# Let's just remove ALL <tr> lines that are followed by the index column.
tbody = re.sub(r'<tr>\s*<td style="text-align: center;"><strong>[\d\-]+</strong></td>', '<tr>', tbody)

count = 1
def repl(m):
    global count
    res = '<tr>\n                        <td style="text-align: center;"><strong>{}</strong></td>'.format(count)
    count += 1
    return res

tbody = re.sub(r'<tr>', repl, tbody)

text = text[:s] + tbody + text[e:]

with codecs.open(path, 'w', 'utf-8') as f:
    f.write(text)

print("Updated table rows: ", count - 1)
