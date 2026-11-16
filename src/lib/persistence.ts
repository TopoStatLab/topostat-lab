/**
 * Vietoris–Rips persistent homology in dimensions 0 and 1 over Z/2,
 * small enough to run in the browser for a few dozen points.
 *
 * Filtration value of an edge = its length; of a triangle = its longest edge.
 * H0 comes from union–find over sorted edges; H1 from the standard column
 * reduction of the triangle → edge boundary matrix.
 */
export type Point = { x: number; y: number }
export type Bar = { dim: 0 | 1; birth: number; death: number }
export type Edge = { a: number; b: number; len: number }
export type Triangle = { a: number; b: number; c: number; value: number }

export type RipsResult = {
  edges: Edge[]
  triangles: Triangle[]
  bars: Bar[]
}

const EPS = 1e-12

function xorSorted(a: number[], b: number[]) {
  const out: number[] = []
  let i = 0
  let j = 0
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++
      j++
    } else if (a[i] < b[j]) out.push(a[i++])
    else out.push(b[j++])
  }
  while (i < a.length) out.push(a[i++])
  while (j < b.length) out.push(b[j++])
  return out
}

export function ripsPersistence(points: Point[], maxEps: number): RipsResult {
  const n = points.length
  const edges: Edge[] = []
  for (let a = 0; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      const len = Math.hypot(points[a].x - points[b].x, points[a].y - points[b].y)
      if (len <= maxEps) edges.push({ a, b, len })
    }
  }
  edges.sort((p, q) => p.len - q.len)

  // edge index lookup, indices follow filtration order
  const edgeIndex = new Map<number, number>()
  edges.forEach((e, i) => edgeIndex.set(e.a * n + e.b, i))
  const idx = (a: number, b: number) => (a < b ? edgeIndex.get(a * n + b) : edgeIndex.get(b * n + a))

  const bars: Bar[] = []

  // H0 via union–find; all vertices are born at 0
  const parent = Array.from({ length: n }, (_, i) => i)
  const find = (x: number): number => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  const negativeEdge = new Uint8Array(edges.length)
  edges.forEach((e, i) => {
    const ra = find(e.a)
    const rb = find(e.b)
    if (ra !== rb) {
      parent[ra] = rb
      negativeEdge[i] = 1
      if (e.len > EPS) bars.push({ dim: 0, birth: 0, death: e.len })
    }
  })
  const components = new Set(Array.from({ length: n }, (_, i) => find(i))).size
  for (let i = 0; i < components; i++) bars.push({ dim: 0, birth: 0, death: Infinity })

  // Triangles whose three edges all exist
  const tris: (Triangle & { col: number[] })[] = []
  for (let a = 0; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      const ab = idx(a, b)
      if (ab === undefined) continue
      for (let c = b + 1; c < n; c++) {
        const ac = idx(a, c)
        if (ac === undefined) continue
        const bc = idx(b, c)
        if (bc === undefined) continue
        const col = [ab, ac, bc].sort((p, q) => p - q)
        tris.push({ a, b, c, value: edges[col[2]].len, col })
      }
    }
  }
  tris.sort((p, q) => p.value - q.value || p.col[2] - q.col[2])

  // Column reduction: pivot (lowest edge) -> reduced column
  const pivots = new Map<number, number[]>()
  const paired = new Uint8Array(edges.length)
  for (const tri of tris) {
    let col = tri.col
    while (col.length) {
      const low = col[col.length - 1]
      const other = pivots.get(low)
      if (!other) break
      col = xorSorted(col, other)
    }
    if (col.length) {
      const low = col[col.length - 1]
      pivots.set(low, col)
      paired[low] = 1
      const birth = edges[low].len
      if (tri.value - birth > EPS) bars.push({ dim: 1, birth, death: tri.value })
    }
  }
  // Positive edges never killed within maxEps: cycles still alive
  edges.forEach((e, i) => {
    if (!negativeEdge[i] && !paired[i]) bars.push({ dim: 1, birth: e.len, death: Infinity })
  })

  return { edges, triangles: tris.map(({ a, b, c, value }) => ({ a, b, c, value })), bars }
}

/** Betti numbers at scale eps from a barcode. */
export function bettiAt(bars: Bar[], eps: number) {
  let b0 = 0
  let b1 = 0
  for (const bar of bars) {
    if (bar.birth <= eps && eps < bar.death) bar.dim === 0 ? b0++ : b1++
  }
  return [b0, b1] as const
}

/** Small seeded PRNG so preset datasets look the same on every visit. */
export function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export type DatasetId = 'circle' | 'two-circles' | 'figure-eight' | 'clusters' | 'random'

export function dataset(id: DatasetId, seed = 7): Point[] {
  const rand = mulberry32(seed)
  const gauss = () => {
    const u = Math.max(rand(), 1e-9)
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rand())
  }
  const ring = (cx: number, cy: number, r: number, k: number, noise: number) =>
    Array.from({ length: k }, (_, i) => {
      const th = ((i + rand() * 0.6) / k) * Math.PI * 2
      const rr = r + gauss() * noise
      return { x: cx + rr * Math.cos(th), y: cy + rr * Math.sin(th) }
    })
  switch (id) {
    case 'circle':
      return ring(0.5, 0.5, 0.26, 32, 0.016)
    case 'two-circles':
      return [...ring(0.3, 0.5, 0.19, 28, 0.012), ...ring(0.74, 0.5, 0.13, 20, 0.01)]
    case 'figure-eight':
      return Array.from({ length: 46 }, (_, i) => {
        const th = (i / 46) * Math.PI * 2 + rand() * 0.05
        const s = 0.36 / (1 + Math.sin(th) ** 2)
        return { x: 0.5 + s * Math.cos(th) + gauss() * 0.008, y: 0.5 + s * Math.sin(th) * Math.cos(th) * 1.3 + gauss() * 0.008 }
      })
    case 'clusters':
      return [
        [0.28, 0.32],
        [0.72, 0.36],
        [0.5, 0.74],
      ].flatMap(([cx, cy]) => Array.from({ length: 14 }, () => ({ x: cx + gauss() * 0.045, y: cy + gauss() * 0.045 })))
    case 'random':
    default:
      return Array.from({ length: 40 }, () => ({ x: 0.08 + rand() * 0.84, y: 0.08 + rand() * 0.84 }))
  }
}
