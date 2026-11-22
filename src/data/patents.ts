/**
 * Patents held or filed by laboratory people (all members, past and present).
 * The page lists recent years first and patents with core people first.
 *
 * Source: the lab's BIMSA roster (2026-11). `lab` lists inventors to set in bold.
 *
 * Example entry:
 * {
 *   year: 2025,
 *   title: '一种基于高阶互作网络的……方法',
 *   inventors: '邬荣领, 董昂, ……',
 *   lab: ['邬荣领', '董昂'],
 *   number: 'CN 1xxxxxxxx B',
 *   status: 'granted',          // 'granted' 授权 | 'published' 已公开 | 'filed' 已受理
 *   core: true,
 * },
 */
export type Patent = {
  year: number
  title: string
  inventors: string
  lab?: string[]
  number?: string
  status: 'granted' | 'published' | 'filed'
  core?: boolean
  url?: string
  /** e.g. （与北医三院合作） */
  note?: string
}

export const patents: Patent[] = [
  // From the lab's 2026 achievement report (董昂).
  {
    year: 2026, core: true,
    title: '面向个体遗传学的等位基因特异性表达分析方法及装置、计算机程序产品',
    inventors: '邬荣领, 董昂, 边洋洋, 孙丽丹, 丘成桐',
    lab: ['邬荣领', '董昂', '丘成桐'],
    number: 'CN122050491A',
    status: 'published',
  },
  {
    year: 2026, core: true,
    title: '动态复杂网络的拓扑结构分析方法、装置和存储介质',
    inventors: '孟依晗, 董昂, 丘成栋, 丘成桐, 邬荣领',
    lab: ['董昂', '丘成栋', '丘成桐', '邬荣领'],
    number: '申请号 202610352312.1',
    status: 'filed',
  },
  {
    year: 2026, core: true,
    title: '一种堆积发酵微生物功能聚类算法',
    inventors: '董昂, 邬荣领, 吴双, 王玉, 龙飞',
    lab: ['董昂', '邬荣领', '吴双', '王玉', '龙飞'],
    status: 'filed',
  },
  {
    year: 2026, core: true,
    title: '一种堆积发酵微生物互作网络建立及核心微生物确定方法',
    inventors: '董昂, 邬荣领, 龙飞, 吴杰, 张晓明',
    lab: ['董昂', '邬荣领', '龙飞', '吴杰', '张晓明'],
    status: 'filed',
  },
  {
    year: 2026,
    title: "一种基于静态超声图像向超声视频迁移建模的甲状腺滤泡性肿瘤分层识别方法",
    inventors: "孙楠, 姚响芸, 李欣, 丘成栋, 宋洁博",
    lab: ["孙楠", "丘成栋", "宋洁博"],
    number: "CN122199938A",
    status: 'published',
    note: "（与北医三院合作）",
  },
  {
    year: 2026,
    title: "一种基于凸包几何约束的基因变异的类别预测方法及装置",
    inventors: "孙楠, 丘成栋, 余泓谕, 周丕宇, 赵春阳, 魏君陶",
    lab: ["孙楠", "丘成栋"],
    number: "CN122050533A",
    status: 'published',
  },
  {
    year: 2025,
    title: "Image style transfer",
    inventors: "H Wang, XIE Zeke, CAI Yunfeng, M Sun",
    lab: ["CAI Yunfeng", "M Sun"],
    number: "US Patent Application",
    status: 'published',
  },
  {
    year: 2025,
    title: "基于动态分布适应和多源域特征加权的单细胞药物反应预测方法及装置",
    inventors: "孙楠, 丘成栋, 余泓谕, 王玉, 周丕宇",
    lab: ["孙楠", "丘成栋", "王玉"],
    number: "CN122117028A",
    status: 'published',
  },
  {
    year: 2025,
    title: "一种超声图像中喉返神经及其相邻解剖结构的识别方法",
    inventors: "姚响芸, 李欣, 孙楠, 崔立刚",
    lab: ["孙楠"],
    number: "CN120451683B",
    status: 'granted',
    note: "（与北医三院合作）",
  },
]

export const sortedPatents = [...patents].sort((a, b) => b.year - a.year || Number(!!b.core) - Number(!!a.core))
