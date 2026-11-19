/**
 * Laboratory people: leadership, academic committee, members.
 * Sources: tsa.bimsa.cn, the lab's BIMSA roster (2026-11) and BIMSA profile pages.
 *
 * Portraits live in public/people/portraits/<id>.webp: square crops,
 * 288×288 px, WebP quality ~80 (each ~5–10 KB). People without a photo show
 * their initial. Optional fields (title, homepage, email) render only when set.
 */
import type { L10n } from '../i18n'

export type Person = {
  id: string
  name: L10n
  photo?: string
  /** Role inside the laboratory, e.g. 主任 / 委员. */
  role?: L10n
  /** Position outside the lab role, e.g. BIMSA 研究员. */
  title?: L10n
  homepage?: string
  email?: string
  /** Core people: their papers and patents are listed first. */
  core?: boolean
}

const P = (id: string) => `/people/portraits/${id}.webp`
const bimsa = (slug: string) => `https://www.bimsa.cn/zh-CN/detail/${slug}.html`

// ---------- Leadership ----------
export const director: Person = {
  id: 'wu-rongling',
  name: { zh: '邬荣领', en: 'Rongling Wu' },
  role: { zh: '实验室主任', en: 'Director' },
  title: { zh: 'BIMSA 研究员、副院长', en: 'Professor and Vice President, BIMSA' },
  photo: P('wu-rongling'),
  homepage: bimsa('ronglingwu'),
  core: true,
}

export const deputies: Person[] = [
  {
    id: 'gong-xinqi',
    name: { zh: '龚新奇', en: 'Xinqi Gong' },
    role: { zh: '实验室副主任', en: 'Deputy Director' },
    photo: P('gong-xinqi'),
    core: true,
  },
]

export const assistants: Person[] = [
  {
    id: 'dong-ang',
    name: { zh: '董昂', en: 'Ang Dong' },
    role: { zh: '主任助理', en: 'Assistant to the Director' },
    title: { zh: 'BIMSA 助理研究员', en: 'Assistant Professor, BIMSA' },
    email: 'fantasys05227@bimsa.cn',
    homepage: bimsa('ddaa'),
  },
  {
    id: 'chen-tianhe',
    name: { zh: '陈天翮', en: 'Tianhe Chen' },
    role: { zh: '实验室助理', en: 'Laboratory Assistant' },
    // TODO(lab): add a public email for 陈天翮.
  },
]

// ---------- Academic committee ----------
export const committeeChair: Person = {
  id: 'yau-shingtung',
  name: { zh: '丘成桐', en: 'Shing-Tung Yau' },
  role: { zh: '学术委员会主任', en: 'Chair of the Academic Committee' },
  photo: P('yau-shingtung'),
  core: true,
}

export const committeeMembers: Person[] = [
  { id: 'liu-jun', name: { zh: '刘军', en: 'Jun Liu' }, photo: P('liu-jun') },
  { id: 'fang-fuquan', name: { zh: '方复全', en: 'Fuquan Fang' }, photo: P('fang-fuquan') },
  { id: 'rao-yi', name: { zh: '饶毅', en: 'Yi Rao' }, photo: P('rao-yi') },
  { id: 'wu-jie', name: { zh: '吴杰', en: 'Jie Wu' }, photo: P('wu-jie'), core: true },
  { id: 'qiu-chengdong', name: { zh: '丘成栋', en: 'Stephen Shing-Toung Yau' }, photo: P('qiu-chengdong') },
  { id: 'zhu-liping', name: { zh: '朱利平', en: 'Liping Zhu' }, photo: P('zhu-liping') },
  { id: 'liu-jingyuan', name: { zh: '刘婧媛', en: 'Jingyuan Liu' }, photo: P('liu-jingyuan') },
  { id: 'yang-fan', name: { zh: '杨帆', en: 'Fan Yang' }, photo: P('yang-fan') },
  // TODO(lab): portrait for 崔跃华 (the repo's old photo files were corrupt).
  { id: 'cui-yuehua', name: { zh: '崔跃华', en: 'Yuehua Cui' } },
].map((p): Person => ({ ...p, role: { zh: '委员', en: 'Member' } }))

