/**
 * News (新闻) and academic activities (学术活动), newest first.
 * `href` may point to an external article (e.g. a WeChat post) or be omitted.
 * News link to press releases where one is online; tsa.bimsa.cn (the old lab
 * site) returns 502, so two research items link to the paper instead.
 * Events come from the activity list compiled by 董昂 (2026-11-17); each links
 * to its main source page. Only events after the lab's founding (2025-02) are listed.
 */
import type { L10n } from '../i18n'
import { media, type Media } from './media'

const venueBIMSA = { ...media.campusAerial, alt: { zh: '活动举办地：BIMSA 园区', en: 'Venue: BIMSA campus' } }

export type NewsItem = {
  date: string // YYYY, YYYY-MM or YYYY-MM-DD
  title: L10n
  summary?: L10n
  href?: string
  /** Press release about a published paper (研究进展). */
  research?: true
  image?: Media
}

export type EventItem = NewsItem & {
  /** End date for multi-day events. */
  until?: string
  place: L10n
  kind: 'conference' | 'talk' | 'workshop'
  people?: L10n
  /** The link is a news report about the event; also listed on the news page. */
  report?: true
}

export const news: NewsItem[] = [
  {
    date: '2026-01-21',
    title: {
      zh: '“Yau–Yau 随机网络”模型突破噪声壁垒，实现复杂系统的精准解析',
      en: '“Yau–Yau stochastic network” model breaks through noise for precise analysis of complex systems',
    },
    summary: { zh: '研究成果发表于 The Innovation。', en: 'Published in The Innovation.' },
    research: true,
    href: 'https://www.bimsa.cn/news/info/Yau-Yau%20nonlinear%20filter.html',
    image: media.yauyau,
  },
  {
    date: '2026-01',
    title: {
      zh: '图统计模型揭示植物嫁接过程中的基因互作机制',
      en: 'A graph statistical model reveals gene interactions during plant grafting',
    },
    summary: { zh: '研究成果发表于 Advanced Science。', en: 'Published in Advanced Science.' },
    research: true,
    href: 'https://doi.org/10.1002/advs.202523373',
  },
  {
    date: '2026-04',
    title: {
      zh: 'BIMSA 与北京林业大学在数量遗传学领域取得重大突破',
      en: 'BIMSA and Beijing Forestry University achieve a major advance in quantitative genetics',
    },
    summary: { zh: '单倍型分辨基因组下的个体化数量遗传图统计理论发表于 PNAS。', en: 'Graph statistics theory of individualized quantitative genetics, published in PNAS.' },
    research: true,
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
    image: media.campusSign,
  },
]

