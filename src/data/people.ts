/**
 * Laboratory people: leadership, academic committee, research teams.
 * Sources: tsa.bimsa.cn (organization, research teams) and BIMSA profile pages.
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

// ---------- Research teams (members) ----------
export type Team = { id: string; name: L10n; lead: L10n; members: Person[] }

export const teams: Team[] = [
  {
    id: 'statistics',
    name: { zh: '应用统计与数据科学', en: 'Applied Statistics and Data Science' },
    lead: { zh: '负责人：邬荣领', en: 'Led by Rongling Wu' },
    members: [
      { id: 'zhong-wang', name: { zh: 'Zhong Wang', en: 'Zhong Wang' }, title: { zh: '研究员', en: 'Professor' } },
      { id: 'dong-ang', name: { zh: '董昂', en: 'Ang Dong' }, title: { zh: '助理研究员', en: 'Assistant Professor' }, homepage: bimsa('ddaa') },
      { id: 'yang-dengcheng', name: { zh: '杨登程', en: 'Dengcheng Yang' }, title: { zh: '助理研究员', en: 'Assistant Professor' }, homepage: bimsa('yangdengcheng') },
      { id: 'wu-shuang', name: { zh: '吴双', en: 'Shuang Wu' }, title: { zh: '助理研究员', en: 'Assistant Professor' }, homepage: bimsa('wushuang') },
      { id: 'bai-hao', name: { zh: '柏浩', en: 'Hao Bai' }, title: { zh: '博士后', en: 'Postdoc' }, homepage: bimsa('hbai') },
      { id: 'gong-huiying', name: { zh: '龚慧莹', en: 'Huiying Gong' }, title: { zh: '博士后', en: 'Postdoc' }, homepage: bimsa('hygong') },
      { id: 'wang-yu', name: { zh: '王宇', en: 'Yu Wang' }, title: { zh: '博士研究生', en: 'PhD student' }, homepage: bimsa('ywang') },
      { id: 'thomas-tulu', name: { zh: 'Thomas Tulu', en: 'Thomas Tulu' } },
    ],
  },
  {
    id: 'topology',
    name: { zh: '代数拓扑及其应用', en: 'Algebraic Topology and its Applications' },
    lead: { zh: '负责人：吴杰', en: 'Led by Jie Wu' },
    members: [
      { id: 'lei-fengchun', name: { zh: '雷逢春', en: 'Fengchun Lei' }, title: { zh: '研究员', en: 'Professor' } },
      { id: 'li-jingyan', name: { zh: '李京艳', en: 'Jingyan Li' }, title: { zh: '副研究员', en: 'Associate Professor' }, homepage: bimsa('jingyanli') },
      { id: 'ruan-yangyang', name: { zh: '阮洋洋', en: 'Yangyang Ruan' }, title: { zh: '博士后', en: 'Postdoc' }, homepage: bimsa('yyruan') },
      { id: 'zhang-mengmeng', name: { zh: '张蒙蒙', en: 'Mengmeng Zhang' }, title: { zh: '博士后', en: 'Postdoc' }, homepage: bimsa('mengmengzhang') },
    ],
  },
]
