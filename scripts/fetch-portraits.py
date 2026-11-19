"""Download member portraits from BIMSA (run in CI; bimsa.cn is slow from abroad)."""
import json, re, io, os, subprocess
from PIL import Image, ImageOps
def curl(u, out):
    r = subprocess.run(['curl', '-sSL', '--retry', '6', '--retry-all-errors', '--retry-delay', '5', '--max-time', '120',
                        '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36',
                        '-e', 'https://www.bimsa.cn/', '-o', out, u], capture_output=True, text=True)
    return r.returncode == 0
urls = json.load(open('scripts/portrait-urls.json'))
slugs = json.load(open('scripts/portrait-slugs.json'))
have = {f[:-5] for f in os.listdir('public/people/portraits')}
for pid, slug in slugs.items():
    if pid in urls or pid in have: continue
    if curl(f'https://www.bimsa.cn/zh-CN/detail/{slug}.html', 'p.html'):
        m = re.search(r'https://www\.bimsa\.cn/upload/img/avatar[^"\' )]+\.(?:jpe?g|png|webp)', open('p.html', errors='ignore').read(), re.I)
        if m: urls[pid] = m[0]
        else: print('NOIMG', pid)
    else: print('NOPAGE', pid)
for pid, u in urls.items():
    if pid in have: continue
    if not curl(u, 'img'): print('FAIL', pid, u); continue
    try:
        im = ImageOps.exif_transpose(Image.open('img')).convert('RGB')
    except Exception as e:
        print('BAD', pid, os.path.getsize('img'), open('img', 'rb').read(80)); continue
    w, h = im.size; s = min(w, h); top = int((h - s) * 0.2)
    im = im.crop(((w - s) // 2, top, (w - s) // 2 + s, top + s)).resize((288, 288), Image.LANCZOS)
    im.save(f'public/people/portraits/{pid}.webp', 'WEBP', quality=80, method=6)
    print('OK', pid, w, h)
