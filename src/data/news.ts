/**
 * News, events and research progress. Newest first.
 * `category`: 'news' | 'event' | 'progress'.
 * `href` may point to an external article (e.g. a WeChat post) or be omitted.
 */
import type { L10n } from '../i18n'
import { publications, doiUrl } from './publications'

export type NewsCategory = 'news' | 'event' | 'progress'

export type NewsItem = {
  date: string // YYYY-MM or YYYY-MM-DD
  category: NewsCategory
  title: L10n
  summary?: L10n
  href?: string
}

const manual: NewsItem[] = [
  {
    date: '2026-02',
    category: 'event',
    title: {
      zh: 'Topological Statistics, Data and Intelligence 学术活动在 BIMSA 举办',
      en: 'Topological Statistics, Data and Intelligence held at BIMSA',
    },
    href: 'https://www.bimsa.cn/research_detail/TopStaDatandInt.html',
  },
  {
    date: '2025-02',
    category: 'news',
    title: {
      zh: '复杂系统拓扑统计理论及应用北京市重点实验室正式挂牌成立',
      en: 'The Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems is officially established',
    },
    href: 'https://kw.beijing.gov.cn/xwdt/kcyx/xwdtscyqld/202502/t20250214_4010193.html',
  },
]

const fromPublications: NewsItem[] = publications.map((p) => ({
  date: String(p.year),
  category: 'progress',
  title: { zh: p.title, en: p.title },
  summary: { zh: `${p.journal} · ${p.summary.zh}`, en: `${p.journal} · ${p.summary.en}` },
  href: doiUrl(p.doi),
}))

export const news: NewsItem[] = [...manual, ...fromPublications].sort((a, b) => b.date.localeCompare(a.date))

export const newsCategories: { id: NewsCategory; anchor: string; eyebrow: string; title: L10n; desc: L10n }[] = [
  {
    id: 'news',
    anchor: 'news-updates',
    eyebrow: 'NEWS',
    title: { zh: '新闻动态', en: 'News' },
    desc: { zh: '实验室新闻、重要通知、成员采访及相关人物报道。', en: 'Laboratory news, announcements, interviews and features.' },
  },
  {
    id: 'event',
    anchor: 'academic-events',
    eyebrow: 'EVENTS',
    title: { zh: '学术活动', en: 'Academic Events' },
    desc: { zh: '实验室主办、承办或深度参与的会议、研讨会、讲座与学术交流。', en: 'Conferences, workshops, seminars and exchanges hosted or co-organised by the laboratory.' },
  },
  {
    id: 'progress',
    anchor: 'research-progress',
    eyebrow: 'RESEARCH',
    title: { zh: '研究进展', en: 'Research Progress' },
    desc: { zh: '论文发表、成果发布、科研项目进展及阶段性突破。', en: 'New papers, results, project milestones and breakthroughs.' },
  },
]

export function formatDate(date: string, lang: 'zh' | 'en') {
  const [y, m, d] = date.split('-')
  if (!m) return y
  if (lang === 'zh') return d ? `${y} · ${m} · ${d}` : `${y} · ${m}`
  const month = new Date(Number(y), Number(m) - 1, 1).toLocaleString('en', { month: 'short' })
  return d ? `${month} ${Number(d)}, ${y}` : `${month} ${y}`
}