export const events: EventItem[] = [
  {
    date: '2026-11-13', kind: 'workshop',
    title: { zh: '生物医学中的数学智能', en: 'Mathematical Intelligence in Biomedicine' },
    place: { zh: '深圳，河套数学与交叉学科研究院', en: 'Hetao Institute of Mathematics and Interdisciplinary Sciences, Shenzhen' },
    people: { zh: '邬荣领共同组织并作报告；康家熠、车金灿等报告', en: 'Co-organized by Rongling Wu, who also spoke; talks by Jiayi Kang, Jincan Che and others' },
    href: 'https://www.himis-sz.cn/huiyi_47/199.html',
  },
  {
    date: '2026-09-18', until: '2026-09-20', kind: 'workshop',
    title: { zh: '2026 年魅丽数学系列会议：数学与力学专题研讨会', en: '2026 Meili Mathematics Series: Workshop on Mathematics and Mechanics' },
    place: { zh: '呼和浩特，内蒙古师范大学', en: 'Inner Mongolia Normal University, Hohhot' },
    people: { zh: '邬荣领作学术报告，实验室多名成员参会', en: 'Talk by Rongling Wu; several lab members attended' },
    report: true,
    href: 'https://www.imnu.edu.cn/info/1301/118501.htm',
    image: media.meiliGroup,
  },
  {
    date: '2026-05-18', kind: 'workshop',
    title: { zh: '长城工程科技会议“人工智能时代的基础研究新范式”专题会', en: 'Great Wall Engineering Forum: New Paradigms for Basic Research in the AI Era' },
    place: { zh: '北京，清华大学', en: 'Tsinghua University, Beijing' },
    people: { zh: '邬荣领参加圆桌论坛', en: 'Rongling Wu joined the round-table discussion' },
    report: true,
    href: 'https://www.au.tsinghua.edu.cn/info/1133/4527.htm',
    image: media.greatwallGroup,
  },
  {
    date: '2026-05-16', until: '2026-05-17', kind: 'workshop',
    title: { zh: '“idopNetwork 与复杂生物系统分析”培训研讨会', en: 'Training workshop on idopNetwork and complex biological systems analysis' },
    place: { zh: '北京林业大学', en: 'Beijing Forestry University' },
    people: { zh: '邬荣领作主旨报告，董昂、吴双、龚慧莹、杨登程、王宇等授课，近 200 人参加', en: 'Keynote by Rongling Wu; lectures by Ang Dong, Shuang Wu, Huiying Gong, Dengcheng Yang, Yu Wang and others; nearly 200 participants' },
  },
  {
    date: '2026-02-02', until: '2026-02-06', kind: 'conference',
    title: { zh: 'Topological Statistics, Data and Intelligence 国际会议', en: 'Topological Statistics, Data and Intelligence' },
    place: { zh: '三亚，清华三亚国际数学论坛', en: 'Tsinghua Sanya International Mathematics Forum, Sanya' },
    people: { zh: '组织者：邬荣领、魏国卫、吴杰；实验室学生和研究人员报告成果', en: 'Organized by Rongling Wu, Guowei Wei and Jie Wu; lab students and researchers presented their work' },
    href: 'https://tsimf.cn/meeting/detail?id=439',
    image: media.tsimf,
  },
  {
    date: '2026-01-16', kind: 'workshop',
    title: { zh: 'Mini Workshop：生物信息与拓扑数据分析', en: 'Mini workshop on bioinformatics and topological data analysis' },
    place: { zh: '北京，BIMSA', en: 'BIMSA, Beijing' },
    people: { zh: '胡国庆、李京艳、阮洋洋组织并报告', en: 'Organized by Guoqing Hu, Jingyan Li and Yangyang Ruan, who also spoke' },
    href: 'https://www.bimsa.cn/research_detail/BITDA.html',
    image: venueBIMSA,
  },
  {
    date: '2025-12-18', kind: 'workshop',
    title: { zh: '首届 BIMSA–北京科技大学数学与人工智能应用联合研讨会', en: 'First BIMSA–USTB Joint Symposium on Mathematics and AI Applications' },
    place: { zh: '北京，北京科技大学', en: 'University of Science and Technology Beijing' },
    people: { zh: '邬荣领、吴渊组织；吴杰、雷逢春等报告', en: 'Organized by Rongling Wu and Yuan Wu; talks by Jie Wu, Fengchun Lei and others' },
    href: 'https://www.bimsa.cn/zh-CN/research_detail/TheFirJoiBIMSymonMatandAIApp.html',
  },
  {
    date: '2025-11-02', kind: 'workshop',
    title: { zh: '数学与医学交叉论坛', en: 'Interdisciplinary forum: How mathematics is merged into medicine' },
    place: { zh: '北京，BIMSA', en: 'BIMSA, Beijing' },
    people: { zh: '董昂、龚慧莹、邬荣领、杨登程组织；邬荣领作报告', en: 'Organized by Ang Dong, Huiying Gong, Rongling Wu and Dengcheng Yang; talk by Rongling Wu' },
    href: 'https://www.bimsa.cn/zh-CN/research_detail/MathMed.html',
    image: venueBIMSA,
  },
  {
    date: '2025-10-10', until: '2025-10-12', kind: 'conference',
    title: { zh: '第二十一届全国复杂网络学术会议（CCCN 2025）', en: '21st China Conference on Complex Networks (CCCN 2025)' },
    place: { zh: '杭州', en: 'Hangzhou' },
    people: { zh: '邬荣领作特邀报告', en: 'Invited talk by Rongling Wu' },
    report: true,
    href: 'https://www.c2.org.cn/h-nd-2281.html',
  },
  {
    date: '2025-09-19', until: '2025-09-21', kind: 'conference',
    title: { zh: '2025 代谢药学学术大会（中国医药教育协会代谢药学专委会年会）', en: '2025 Metabolic Pharmacy Conference' },
    place: { zh: '天津大学', en: 'Tianjin University' },
    people: { zh: '邬荣领报告药物反应的统计物理模型', en: 'Rongling Wu spoke on statistical physics models of drug response' },
    report: true,
    href: 'https://news.tju.edu.cn/info/1012/562129.htm',
    image: media.tjuHall,
  },
  {
    date: '2025-09-19', kind: 'talk',
    title: { zh: 'Matrix learning of high-order dynamical interactome networks from big static data', en: 'Matrix learning of high-order dynamical interactome networks from big static data' },
    place: { zh: '天津大学应用数学中心', en: 'Center for Applied Mathematics, Tianjin University' },
    people: { zh: '邬荣领应邀报告', en: 'Invited talk by Rongling Wu' },
    href: 'https://cam.tju.edu.cn/newsDetail.php?id=1063',
  },
  {
    date: '2025-07-27', kind: 'conference',
    title: { zh: '2025 国际数学与人工智能应用大会', en: '2025 International Conference on Mathematics and AI Applications' },
    place: { zh: '太原', en: 'Taiyuan' },
    people: { zh: '邬荣领作主旨演讲', en: 'Keynote by Rongling Wu' },
    report: true,
    href: 'https://www.cinn.cn/difang/shanxi/2025/07-29/qkNpJxEr.html',
  },
  {
    date: '2025-07-09', kind: 'workshop',
    title: { zh: '统计遗传学：揭示生命未知', en: 'Statistical Genetics: Unveiling Unknowns in Life' },
    place: { zh: '北京，BIMSA', en: 'BIMSA, Beijing' },
    people: { zh: '董昂、邬荣领、吴双组织；关永涛、汪作蘅、吴琦、杨登程等报告', en: 'Organized by Ang Dong, Rongling Wu and Shuang Wu; talks by Yongtao Guan, Zuoheng Wang, Qi Wu, Dengcheng Yang and others' },
    href: 'https://www.bimsa.cn/zh-CN/research_detail/StatGene.html',
    image: venueBIMSA,
  },
  {
    date: '2025-07-03', until: '2025-07-04', kind: 'workshop',
    title: { zh: '拓扑人工智能及应用研讨会', en: 'Workshop on Topological AI and Applications' },
    place: { zh: '北京，BIMSA（线上线下结合）', en: 'BIMSA, Beijing (hybrid)' },
    image: venueBIMSA,
  },
  {
    date: '2025-06-20', until: '2025-06-22', kind: 'conference',
    title: { zh: '第三届机器学习与统计学国际会议（MLSTAT 2025）', en: '3rd International Conference on Machine Learning and Statistics (MLSTAT 2025)' },
    place: { zh: '武汉大学', en: 'Wuhan University' },
    people: { zh: '邬荣领任程序委员会委员并作报告，董昂、杨登程等参会', en: 'Rongling Wu served on the programme committee and spoke; Ang Dong, Dengcheng Yang and others attended' },
    href: 'https://ml-stat.github.io/MLSTAT2025/schedule/sessions/wurongling/',
    image: media.mlstatWhu,
  },
  {
    date: '2025-05-12', until: '2025-05-16', kind: 'conference',
    title: { zh: '东亚代数拓扑会议', en: 'East Asian Conference on Algebraic Topology' },
    place: { zh: '石家庄，河北师范大学', en: 'Hebei Normal University, Shijiazhuang' },
    people: { zh: '邬荣领开幕致辞并作报告，吴杰、张蒙蒙等参加交流', en: 'Opening address and talk by Rongling Wu; Jie Wu, Mengmeng Zhang and others took part' },
    report: true,
    href: 'https://news.hebtu.edu.cn/a/2025/05/21/C5F2E9940CFD4499A605229799D899AB.html',
    image: media.hebtuHall,
  },
  {
    date: '2025-04-11', until: '2025-04-14', kind: 'conference',
    title: { zh: '2025 全国林草基础生物学学术研讨会', en: '2025 National Symposium on Basic Biology of Forestry and Grassland' },
    place: { zh: '洛阳', en: 'Luoyang' },
    people: { zh: '实验室多名成员参会', en: 'Several lab members attended' },
    href: 'https://www.csf.org.cn/zhListDetail.html?contentId=59497&id=145',
  },
  {
    date: '2025-03-03', kind: 'talk',
    title: { zh: 'Statistics at a crossroads: How it can revolutionize artificial intelligence', en: 'Statistics at a crossroads: How it can revolutionize artificial intelligence' },
    place: { zh: 'BIMSA–HSE 数据分析与拓扑联合讨论班（线上）', en: 'BIMSA–HSE joint seminar on data analysis and topology (online)' },
    people: { zh: '邬荣领报告', en: 'Talk by Rongling Wu' },
    href: 'https://www.bimsa.cn/zh-CN/talk/18534.html',
  },
  {
    date: '2025-02-17', until: '2025-02-21', kind: 'conference',
    title: { zh: 'Data Analytics and Topology 数据分析及拓扑国际数学会议', en: 'Data Analytics and Topology' },
    place: { zh: '三亚，清华三亚国际数学论坛', en: 'Tsinghua Sanya International Mathematics Forum, Sanya' },
    people: { zh: '组织者：邬荣领、魏国卫、吴杰', en: 'Organized by Rongling Wu, Guowei Wei and Jie Wu' },
    href: 'https://tsimf.tsinghua.edu.cn/info/1132/1358.htm',
    image: media.tsimf,
  },
]

news.sort((a, b) => b.date.localeCompare(a.date))
events.sort((a, b) => b.date.localeCompare(a.date))

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
