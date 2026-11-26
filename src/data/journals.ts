import type { Lang } from '../i18n'

type T = Record<Lang, string>

export interface Journal {
  id: string
  name: string
  abbr: string
  summary: T
  editor: T
  publisher: T
  since?: string
  url: string
  host: string
}

export const journals: Journal[] = [
  {
    id: 'daat',
    name: 'Data Analytics and Topology',
    abbr: 'DAAT',
    summary: {
      zh: '面向拓扑数据分析与统计拓扑的学术期刊，发表把拓扑学方法用于数据建模、网络与复杂系统分析的研究。',
      en: 'A journal for topological data analysis and statistical topology, publishing work that brings topological methods to data modelling, networks and complex systems.',
    },
    editor: { zh: '邬荣领', en: 'Rongling Wu' },
    publisher: { zh: '北京雁栖湖应用数学研究院', en: 'Beijing Institute of Mathematical Sciences and Applications' },
    url: 'https://bimsa.net/journal/daat/',
    host: 'bimsa.net/journal/daat',
  },
  {
    id: 'stati',
    name: 'Statistics Innovation',
    abbr: 'STATi',
    summary: {
      zh: '同行评审的开放获取期刊，发表统计建模与数据科学领域的新方法、新理论与新应用。',
      en: 'A peer-reviewed open-access journal publishing new methods, theory and applications in statistical modelling and data science.',
    },
    editor: { zh: '邬荣领', en: 'Rongling Wu' },
    publisher: { zh: 'Maximum Academic Press', en: 'Maximum Academic Press' },
    since: '2024',
    url: 'https://www.maxapress.com/stati',
    host: 'maxapress.com/stati',
  },
]
