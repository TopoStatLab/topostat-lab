/**
 * News (新闻) and academic activities (学术活动), newest first.
 * `href` may point to an external article (e.g. a WeChat post) or be omitted.
 * Sources: tsa.bimsa.cn, kw.beijing.gov.cn, tsimf.cn, cam.tju.edu.cn, bimsa.cn.
 */
import type { L10n } from '../i18n'

export type NewsItem = {
  date: string // YYYY, YYYY-MM or YYYY-MM-DD
  title: L10n
  summary?: L10n
  href?: string
}

export type EventItem = NewsItem & {
  /** End date for multi-day events. */
  until?: string
  place: L10n
  kind: 'conference' | 'talk' | 'workshop'
  people?: L10n
}

export const news: NewsItem[] = [
  {
    date: '2026',
    title: {
      zh: '“Yau–Yau 随机网络”模型突破噪声壁垒，实现复杂系统的精准解析',
      en: '“Yau–Yau stochastic network” model breaks through noise for precise analysis of complex systems',
    },
    summary: { zh: '研究成果发表于 The Innovation。', en: 'Published in The Innovation.' },
    href: 'https://doi.org/10.1016/j.xinn.2026.101267',
  },
  {
    date: '2026',
    title: {
      zh: '图统计模型揭示植物嫁接过程中的基因互作机制',
      en: 'A graph statistical model reveals gene interactions during plant grafting',
    },
    summary: { zh: '研究成果发表于 Advanced Science。', en: 'Published in Advanced Science.' },
    href: 'https://doi.org/10.1002/advs.202523373',
  },
  {
    date: '2026',
    title: {
      zh: 'BIMSA 与北京林业大学在数量遗传学领域取得重大突破',
      en: 'BIMSA and Beijing Forestry University achieve a major advance in quantitative genetics',
    },
    summary: { zh: '单倍型分辨基因组下的个体化数量遗传图统计理论发表于 PNAS。', en: 'Graph statistics theory of individualized quantitative genetics, published in PNAS.' },
    href: 'https://doi.org/10.1073/pnas.2600004123',
  },
  {
    date: '2025-02',
    title: {
      zh: '复杂系统拓扑统计理论及应用北京市重点实验室正式挂牌成立',
      en: 'The Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems is officially established',
    },
    summary: {
      zh: '实验室依托 BIMSA 建设，与中国人民大学数学学院联合共建，丘成桐任学术委员会主任，邬荣领任实验室主任。',
      en: 'Hosted by BIMSA and co-built with Renmin University; Shing-Tung Yau chairs the Academic Committee and Rongling Wu is Director.',
    },
    href: 'https://kw.beijing.gov.cn/xwdt/kcyx/xwdtscyqld/202502/t20250214_4010193.html',
  },
]

export const events: EventItem[] = [
  {
    date: '2026-05-16', until: '2026-05-17', kind: 'workshop',
    title: { zh: '“idopNetwork 与复杂生物系统分析”培训研讨会', en: 'Training workshop on idopNetwork and complex biological systems analysis' },
    place: { zh: '北京林业大学', en: 'Beijing Forestry University' },
    people: { zh: '邬荣领作主旨报告，董昂、吴双、龚慧莹、杨登程、王宇等授课，近 200 人参加', en: 'Keynote by Rongling Wu; lectures by Ang Dong, Shuang Wu, Huiying Gong, Dengcheng Yang, Yu Wang and others; nearly 200 participants' },
    href: 'https://tsa.bimsa.cn/en/training-workshop-on-idopnetwork-and-complex-biological-systems-analysis-successfully-held-at-beijing-forestry-university/',
  },
  {
    date: '2026-02-02', until: '2026-02-06', kind: 'conference',
    title: { zh: 'Topological Statistics, Data and Intelligence 国际会议', en: 'Topological Statistics, Data and Intelligence' },
    place: { zh: '清华三亚国际数学论坛', en: 'Tsinghua Sanya International Mathematics Forum' },
    people: { zh: '组织者：邬荣领、魏国卫、吴杰；实验室学生和研究人员报告成果', en: 'Organized by Rongling Wu, Guowei Wei and Jie Wu; lab students and researchers presented their work' },
    href: 'https://tsimf.cn/meeting/detail?id=439',
  },
  {
    date: '2025-09-19', kind: 'talk',
    title: { zh: 'Matrix learning of high-order dynamical interactome networks from big static data', en: 'Matrix learning of high-order dynamical interactome networks from big static data' },
    place: { zh: '天津大学应用数学中心', en: 'Center for Applied Mathematics, Tianjin University' },
    people: { zh: '邬荣领应邀报告', en: 'Invited talk by Rongling Wu' },
    href: 'https://cam.tju.edu.cn/newsDetail.php?id=1063',
  },
  {
    date: '2025-03-03', kind: 'talk',
    title: { zh: 'Statistics at a crossroads: How it can revolutionize artificial intelligence', en: 'Statistics at a crossroads: How it can revolutionize artificial intelligence' },
    place: { zh: 'BIMSA–HSE 数据分析与拓扑联合讨论班（线上）', en: 'BIMSA–HSE Joint Seminar on Data Analytics and Topology (online)' },
    people: { zh: '邬荣领报告', en: 'Talk by Rongling Wu' },
    href: 'https://www.bimsa.cn/zh-CN/talk/18534.html',
  },
  {
    date: '2025-02-17', until: '2025-02-21', kind: 'conference',
    title: { zh: 'Data Analytics and Topology 数据分析及拓扑国际数学会议', en: 'Data Analytics and Topology' },
    place: { zh: '清华三亚国际数学论坛', en: 'Tsinghua Sanya International Mathematics Forum' },
    people: { zh: '组织者：邬荣领、魏国卫、吴杰', en: 'Organized by Rongling Wu, Guowei Wei and Jie Wu' },
    href: 'https://tsimf.cn/meeting/detail?id=407',
  },
]

export const eventKinds: Record<EventItem['kind'], L10n> = {
  conference: { zh: '会议', en: 'Conference' },
  workshop: { zh: '研讨会', en: 'Workshop' },
  talk: { zh: '报告', en: 'Talk' },
}

export function formatDate(date: string, lang: 'zh' | 'en') {
  const [y, m, d] = date.split('-')
  if (!m) return lang === 'zh' ? `${y} 年` : y
  if (lang === 'zh') return d ? `${y} 年 ${Number(m)} 月 ${Number(d)} 日` : `${y} 年 ${Number(m)} 月`
  const month = new Date(Number(y), Number(m) - 1, 1).toLocaleString('en', { month: 'short' })
  return d ? `${month} ${Number(d)}, ${y}` : `${month} ${y}`
}

/** "2026 年 5 月 16–17 日" / "May 16–17, 2026" */
export function formatRange(from: string, until: string | undefined, lang: 'zh' | 'en') {
  if (!until) return formatDate(from, lang)
  const [y1, m1, d1] = from.split('-').map(Number)
  const [y2, m2, d2] = until.split('-').map(Number)
  if (y1 === y2 && m1 === m2) {
    if (lang === 'zh') return `${y1} 年 ${m1} 月 ${d1}–${d2} 日`
    const month = new Date(y1, m1 - 1, 1).toLocaleString('en', { month: 'short' })
    return `${month} ${d1}–${d2}, ${y1}`
  }
  return `${formatDate(from, lang)} – ${formatDate(until, lang)}`
}