// ---------- Members ----------
// Source: BIMSA roster supplied by the lab (2026-11). People whose BIMSA
// contract is still running are listed here; former members are in
// src/data/visitors.ts. The director appears above and is not repeated.
export type Tier = 'professor' | 'associate' | 'assistant' | 'postdoc' | 'student'
export type Member = Person & { tier: Tier; /** YYYY.MM, first BIMSA contract */ since?: string }

export const tiers: { id: Tier; label: L10n }[] = [
  { id: 'professor', label: { zh: '研究员', en: 'Professors' } },
  { id: 'associate', label: { zh: '副研究员', en: 'Associate professors' } },
  { id: 'assistant', label: { zh: '助理研究员', en: 'Assistant professors' } },
  { id: 'postdoc', label: { zh: '博士后', en: 'Postdocs' } },
  { id: 'student', label: { zh: '研究助理与博士生', en: 'Research assistants and students' } },
]

export const members: Member[] = [
  { id: 'zhang-xiaoming', tier: 'professor', name: { zh: "张晓明", en: "Xiaoming Zhang" }, title: { zh: "研究员", en: "Professor" }, since: '2020.08' },
  { id: 'wu-jie', tier: 'professor', name: { zh: "吴杰", en: "Jie Wu" }, title: { zh: "研究员", en: "Professor" }, photo: P('wu-jie'), since: '2021.12' },
  { id: 'han-liyan', tier: 'professor', name: { zh: "韩立岩", en: "Liyan Han" }, title: { zh: "研究员", en: "Professor" }, since: '2022.05' },
  { id: 'long-fei', tier: 'professor', name: { zh: "龙飞", en: "Fei Long" }, title: { zh: "研究员", en: "Professor" }, since: '2022.05' },
  { id: 'sergei-ivanov', tier: 'professor', name: { zh: "谢尔盖·伊万诺夫", en: "Sergei Ivanov" }, title: { zh: "研究员", en: "Professor" }, since: '2022.10' },
  { id: 'tadahisa-funaki', tier: 'professor', name: { zh: "舟木 直久", en: "Tadahisa Funaki" }, title: { zh: "研究员", en: "Professor" }, since: '2022.11' },
  { id: 'wang-zhong', tier: 'professor', name: { zh: "王忠", en: "Zhong Wang" }, title: { zh: "研究员", en: "Professor" }, since: '2022.11' },
  { id: 'niu-yishuai', tier: 'professor', name: { zh: "牛一帅", en: "Yi-Shuai Niu" }, title: { zh: "研究员", en: "Professor" }, since: '2023.10' },
  { id: 'yuval-peres', tier: 'professor', name: { zh: "尤瓦尔·佩雷斯", en: "Yuval Peres" }, title: { zh: "研究员", en: "Professor" }, since: '2023.10' },
  { id: 'feng-qi', tier: 'professor', name: { zh: "冯琦", en: "Qi Feng" }, title: { zh: "研究员", en: "Professor" }, since: '2024.06' },
  { id: 'cai-yunfeng', tier: 'professor', name: { zh: "蔡云峰", en: "Yunfeng Cai" }, title: { zh: "研究员", en: "Professor" }, since: '2024.06' },
  { id: 'sun-mingming', tier: 'professor', name: { zh: "孙明明", en: "Mingming Sun" }, title: { zh: "研究员", en: "Professor" }, since: '2024.09' },
  { id: 'li-jingyan', tier: 'associate', name: { zh: "李京艳", en: "Jingyan Li" }, title: { zh: "副研究员", en: "Associate Professor" }, homepage: bimsa('jingyanli'), since: '2021.09' },
  { id: 'xie-haihua', tier: 'associate', name: { zh: "谢海华", en: "Haihua Xie" }, title: { zh: "副研究员", en: "Associate Professor" }, since: '2021.10' },
  { id: 'wu-qi', tier: 'associate', name: { zh: "吴琦", en: "Qi Wu" }, title: { zh: "副研究员", en: "Associate Professor" }, since: '2024.06' },
  { id: 'zhao-xin', tier: 'associate', name: { zh: "赵鑫", en: "Xin Zhao" }, title: { zh: "副研究员", en: "Associate Professor" }, since: '2024.07' },
  { id: 'he-miao', tier: 'assistant', name: { zh: "何苗", en: "Miao He" }, title: { zh: "助理研究员", en: "Assistant Professor" }, since: '2022.01' },
  { id: 'li-wenjuan', tier: 'assistant', name: { zh: "李文娟", en: "Wenjuan Li" }, title: { zh: "助理研究员", en: "Assistant Professor" }, since: '2022.04' },
  { id: 'li-zhen', tier: 'assistant', name: { zh: "李振", en: "Zhen Li" }, title: { zh: "助理研究员", en: "Assistant Professor" }, since: '2022.09' },
  { id: 'gao-ruize', tier: 'assistant', name: { zh: "高瑞泽", en: "Ruize Gao" }, title: { zh: "助理研究员", en: "Assistant Professor" }, since: '2023.04' },
  { id: 'dong-ang', tier: 'assistant', name: { zh: "董昂", en: "Ang Dong" }, title: { zh: "助理研究员", en: "Assistant Professor" }, homepage: bimsa('ddaa'), since: '2023.07' },
  { id: 'song-jiebo', tier: 'assistant', name: { zh: "宋洁博", en: "Jiebo Song" }, title: { zh: "助理研究员", en: "Assistant Professor" }, since: '2023.09' },
  { id: 'bai-shuliang', tier: 'assistant', name: { zh: "白淑亮", en: "Shuliang Bai" }, title: { zh: "助理研究员", en: "Assistant Professor" }, since: '2023.09' },
  { id: 'wu-shuang', tier: 'assistant', name: { zh: "吴双", en: "Shuang Wu" }, title: { zh: "助理研究员", en: "Assistant Professor" }, homepage: bimsa('wushuang'), since: '2023.10' },
  { id: 'yang-dengcheng', tier: 'assistant', name: { zh: "杨登程", en: "Dengcheng Yang" }, title: { zh: "助理研究员", en: "Assistant Professor" }, homepage: bimsa('yangdengcheng'), since: '2023.11' },
  { id: 'qin-shuo', tier: 'assistant', name: { zh: "秦硕", en: "Shuo Qin" }, title: { zh: "陈省身冠名讲师", en: "Chern Instructor" }, since: '2024.06' },
  { id: 'deng-manyao', tier: 'postdoc', name: { zh: "邓曼瑶", en: "Manyao Deng" }, title: { zh: "博士后", en: "Postdoc" }, since: '2022.10' },
  { id: 'liu-zhiwen', tier: 'postdoc', name: { zh: "刘志文", en: "Zhiwen Liu" }, title: { zh: "博士后", en: "Postdoc" }, since: '2024.07' },
  { id: 'zhang-ping', tier: 'student', name: { zh: "张萍", en: "Ping Zhang" }, title: { zh: "研究助理", en: "Research Assistant" }, since: '2020.09' },
  { id: 'hu-yuzhong', tier: 'student', name: { zh: "胡煜中", en: "Yuzhong Hu" }, title: { zh: "博士研究生", en: "PhD student" }, since: '2021.03' },
  // Not in the 2026-11 BIMSA roster, kept at the lab's request.
  { id: 'lei-fengchun', tier: 'professor', name: { zh: '雷逢春', en: 'Fengchun Lei' }, title: { zh: '研究员', en: 'Professor' } },
  { id: 'bai-hao', tier: 'postdoc', name: { zh: '柏浩', en: 'Hao Bai' }, title: { zh: '博士后', en: 'Postdoc' }, homepage: bimsa('hbai') },
  { id: 'gong-huiying', tier: 'postdoc', name: { zh: '龚慧莹', en: 'Huiying Gong' }, title: { zh: '博士后', en: 'Postdoc' }, homepage: bimsa('hygong') },
]
