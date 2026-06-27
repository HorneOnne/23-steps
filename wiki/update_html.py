import re
import codecs

html_path = r'd:\23-steps\wiki\explode-castle.html'
with codecs.open(html_path, 'r', 'utf-8') as f:
    content = f.read()

if '<th>#</th>' not in content:
    content = content.replace('<th>Icon</th>', '<th>#</th>\n                        <th>Icon</th>')

start_idx = content.find('<tbody>', content.find('<th>Material</th>'))
end_idx = content.find('</tbody>', start_idx)

tbody = content[start_idx:end_idx]

# Clean up any existing index columns: <td style="text-align: center;"><strong>NUMBER or -</strong></td>
tbody = re.sub(r'<tr>\s*<td style="text-align: center;"><strong>[\d\-]+</strong></td>', '<tr>', tbody)

# Now inject the new index
count = 1
def replace_tr(match):
    global count
    res = '<tr>\n                        <td style="text-align: center;"><strong>{}</strong></td>'.format(count)
    count += 1
    return res

new_tbody = re.sub(r'<tr>', replace_tr, tbody)

content = content[:start_idx] + new_tbody + content[end_idx:]

with codecs.open(html_path, 'w', 'utf-8') as f:
    f.write(content)
