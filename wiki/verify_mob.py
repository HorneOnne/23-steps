import re
html = open('wiki/mob.html', encoding='utf-8').read()
print('File size:', len(html))
print('Werewolf in JSON:', bool(re.search('"MobID": "Werewolf"', html)))
print('HasRareDrop still present:', bool(re.search('HasRareDrop', html)))
print('itemIconSrc present:', bool(re.search('itemIconSrc', html)))
print('loot-grid present:', bool(re.search('loot-grid', html)))
mobs = re.findall('"MobID":', html)
print('MobID count:', len(mobs))
