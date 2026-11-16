/**
 * Recruitment page content. The page is only built when `showJoinPage` in
 * src/data/site.ts is true — fill in real positions and contacts first.
 * Everything below is a structural draft for the lab to edit; do not publish
 * it unchanged.
 */
import type { L10n } from '../i18n'

export const joinIntro: L10n = {
  zh: '实验室欢迎具有数学、统计、物理、计算机或生命科学背景，对拓扑统计与复杂系统感兴趣的研究者加入。',
  en: 'We welcome researchers with backgrounds in mathematics, statistics, physics, computer science or the life sciences who are interested in topological statistics and complex systems.',
}

export const positions: { title: L10n; body: L10n }[] = [
  {
    title: { zh: '博士后', en: 'Postdoctoral researchers' },
    body: { zh: '【待实验室补充：方向、待遇、申请材料与截止时间】', en: '[To be provided by the lab: topics, terms, application materials and deadlines]' },
  },
  {
    title: { zh: '博士 / 硕士研究生', en: 'PhD & Master’s students' },
    body: { zh: '【待实验室补充：招生渠道与合作导师】', en: '[To be provided by the lab: admission routes and supervisors]' },
  },
  {
    title: { zh: '科研实习与访问学者', en: 'Research interns & visiting scholars' },
    body: { zh: '【待实验室补充】', en: '[To be provided by the lab]' },
  },
]
