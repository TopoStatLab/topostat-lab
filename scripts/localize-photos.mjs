// Downloads remote portrait URLs in src/data/people.ts into public/people/remote/
// and rewrites people.ts to point at the local copies.
// Run on a machine with normal internet access, AFTER the lab has confirmed
// permission to use each photo:  npm run photos:localize
import { readFile, writeFile, mkdir } from 'node:fs/promises'

const DATA = new URL('../src/data/people.ts', import.meta.url)
const OUT_DIR = new URL('../public/people/remote/', import.meta.url)
const TYPES = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif' }

let source = await readFile(DATA, 'utf8')
await mkdir(OUT_DIR, { recursive: true })

// Each person block: id: '...'  …  photo: 'https://…'
// The tempered token stops a match from running past the next `id:` into another person.
const blocks = [...source.matchAll(/id: '([^']+)'(?:(?!id: ')[\s\S])*?photo: '(https?:\/\/[^']+)'/g)].map(([, id, url]) => [null, id, url])
let ok = 0
for (const [, id, url] of blocks) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (photo localizer)' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const type = (res.headers.get('content-type') || '').split(';')[0].trim()
    const ext = TYPES[type]
    if (!ext) throw new Error(`unexpected content-type "${type}"`)
    const file = `${id}.${ext}`
    await writeFile(new URL(file, OUT_DIR), Buffer.from(await res.arrayBuffer()))
    source = source.replace(`photo: '${url}'`, `photo: '/people/remote/${file}'`)
    ok++
    console.log(`✓ ${id} → public/people/remote/${file}`)
  } catch (err) {
    console.warn(`✗ ${id}: ${err.message} (${url})`)
  }
}
await writeFile(DATA, source)
console.log(`\n${ok}/${blocks.length} photos localized. Review the images, then commit public/people/remote/ and src/data/people.ts.`)
