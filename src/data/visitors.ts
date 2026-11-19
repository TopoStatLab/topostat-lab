/**
 * Visiting scholars and former members (访学). The point of this page is to
 * show what people did at the lab and where they went afterwards.
 *
 * Former members come from the BIMSA roster supplied by the lab (2026-11):
 * everyone whose contract has ended. `now` was filled from public pages
 * where one could be found; TODO(lab): add the rest. Newest first.
 *
 * Example entry:
 * {
 *   name: { zh: '张三', en: 'San Zhang' },
 *   period: '2025.01–2025.06',
 *   start: '2025-01',
 *   role: { zh: '访问学生', en: 'Visiting student' },
 *   atLab: { zh: '参与 idopNetwork 代谢网络研究', en: 'Worked on idopNetwork metabolic networks' },
 *   now: { zh: '南开大学博士研究生', en: 'PhD student, Nankai University' },
 *   photo: '/people/portraits/zhang-san.webp',   // optional
 * },
 */
import type { L10n } from '../i18n'

export type Visitor = {
  name: L10n
  period: string
  /** YYYY-MM, used for sorting */
  start: string
  role: L10n
  atLab?: L10n
  now?: L10n
  photo?: string
  homepage?: string
  id?: string
}

export const visitors: Visitor[] = [
  {
    name: { zh: "基兰莫伊·达斯", en: "Kiranmoy Das" },
    period: '2023.10–2024.10',
    start: '2023-10',
    role: { zh: "研究员", en: "Professor" },
    atLab: { zh: "贝叶斯统计与生物统计", en: "Bayesian statistics and biostatistics" },
    now: { zh: "印度统计研究所（加尔各答）教授、跨学科统计研究室主任（2026 年 1 月起）", en: "Professor and Head of the Interdisciplinary Statistical Research Unit, Indian Statistical Institute, Kolkata (since Jan 2026)" },
    id: 'kiranmoy-das',
  },
  {
    name: { zh: "田中一之", en: "Kazuyuki Tanaka" },
    period: '2022.11–2026.05',
    start: '2022-11',
    role: { zh: "研究员", en: "Professor" },
    atLab: { zh: "数理逻辑与计算理论", en: "Mathematical logic and theory of computation" },
    homepage: 'https://sendailogic.com/tanaka.html',
    photo: '/people/portraits/kazuyuki-tanaka.webp',
    id: 'kazuyuki-tanaka',
  },
  {
    name: { zh: "胡国庆", en: "Guoqing Hu" },
    period: '2024.01–2025.10',
    start: '2024-01',
    role: { zh: "研究员", en: "Professor" },
    atLab: { zh: "自然向量方法与生物信息", en: "Natural vector methods and bioinformatics" },
    now: { zh: "河套数学与交叉学科研究院教授", en: "Professor, Hetao Institute of Mathematics and Interdisciplinary Sciences" },
    photo: '/people/portraits/hu-guoqing.webp',
    id: 'hu-guoqing',
  },
  {
    name: { zh: "宋丛威", en: "Congwei Song" },
    period: '2021.04–2026.04',
    start: '2021-04',
    role: { zh: "助理研究员", en: "Assistant Professor" },
    atLab: { zh: "机器学习与统计学习", en: "Machine learning and statistical learning" },
    homepage: 'https://www.bimsa.cn/zh-CN/detail/congweisong.html',
    photo: '/people/portraits/song-congwei.webp',
    id: 'song-congwei',
  },
  {
    name: { zh: "付鑫", en: "Xin Fu" },
    period: '2022.12–2025.04',
    start: '2022-12',
    role: { zh: "博士后", en: "Postdoc" },
    atLab: { zh: "环面拓扑与同伦论", en: "Toric topology and homotopy theory" },
    photo: '/people/portraits/fu-xin.webp',
    id: 'fu-xin',
  },
  {
    name: { zh: "焦小沛", en: "Xiaopei Jiao" },
    period: '2022.09–2026.06',
    start: '2022-09',
    role: { zh: "博士后 → 助理研究员", en: "Postdoc → Assistant Professor" },
    atLab: { zh: "非线性滤波与物理信息机器学习", en: "Nonlinear filtering and physics-informed machine learning" },
    homepage: 'https://www.bimsa.cn/zh-CN/detail/xpjiao.html',
    photo: '/people/portraits/jiao-xiaopei.webp',
    id: 'jiao-xiaopei',
  },
  {
    name: { zh: "阮洋洋", en: "Yangyang Ruan" },
    period: '2023.07–2026.03',
    start: '2023-07',
    role: { zh: "博士后", en: "Postdoc" },
    atLab: { zh: "代数拓扑", en: "Algebraic topology" },
    now: { zh: "河套数学与交叉学科研究院", en: "Hetao Institute of Mathematics and Interdisciplinary Sciences" },
    homepage: 'https://www.bimsa.cn/zh-CN/detail/yyruan.html',
    photo: '/people/portraits/ruan-yangyang.webp',
    id: 'ruan-yangyang',
  },
  {
    name: { zh: "孟思哲", en: "Max Menzies" },
    period: '2023.10–2024.12',
    start: '2023-10',
    role: { zh: "助理研究员", en: "Assistant Professor" },
    photo: '/people/portraits/menzies-max.webp',
    id: 'menzies-max',
  },
  {
    name: { zh: "康家熠", en: "Jiayi Kang" },
    period: '2024.07–2025.10',
    start: '2024-07',
    role: { zh: "助理研究员", en: "Assistant Professor" },
    atLab: { zh: "控制、非线性滤波与机器学习", en: "Control, nonlinear filtering and machine learning" },
    now: { zh: "河套数学与交叉学科研究院助理教授（2025 年 11 月起）", en: "Assistant Professor, Hetao Institute of Mathematics and Interdisciplinary Sciences (since Nov 2025)" },
    homepage: 'https://www.bimsa.cn/zh-CN/detail/JiayiKang.html',
    photo: '/people/portraits/kang-jiayi.webp',
    id: 'kang-jiayi',
  },
  {
    name: { zh: "张蒙蒙", en: "Mengmeng Zhang" },
    period: '2022.02–2026.10',
    start: '2022-02',
    role: { zh: "实习 → 博士后", en: "Intern → Postdoc" },
    atLab: { zh: "有向图同伦与 GLMY 理论", en: "Digraph homotopy and GLMY theory" },
    homepage: 'https://www.bimsa.cn/zh-CN/detail/mengmengzhang.html',
    photo: '/people/portraits/zhang-mengmeng.webp',
    id: 'zhang-mengmeng',
  },
  {
    name: { zh: "自云鹏", en: "Yunpeng Zi" },
    period: '2022.04–2024.11',
    start: '2022-04',
    role: { zh: "博士后", en: "Postdoc" },
    atLab: { zh: "拓扑数据分析", en: "Topological data analysis" },
    now: { zh: "山东大学", en: "Shandong University" },
    homepage: 'https://www.bimsa.cn/zh-CN/detail/ypzi.html',
    photo: '/people/portraits/zi-yunpeng.webp',
    id: 'zi-yunpeng',
  },
  {
    name: { zh: "孙楠", en: "Nan Sun" },
    period: '2024.07–2026.08',
    start: '2024-07',
    role: { zh: "博士后", en: "Postdoc" },
    atLab: { zh: "生物数学与机器学习", en: "Mathematical biology and machine learning" },
    homepage: 'https://www.bimsa.cn/zh-CN/detail/NanSun.html',
    photo: '/people/portraits/sun-nan.webp',
    id: 'sun-nan',
  },
  {
    name: { zh: "王玉", en: "Yu Wang" },
    period: '2023.11–2026.07',
    start: '2023-11',
    role: { zh: "实习 → 博士后", en: "Intern → Postdoc" },
    atLab: { zh: "复杂网络与统计遗传", en: "Complex networks and statistical genetics" },
    photo: '/people/portraits/wang-yu.webp',
    id: 'wang-yu',
  },
  {
    name: { zh: "李智凡", en: "Zhifan Li" },
    period: '2023.10–2025.12',
    start: '2023-10',
    role: { zh: "博士后", en: "Postdoc" },
    atLab: { zh: "复杂网络建模", en: "Modelling of complex networks" },
    photo: '/people/portraits/li-zhifan.webp',
    id: 'li-zhifan',
  },
  {
    name: { zh: "托马斯·韦特雷·图路", en: "Thomas Wetere Tulu" },
    period: '2024.06–2026.07',
    start: '2024-06',
    role: { zh: "博士后", en: "Postdoc" },
    atLab: { zh: "统计建模", en: "Statistical modelling" },
    photo: '/people/portraits/thomas-wetere-tulu.webp',
    id: 'thomas-wetere-tulu',
  },
  {
    name: { zh: "马修·伯菲特", en: "Matthew Burfitt" },
    period: '2022.12–2026.04',
    start: '2022-12',
    role: { zh: "博士后", en: "Postdoc" },
    atLab: { zh: "有向图同调与应用拓扑", en: "Digraph homology and applied topology" },
    now: { zh: "河套数学与交叉学科研究院", en: "Hetao Institute of Mathematics and Interdisciplinary Sciences" },
    photo: '/people/portraits/matthew-burfitt.webp',
    id: 'matthew-burfitt',
  },
  {
    name: { zh: "林耿龙", en: "Genglong Lin" },
    period: '2024.07–2026.10',
    start: '2024-07',
    role: { zh: "博士后", en: "Postdoc" },
    atLab: { zh: "多复变与复几何", en: "Several complex variables and complex geometry" },
    homepage: 'https://www.bimsa.cn/zh-CN/detail/GenglongLin.html',
    photo: '/people/portraits/lin-genglong.webp',
    id: 'lin-genglong',
  },
]

export const sortedVisitors = [...visitors].sort((a, b) => b.start.localeCompare(a.start))
