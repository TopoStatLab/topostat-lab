/**
 * Invited talks by 邬荣领 (Rongling Wu), lab director, 2022 onwards.
 * Source: his own list (2022–2026) and the summary of his talks at Inner
 * Mongolia Normal University with press links (2026-11), plus the talks in
 * 董昂's activity sheet (2026-11-17). Entries with no
 * title or venue in the source leave that field out.
 */
import type { L10n } from '../i18n'

export type Talk = {
  date: string // YYYY-MM or YYYY-MM-DD
  title?: L10n
  venue?: L10n
  href?: string
}

const same = (s: string): L10n => ({ zh: s, en: s })

export const talks: Talk[] = [
  { date: '2022-09', venue: { zh: '天津大学', en: 'Tianjin University' } },
  { date: '2022-10', title: same('Information geometry of genotype-phenotype mapping'), venue: { zh: '清华大学、北京协和医学院', en: 'Tsinghua University and Peking Union Medical College' } },
  { date: '2022-11', title: same('High-order interaction modeling of complex system'), venue: same('BIMSA') },
  { date: '2022-12', title: same('Precision Breeding'), venue: { zh: '清华三亚国际数学论坛', en: 'Tsinghua Sanya International Mathematics Forum' } },
  { date: '2023-02', venue: { zh: '北京大学', en: 'Peking University' } },
  { date: '2023-05', venue: { zh: '厦门大学', en: 'Xiamen University' } },
  { date: '2023-06', title: { zh: '统计遗传学', en: 'Statistical genetics' }, venue: { zh: '山东大学', en: 'Shandong University' } },
  { date: '2023-07', venue: { zh: '国际基础科学大会（ICBS），两场报告', en: 'International Congress of Basic Science (ICBS), two talks' } },
  { date: '2023-09', venue: { zh: '南京林业大学', en: 'Nanjing Forestry University' } },
  { date: '2023-09', title: same('Topical seminar') },
  {
    date: '2023-10-28', title: same('Graph theory of statistics'),
    venue: { zh: '内蒙古师范大学，内蒙古自治区应用数学中心学术研讨会', en: 'Inner Mongolia Normal University, Inner Mongolia Center for Applied Mathematics symposium' },
    href: 'https://xyh.imnu.edu.cn/xyh/article/623',
  },
  { date: '2023-12', venue: { zh: '北戴河清华医生年会', en: 'Tsinghua physicians’ annual meeting, Beidaihe' } },
  { date: '2024-01', venue: { zh: '国际华人数学家大会（ICCM）', en: 'International Congress of Chinese Mathematicians (ICCM)' } },
  {
    date: '2024-08-06', title: { zh: '人工智能的统计基础', en: 'Statistical foundations of artificial intelligence' },
    venue: { zh: '内蒙古师范大学，2024 年人工智能学术研讨会', en: 'Inner Mongolia Normal University, 2024 Symposium on Artificial Intelligence' },
    href: 'https://mathlab.imnu.edu.cn/info/1142/1089.htm',
  },
  { date: '2024-09', venue: { zh: '求真大讲堂', en: 'Qiuzhen Lecture' } },
  { date: '2024-09', venue: { zh: '上海数学与交叉学科研究院（SIMIS），报告及研讨会', en: 'Shanghai Institute for Mathematics and Interdisciplinary Sciences (SIMIS), talk and workshop' } },
  {
    date: '2024-09-25', venue: { zh: '中国人民大学，“人大数学时间 I”第二期交流研讨', en: 'Renmin University of China, “RUC Math Time I” seminar' },
    href: 'https://se-office.ruc.edu.cn/xwdt/aeef13a0f92a4fc9b0089e2e6e3ca213.htm',
  },
  {
    date: '2024-10-05', title: same('Mini-Workshop on the Yau-Yau Filter and Its Applications（组织并报告）'), venue: same('BIMSA'),
    href: 'https://www.bimsa.cn/zh-CN/research_detail/YYFielterWorkshop.html',
  },
  {
    date: '2024-10-12', title: { zh: '拓扑统计学学科构思（致辞）', en: 'Topological statistics as a discipline (opening address)' },
    venue: { zh: '首届拓扑学学科发展研讨会，北京科学之家', en: 'First Symposium on the Development of Topology, Beijing' },
    href: 'https://www.bimsa.cn/zh-CN/research_detail/TopologyI.html',
  },
  { date: '2024-10', venue: { zh: '北京天坛医院', en: 'Beijing Tiantan Hospital' } },
  {
    date: '2024-12-13', title: { zh: 'AI for Math & Math for AI（尖峰对话嘉宾）', en: 'AI for Math & Math for AI (panel)' },
    venue: { zh: '2024 中国人工智能大会（CCAI 2024），北京', en: 'China Conference on Artificial Intelligence (CCAI 2024), Beijing' },
    href: 'https://www.cast.org.cn/xw/qgxh/XSJL/art/2024/art_9524e6d2542c41cba955ae6c8c04b1be.html',
  },
  { date: '2025-01', venue: { zh: '北京生命科学研究所', en: 'National Institute of Biological Sciences, Beijing' } },
  { date: '2025-02', venue: { zh: '北京林业大学草业科学国际会议', en: 'Beijing Forestry University, International Conference on Grassland Science' } },
  {
    date: '2025-03-03', title: same('Statistics at a crossroads: How it can revolutionize artificial intelligence'),
    venue: { zh: 'BIMSA–HSE 数据分析与拓扑联合讨论班（线上）', en: 'BIMSA–HSE joint seminar on data analysis and topology (online)' },
    href: 'https://www.bimsa.cn/zh-CN/talk/18534.html',
  },
  {
    date: '2025-05-12', title: { zh: '开幕致辞及学术报告', en: 'Opening address and talk' },
    venue: { zh: '东亚代数拓扑会议，河北师范大学', en: 'East Asian Conference on Algebraic Topology, Hebei Normal University' },
    href: 'https://news.hebtu.edu.cn/a/2025/05/21/C5F2E9940CFD4499A605229799D899AB.html',
  },
  { date: '2025-06', venue: { zh: '北京林业大学草业科学研讨会', en: 'Beijing Forestry University, Grassland Science Seminar' } },
  {
    date: '2025-06-22', title: same('Statistics at a crossroads: How it can revolutionize artificial intelligence'),
    venue: { zh: '第三届机器学习与统计学国际会议（MLSTAT 2025），武汉大学', en: 'MLSTAT 2025, Wuhan University' },
    href: 'https://ml-stat.github.io/MLSTAT2025/schedule/sessions/wurongling/',
  },
  {
    date: '2025-07-27', title: { zh: '主旨演讲', en: 'Keynote' },
    venue: { zh: '2025 国际数学与人工智能应用大会，太原', en: '2025 International Conference on Mathematics and AI Applications, Taiyuan' },
    href: 'https://www.cinn.cn/difang/shanxi/2025/07-29/qkNpJxEr.html',
  },
  {
    date: '2025-09-19', title: same('Matrix learning of high-order dynamical interactome networks from big static data'),
    venue: { zh: '天津大学应用数学中心', en: 'Center for Applied Mathematics, Tianjin University' },
    href: 'https://cam.tju.edu.cn/newsDetail.php?id=1063',
  },
  {
    date: '2025-09-19', title: { zh: '药物反应的统计物理模型', en: 'Statistical physics models of drug response' },
    venue: { zh: '2025 代谢药学学术大会，天津大学', en: '2025 Metabolic Pharmacy Conference, Tianjin University' },
    href: 'https://news.tju.edu.cn/info/1012/562129.htm',
  },
  { date: '2025-09', venue: { zh: '北京科技大学，报告及研讨会', en: 'University of Science and Technology Beijing, talk and workshop' } },
  { date: '2025-09', venue: { zh: '北京大学国际数学研究中心', en: 'Beijing International Center for Mathematical Research, Peking University' } },
  { date: '2025-09', title: { zh: '数学生命科学', en: 'Mathematical life sciences' }, venue: { zh: '中国人民大学', en: 'Renmin University of China' } },
  { date: '2025-10', venue: { zh: 'Cell 出版社三亚会议', en: 'Cell Press conference, Sanya' } },
  {
    date: '2025-10-10', title: same('The Graph Representation Theory of Statistics（特邀报告）'),
    venue: { zh: '第二十一届全国复杂网络学术会议（CCCN 2025），杭州', en: 'CCCN 2025, Hangzhou' },
    href: 'https://www.c2.org.cn/h-nd-2281.html',
  },
  {
    date: '2025-11-02', venue: { zh: '数学与医学交叉论坛，BIMSA', en: 'Interdisciplinary forum: How mathematics is merged into medicine, BIMSA' },
    href: 'https://www.bimsa.cn/zh-CN/research_detail/MathMed.html',
  },
  { date: '2025-11', venue: { zh: '厦门大学天元基金', en: 'Tianyuan Mathematics Fund, Xiamen University' } },
  { date: '2025-11', venue: { zh: '洛阳林草会议', en: 'Forestry and grassland conference, Luoyang' } },
  { date: '2025-11', venue: { zh: '植物空间组会议，北京', en: 'Plant spatial omics meeting, Beijing' } },
  {
    date: '2025-12', venue: { zh: 'BIMSA–北京科技大学研讨会', en: 'BIMSA–USTB workshop' },
    href: 'https://www.bimsa.cn/zh-CN/research_detail/TheFirJoiBIMSymonMatandAIApp.html',
  },
  { date: '2026-02', venue: { zh: 'BIMSA–中关村研讨会', en: 'BIMSA–Zhongguancun workshop' } },
  {
    date: '2026-06-05', title: { zh: '复杂系统的 idopNetwork 网络建模及其应用（主旨报告）', en: 'idopNetwork modelling of complex systems and its applications (keynote)' },
    venue: { zh: '内蒙古师范大学，2026 年数学与人工智能交叉应用研讨会', en: 'Inner Mongolia Normal University, 2026 Workshop on Mathematics and AI Applications' },
    href: 'https://www.imnu.edu.cn/info/1301/116041.htm',
  },
  {
    date: '2026-09-19', title: { zh: '非欧几里得数据的图统计学（大会邀请报告）', en: 'Graph statistics of non-Euclidean data (invited talk)' },
    venue: { zh: '内蒙古师范大学，2026 年魅丽数学系列会议：数学与力学专题研讨会', en: 'Inner Mongolia Normal University, 2026 Meili Mathematics Series workshop' },
    href: 'https://www.imnu.edu.cn/info/1301/118501.htm',
  },
  {
    date: '2026-10-28',
    title: { zh: '个体化数量遗传学理论的创立：重塑林木改良的范式', en: 'Establishing the theory of individualized quantitative genetics: reshaping the paradigm of forest tree improvement' },
    venue: { zh: '未来农业与生物技术前沿专题活动，长沙', en: 'Frontiers of Future Agriculture and Biotechnology, Changsha' },
  },
  { date: '2026-11', title: { zh: '图统计学专题报告', en: 'Graph statistics' }, venue: { zh: '中国科学院大学', en: 'University of Chinese Academy of Sciences' } },
  { date: '2026-11', title: same('A Topological Framework for Decoding Individualized Omnigenic Interactomes of Complex Traits') },
  {
    date: '2026-11-13', title: { zh: '图统计学', en: 'Graph statistics' },
    venue: { zh: '河套数学与交叉学科研究院（HIMIS）“生物医学中的数学智能”研讨会，深圳', en: 'HIMIS workshop “Mathematical Intelligence in Biomedicine”, Shenzhen' },
    href: '/news/himis-biomedicine-2026/',
  },
  { date: '2026-11', venue: { zh: '中国林业科学研究院', en: 'Chinese Academy of Forestry' } },
  { date: '2026-11', venue: { zh: '中华医生协会', en: 'Chinese physicians’ association meeting' } },
  {
    date: '2026-11-12', title: { zh: '图医学：一个复杂疾病机制解析的新范式', en: 'Graph medicine: a new paradigm for understanding the mechanisms of complex disease' },
    venue: { zh: '南方医科大学深圳医院，2026 年前海医学学术讲堂第七讲', en: 'Shenzhen Hospital of Southern Medical University, seventh Qianhai Medical Lecture' },
    href: '/news/qianhai-lecture-2026/',
  },
  { date: '2026-12', venue: { zh: '香港', en: 'Hong Kong' } },
]
