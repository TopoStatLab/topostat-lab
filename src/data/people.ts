/**
 * People shown on the team page.
 *
 * Photo assignments mirror the live site as of 2026-09. The repo also holds
 * unused files public/people/{yau,wu,gong}.jpg and team/{cui-yuehua,yang-fan}.jpg
 * whose subjects have not been confirmed — check before wiring them in.
 *
 * Photos: prefer local files in /public/people/ (run `npm run photos:localize`
 * to download the remaining remote ones, after the lab has confirmed each
 * person's permission). Remote URLs are a temporary fallback and break when
 * the source site changes.
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
  photo: '/people/team/yau-shingtung.jpg',
  position: '50% 22%',
}

export const director: Person = {
  id: 'wu-rongling',
  name: { zh: '邬荣领', en: 'Rongling Wu' },
  title: { zh: '实验室主任', en: 'Director' },
  photo: '/people/remote/wu-rongling.jpg',
  homepage: 'https://www.bimsa.cn/zh-CN/detail/ronglingwu.html',
}

export const members: Person[] = [
  {
    id: 'liu-jingyuan',
    name: { zh: '刘婧媛', en: 'Jingyuan Liu' },
    photo: '/people/remote/liu-jingyuan.jpg',
    position: '35% 28%',
  },
  {
    id: 'cui-yuehua',
    name: { zh: '崔跃华', en: 'Yuehua Cui' },
    photo: '/people/team/cui-yuehua.svg',
    position: '50% 50%',
  },
  {
    id: 'liu-jun',
    name: { zh: '刘军', en: 'Jun Liu' },
    photo: 'https://www.stat.tsinghua.edu.cn/__local/2/88/D8/A95CAD492C908EC0913472BD84A_9B65899A_C54F.jpg',
  },
  {
    id: 'fang-fuquan',
    name: { zh: '方复全', en: 'Fuquan Fang' },
    photo: '/people/remote/fang-fuquan.jpg',
  },
  {
    id: 'wu-jie',
    name: { zh: '吴杰', en: 'Jie Wu' },
    photo: '/people/remote/wu-jie.jpg',
  },
  {
    id: 'qiu-chengdong',
    name: { zh: '丘成栋', en: 'Chengdong Qiu' },
    photo: '/people/remote/qiu-chengdong.jpg',
  },
  {
    id: 'yang-fan',
    name: { zh: '杨帆', en: 'Fan Yang' },
    // Cropped from a larger photo on the live site; replace with a proper portrait.
    photo: '/people/remote/yang-fan.png',
    position: '72% 61%',
    zoom: 3.8,
  },
  {
    id: 'rao-yi',
    name: { zh: '饶毅', en: 'Yi Rao' },
    photo: '/people/remote/rao-yi.jpg',
  },
  {
    id: 'zhu-liping',
    name: { zh: '朱利平', en: 'Liping Zhu' },
    photo: 'https://yjszs.zjgsu.edu.cn/_upload/article/images/c3/f3/b7bffef34dbbb833047cb272c97f/e506d406-5bb1-460b-8556-8b304939e90c.png',
  },
  {
    id: 'gong-xinqi',
    name: { zh: '龚新奇', en: 'Xinqi Gong' },
    photo: '/people/remote/gong-xinqi.jpg',
  },
]
