import json

data = json.load(open('mob_configs.json'))
js = json.dumps(data, separators=(',', ':'))

html = open('mobs.html').read()

# Replace the src-based script tag with inline content
old_tag = '<script id="mob-data" type="application/json" src="mob_configs.json"></script>'
new_tag = '<script id="mob-data" type="application/json">' + js + '</script>'

if old_tag in html:
    html = html.replace(old_tag, new_tag)
    open('mobs.html', 'w').write(html)
    print("Done! Embedded", len(js), "chars of JSON data inline.")
else:
    print("Tag not found. Content around 'mob-data':")
    idx = html.find('mob-data')
    print(repr(html[max(0,idx-10):idx+100]))
