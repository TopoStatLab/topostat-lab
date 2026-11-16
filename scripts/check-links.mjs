// Checks that every internal link and asset in the built site (dist/) resolves.
// Usage: npm run build && npm run check:links
import { readdir, readFile, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'

const DIST = new URL('../dist/', import.meta.url).pathname

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(p)))
    else if (extname(p) === '.html') out.push(p)
  }
  return out
}

async function exists(urlPath) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0])
  const candidates = clean.endsWith('/') ? [join(DIST, clean, 'index.html')] : [join(DIST, clean), join(DIST, clean, 'index.html')]
  for (const c of candidates) {
    try {
      if ((await stat(c)).isFile()) return true
    } catch {}
  }
  return false
}

const pages = await walk(DIST)
const broken = []
const ids = new Map()
for (const page of pages) {
  const html = await readFile(page, 'utf8')
  ids.set(page, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])))
}
for (const page of pages) {
  const html = await readFile(page, 'utf8')
  const rel = '/' + page.slice(DIST.length).replace(/index\.html$/, '')
  for (const [, attr, url] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(url)) continue
    const target = url.startsWith('#') ? rel + url : url
    if (!target.startsWith('/')) continue
    const [pathPart, hash] = target.split('#')
    if (!(await exists(pathPart))) {
      broken.push(`${rel}: ${attr}="${url}" (missing file)`)
      continue
    }
    if (hash && pathPart.endsWith('/')) {
      const file = join(DIST, pathPart.split('?')[0], 'index.html')
      if (ids.has(file) && !ids.get(file).has(hash)) broken.push(`${rel}: ${attr}="${url}" (missing #${hash})`)
    }
  }
}
if (broken.length) {
  console.error(`✗ ${broken.length} broken internal link(s):\n` + broken.join('\n'))
  process.exit(1)
}
console.log(`✓ ${pages.length} pages, all internal links and anchors resolve`)
