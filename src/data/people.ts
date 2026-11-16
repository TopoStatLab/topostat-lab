/**
 * People shown on the team page.
 *
 * Portraits live in public/people/portraits/<id>.webp: square crops,
 * 288×288 px, WebP quality ~80 (each ~5–10 KB). To add or replace one,
 * crop the face to a square, resize to 288 px and export as WebP.
 *
 * Optional fields render only when provided, so profiles can be filled in
 * gradually: title, affiliation, homepage, email, research.
 */
import type { L10n } from '../i18n'

export type Person = {
  id: string
  name: L10n
  photo?: string
  /** CSS object-position for the portrait crop. */
  position?: string
  /** Scale factor when the photo is a crop of a larger picture. */
  zoom?: number
  title?: L10n
  affiliation?: L10n
  research?: L10n
  homepage?: string
  email?: string
}

export const leader: Person = {
  id: 'yau-shingtung',
  name: { zh: '丘成桐', en: 'Shing-Tung Yau' },
  photo: '/people/portraits/yau-shingtung.webp',
}

export const director: Person = {
  id: 'wu-rongling',
  name: { zh: '邬荣领', en: 'Rongling Wu' },
  title: { zh: '实验室主任', en: 'Director' },
  photo: '/people/portraits/wu-rongling.webp',
  homepage: 'https://www.bimsa.cn/zh-CN/detail/ronglingwu.html',
}

export const members: Person[] = [
  {
    id: 'liu-jingyuan',
    name: { zh: '刘婧媛', en: 'Jingyuan Liu' },
    photo: '/people/portraits/liu-jingyuan.webp',
  },
  {
    id: 'cui-yuehua',
    name: { zh: '崔跃华', en: 'Yuehua Cui' },
    // TODO(lab): the repo's photo files for this member are corrupt; add public/people/portraits/cui-yuehua.webp
  },
  {
    id: 'liu-jun',
    name: { zh: '刘军', en: 'Jun Liu' },
    photo: '/people/portraits/liu-jun.webp',
  },
  {
    id: 'fang-fuquan',
    name: { zh: '方复全', en: 'Fuquan Fang' },
    photo: '/people/portraits/fang-fuquan.webp',
  },
  {
    id: 'wu-jie',
    name: { zh: '吴杰', en: 'Jie Wu' },
    photo: '/people/portraits/wu-jie.webp',
  },
  {
    id: 'qiu-chengdong',
    name: { zh: '丘成栋', en: 'Chengdong Qiu' },
    photo: '/people/portraits/qiu-chengdong.webp',
  },
  {
    id: 'yang-fan',
    name: { zh: '杨帆', en: 'Fan Yang' },
    photo: '/people/portraits/yang-fan.webp',
  },
  {
    id: 'rao-yi',
    name: { zh: '饶毅', en: 'Yi Rao' },
    photo: '/people/portraits/rao-yi.webp',
  },
  {
    id: 'zhu-liping',
    name: { zh: '朱利平', en: 'Liping Zhu' },
    photo: '/people/portraits/zhu-liping.webp',
  },
  {
    id: 'gong-xinqi',
    name: { zh: '龚新奇', en: 'Xinqi Gong' },
    photo: '/people/portraits/gong-xinqi.webp',
  },
]
