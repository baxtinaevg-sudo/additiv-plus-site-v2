import re

data = open('c:/Users/Нюся/для обучения менеджера статиста/bestresearch.html', 'rb').read()
# Try windows-1251
try:
    text = data.decode('windows-1251')
except:
    text = data.decode('utf-8', 'replace')

# Simple approach: split by < and >
parts = text.split('<')
result = []
for p in parts:
    idx = p.find('>')
    if idx >= 0:
        result.append(p[idx+1:])
    else:
        result.append(p)
clean = ' '.join(result)
# collapse whitespace
clean = ' '.join(clean.split())

with open('c:/Users/Нюся/для обучения менеджера статиста/bestresearch_decoded.txt', 'w', encoding='utf-8') as f:
    f.write(clean)

print('Done. Length:', len(clean))
print(clean[:200])