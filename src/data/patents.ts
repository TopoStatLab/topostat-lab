/**
 * Patents held or filed by laboratory people (all members, past and present).
 * The page lists recent years first and patents with core people first.
 *
 * TODO(lab): no public patent records were found; fill in from the lab's list.
 *
 * Example entry:
 * {
 *   year: 2025,
 *   title: '一种基于高阶互作网络的……方法',
 *   inventors: '邬荣领, 董昂, ……',
 *   lab: ['邬荣领', '董昂'],
 *   number: 'CN 1xxxxxxxx B',
 *   status: 'granted',          // 'granted' 授权 | 'published' 已公开
 *   core: true,
 * },
 */
export type Patent = {
  year: number
  title: string
  inventors: string
  lab?: string[]
  number?: string
  status: 'granted' | 'published'
  core?: boolean
  url?: string
}

export const patents: Patent[] = []

export const sortedPatents = [...patents].sort((a, b) => b.year - a.year || Number(!!b.core) - Number(!!a.core))
