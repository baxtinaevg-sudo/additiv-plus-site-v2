import fitz
import sys

doc = fitz.open(r'C:\Users\Нюся\Desktop\видео для ролика\catalog-v3-gradient.pdf')
print('Pages:', doc.page_count)

for i in range(min(3, doc.page_count)):
    p = doc[i]
    print(f'\n=== Page {i+1} ===')
    print('Size:', p.rect)
    blocks = p.get_text('dict')['blocks']
    for b in blocks[:15]:
        if b.get('type') == 0:  # text
            for line in b.get('lines', []):
                for span in line.get('spans', []):
                    if span.get('text', '').strip():
                        print(f"  Font: {span['font']} Size: {span['size']:.1f} Color: #{span['color']:06x} Text: {span['text'][:60]}")
        elif b.get('type') == 1:  # image
            print(f"  Image: {b.get('width')}x{b.get('height')}")