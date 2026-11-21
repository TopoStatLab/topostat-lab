"""Download candidate photos from activity/news pages (run in CI)."""
import re, os, subprocess, hashlib, json
from urllib.parse import urljoin
from PIL import Image
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36'
def curl(u,out,ref=None):
    cmd=['curl','-sSL','--retry','3','--retry-all-errors','--max-time','90','-A',UA,'-o',out,u]
    if ref: cmd[1:1]=['-e',ref]
    return subprocess.run(cmd,capture_output=True).returncode==0
os.makedirs('harvest',exist_ok=True)
import sys; PFX=sys.argv[1] if len(sys.argv)>1 else ''
log=[]; seen=set()
for page in open('scripts/harvest-pages.txt').read().split():
    if not curl(page,'p.html'): log.append({'page':page,'err':'fetch'}); continue
    html=open('p.html',errors='ignore').read()
    key=hashlib.md5(page.encode()).hexdigest()[:6]
    srcs=re.findall(r'(?:src|data-src|data-original|data-url)\s*=\s*["\']([^"\']+\.(?:jpe?g|png|webp)(?:\?[^"\']*)?)["\']',html,re.I)
    srcs+=re.findall(r'url\(["\']?([^"\')]+\.(?:jpe?g|png|webp))',html,re.I)
    n=0
    for s in srcs:
        u=urljoin(page,s.replace('&amp;','&'))
        if u in seen: continue
        seen.add(u)
        if not curl(u,'img',page): continue
        try:
            im=Image.open('img'); w,h=im.size
        except Exception: continue
        if w<500 or h<300 or w/h>3.5 or h/w>1.6: continue
        n+=1; fn=f'harvest/{PFX}{key}_{n:02d}.jpg'
        im=im.convert('RGB'); im.thumbnail((1600,1600)); im.save(fn,'JPEG',quality=82)
        log.append({'file':fn,'page':page,'src':u,'w':w,'h':h})
    log.append({'page':page,'count':n})
json.dump(log,open(f'harvest/index{PFX}.json','w'),ensure_ascii=False,indent=1)
print(sum(1 for l in log if 'file' in l),'images')
