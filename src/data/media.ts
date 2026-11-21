/**
 * Photos used across the site (public/media). Each has a large (1600px) and a
 * small (720px) WebP. `credit` names the page the photo was taken from; it is
 * shown under cards. TODO(lab): replace with the lab's own photos over time.
 */
export type Media = { src: string; sm: string; alt: { zh: string; en: string }; credit: { zh: string; en: string } }
const m = (name: string, alt: Media['alt'], credit: Media['credit']): Media => ({
  src: `/media/${name}.webp`,
  sm: `/media/${name}-sm.webp`,
  alt,
  credit,
})
/** Responsive sources: AVIF at 480/720/1080/1600w, WebP fallback at 720/1600w. */
export const avifSet = (x: Media) => {
  const b = x.src.replace(/\.webp$/, '')
  return `${b}-xs.avif 480w, ${b}-sm.avif 720w, ${b}-md.avif 1080w, ${b}.avif 1600w`
}
export const webpSet = (x: Media) => `${x.sm} 720w, ${x.src} 1600w`
const BIMSA = { zh: 'BIMSA', en: 'BIMSA' }

export const media = {
  campusSign: m('campus-sign', { zh: '北京雁栖湖应用数学研究院园区', en: 'BIMSA campus' }, BIMSA),
  campusAerial: m('campus-aerial', { zh: 'BIMSA 园区建筑', en: 'BIMSA campus buildings' }, BIMSA),
  campusMountain: m('campus-mountain', { zh: '雁栖湖畔的 BIMSA 园区', en: 'BIMSA campus by Yanqi Lake' }, BIMSA),
  yauyau: m('yauyau', { zh: 'Yau–Yau 随机网络模型示意图', en: 'Overview of the Yau–Yau stochastic network model' }, BIMSA),
  yauyauDiagram: m('yauyau-diagram', { zh: 'Yau–Yau 网络的数据驱动建模流程', en: 'Data-driven modelling with Yau–Yau networks' }, BIMSA),
  meiliGroup: m('meili-group', { zh: '2026 年魅丽数学系列会议合影', en: 'Group photo, 2026 Meili Mathematics workshop' }, { zh: '内蒙古师范大学', en: 'Inner Mongolia Normal University' }),
  meiliHall: m('meili-hall', { zh: '魅丽数学系列会议会场', en: 'Meili Mathematics workshop' }, { zh: '内蒙古师范大学', en: 'Inner Mongolia Normal University' }),
  greatwallGroup: m('greatwall-group', { zh: '长城工程科技会议专题会合影', en: 'Group photo, Great Wall Engineering Forum session' }, { zh: '清华大学', en: 'Tsinghua University' }),
  greatwallHall: m('greatwall-hall', { zh: '长城工程科技会议专题会会场', en: 'Great Wall Engineering Forum session' }, { zh: '清华大学', en: 'Tsinghua University' }),
  hebtuHall: m('hebtu-hall', { zh: '东亚代数拓扑会议会场', en: 'East Asian Conference on Algebraic Topology' }, { zh: '河北师范大学', en: 'Hebei Normal University' }),
  tjuHall: m('tju-hall', { zh: '2025 代谢药学学术大会会场', en: '2025 Metabolic Pharmacy Conference' }, { zh: '天津大学', en: 'Tianjin University' }),
  tsimf: m('tsimf', { zh: '活动举办地：清华三亚国际数学论坛', en: 'Venue: Tsinghua Sanya International Mathematics Forum' }, { zh: '清华三亚国际数学论坛', en: 'TSIMF' }),
  mlstatWhu: m('mlstat-whu', { zh: 'MLSTAT 2025 举办地武汉大学', en: 'Wuhan University, host of MLSTAT 2025' }, { zh: 'MLSTAT 2025', en: 'MLSTAT 2025' }),
} satisfies Record<string, Media>
