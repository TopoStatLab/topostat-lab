"""Fetch member portraits from BIMSA profile listings (run in CI)."""
import json, re, io, os, sys, urllib.request
from PIL import Image, ImageOps
UA={'User-Agent':'Mozilla/5.0'}
def get(u):
    try: return urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=30).read()
    except Exception as e: print('ERR',u,e); return b''
want=json.load(open('scripts/portrait-want.json'))
have={f[:-5] for f in os.listdir('public/people/portraits')}
found={}
def scan(html):
    for m in re.finditer(r'href="https://www\.bimsa\.cn/zh-CN/detail/([^"]+)\.html"[^>]*>\s*<div class="img_box">\s*<img class="lazy" data-original="([^"]+)" alt="([^"]+)"',html):
        found.setdefault(m[3].strip(),(m[1],m[2]))
for base in ['people/index','postdoc/index']:
    for i in range(1,40):
        h=get(f'https://www.bimsa.cn/zh-CN/{base.split("/")[0]}/page_{i}.html' if i>1 else f'https://www.bimsa.cn/zh-CN/{base}.html').decode('utf8','ignore')
        n=len(found); scan(h)
        if i>1 and len(found)==n: break
print('listed',len(found))
slugs=json.load(open('scripts/portrait-slugs.json'))
out={}
for pid,nm in want.items():
    if pid in have: continue
    src=None
    if nm['zh'] in found: src=found[nm['zh']][1]
    elif pid in slugs:
        h=get(f'https://www.bimsa.cn/zh-CN/detail/{slugs[pid]}.html').decode('utf8','ignore')
        m=re.search(r'https://www\.bimsa\.cn/upload/img/avatar[^"\' )]+\.(?:jpg|jpeg|png|webp)',h)
        if m: src=m[0]
    if not src: print('MISS',pid,nm['zh']); continue
    b=get(src)
    try: im=Image.open(io.BytesIO(b)); im=ImageOps.exif_transpose(im).convert('RGB')
    except Exception as e: print('BAD',pid,src,e); continue
    w,h=im.size; s=min(w,h); top=0 if h>w else 0; top=int(min(h-s,(h-s)*0.25))
    im=im.crop(((w-s)//2,top,(w-s)//2+s,top+s)).resize((288,288),Image.LANCZOS)
    im.save(f'public/people/portraits/{pid}.webp','WEBP',quality=80,method=6)
    out[pid]=src; print('OK',pid,nm['zh'],w,h)
json.dump(out,open('scripts/portrait-sources.json','w'),ensure_ascii=False,indent=1)
