export type Lang = 'zh' | 'en'
export type L10n = { zh: string; en: string }

export const languages: Lang[] = ['zh', 'en']

/** Pick the string for the current language. */
export const t = (value: L10n, lang: Lang) => value[lang]

/** Build a site path for a language. `path` is language-neutral, e.g. '/team/'. */
export function localizedPath(path: string, lang: Lang) {
  const clean = path.startsWith('/') ? path : `/${path}`
  return lang === 'zh' ? clean : `/en${clean === '/' ? '/' : clean}`
}

/** Strip the language prefix from a URL pathname. */
export function neutralPath(pathname: string) {
  return pathname.replace(/^\/en(?=\/|$)/, '') || '/'
}

export const ui = {
  siteName: { zh: '复杂系统拓扑统计理论及应用北京市重点实验室', en: 'Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems' },
  shortName: { zh: '拓扑统计北京市重点实验室', en: 'TopoStat Lab' },
  brandSub: { zh: 'TOPOLOGICAL STATISTICS · BIMSA', en: 'BEIJING KEY LABORATORY · BIMSA' },
  home: { zh: '首页', en: 'Home' },
  research: { zh: '科学研究', en: 'Research' },
  directions: { zh: '研究方向', en: 'Research Directions' },
  publications: { zh: '科技成果', en: 'Outputs' },
  papers: { zh: '论文', en: 'Papers' },
  patents: { zh: '专利', en: 'Patents' },
  overview: { zh: '实验室概况', en: 'About' },
  intro: { zh: '实验室介绍', en: 'Introduction' },
  organization: { zh: '组织架构', en: 'Organization' },
  committee: { zh: '学术委员会', en: 'Academic Committee' },
  visitors: { zh: '访学', en: 'Visitors' },
  demo: { zh: '交互演示', en: 'Interactive Demo' },
  team: { zh: '研究团队', en: 'People' },
  people: { zh: '研究人员', en: 'Researchers' },
  news: { zh: '新闻', en: 'News' },
  motto: { zh: '任何数据内都藏着图', en: 'Every dataset hides a graph' },
  interviews: { zh: '人物专访', en: 'Interviews' },
  software: { zh: '计算机软件', en: 'Software' },
  newsUpdates: { zh: '新闻动态', en: 'News' },
  events: { zh: '学术活动', en: 'Academic Events' },
  progress: { zh: '研究进展', en: 'Research Progress' },
  join: { zh: '加入我们', en: 'Join Us' },
  contact: { zh: '联系我们', en: 'Contact' },
  about: { zh: '关于实验室', en: 'About' },
  switchLang: { zh: 'EN', en: '中文' },
  switchLangLabel: { zh: 'Switch to English', en: '切换到中文' },
  toggleNav: { zh: '切换导航', en: 'Toggle navigation' },
  mainNav: { zh: '主导航', en: 'Main navigation' },
  backHome: { zh: '返回首页', en: 'Back to home' },
  readMore: { zh: '阅读详情', en: 'Read more' },
  viewAll: { zh: '查看全部', en: 'View all' },
  address: { zh: '地址', en: 'Address' },
  labAddress: { zh: '实验室地址', en: 'Laboratory' },
  email: { zh: '邮箱', en: 'Email' },
  phone: { zh: '电话', en: 'Phone' },
  openMap: { zh: '在高德地图中打开', en: 'Open in Amap' },
  hostedBy: { zh: '依托单位', en: 'Host institution' },
  coBuiltWith: { zh: '联合共建', en: 'Co-built with' },
  visits: { zh: '网站总访问量', en: 'Total page views' },
  skip: { zh: '跳到主要内容', en: 'Skip to main content' },
  notFound: { zh: '页面不存在', en: 'Page not found' },
} satisfies Record<string, L10n>
