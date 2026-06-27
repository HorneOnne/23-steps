import codecs

path = r'd:\23-steps\wiki\explode-castle.html'
with codecs.open(path, 'r', 'utf-8') as f:
    lines = f.readlines()

new_lines = []
in_tbody = False
count = 1

for line in lines:
    if '<th>Icon</th>' in line:
        if '<th>#</th>' not in ''.join(new_lines):
            new_lines.append('                        <th>#</th>\n')
        new_lines.append(line)
        continue
        
    if '<tbody>' in line:
        in_tbody = True
        new_lines.append(line)
        continue
    
    if '</tbody>' in line:
        in_tbody = False
        new_lines.append(line)
        continue
        
    if in_tbody and '<tr' in line:
        new_lines.append(line)
        new_lines.append('                        <td style="text-align: center;"><strong>{}</strong></td>\n'.format(count))
        count += 1
        continue
        
    # Skip any existing index columns we might have added by mistake
    if in_tbody and 'style="text-align: center;"><strong>' in line and ('</strong></td>' in line):
        # wait, what if it's the <td><strong>-</strong></td> we manually added?
        # Let's skip lines that contain <td><strong> NUMBER or - </strong></td>
        import re
        if re.search(r'<td style="text-align: center;"><strong>[\d\-]+</strong></td>', line):
            continue
            
    new_lines.append(line)

with codecs.open(path, 'w', 'utf-8') as f:
    f.writelines(new_lines)
    
print("Success, counted: ", count - 1)
