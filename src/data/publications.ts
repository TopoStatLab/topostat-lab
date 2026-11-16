/**
 * Publications. Add new entries at the top; the list page groups by year
 * and lets visitors filter by research direction.
 * `directions` uses ids from src/data/research.ts.
 */
import type { L10n } from '../i18n'

export type Publication = {
  year: number
  journal: string
  title: string
  authors?: string
  summary: L10n
  doi: string
  directions: string[]
  code?: string
}

export const publications: Publication[] = [
  {
    year: 2026,
    journal: 'The Innovation',
    title: 'Statistical learning of stochastic complex systems via the Yau-Yau nonlinear filter',
    summary: {
      zh: '以 Yau-Yau 非线性滤波为核心，探索随机复杂系统的统计学习框架。',
      en: 'A statistical-learning framework for stochastic complex systems built on the Yau-Yau nonlinear filter.',
    },
    doi: '10.1016/j.xinn.2026.101267',
    directions: ['statistical-physics', 'topological-statistics'],
  },
  {
    year: 2026,
    journal: 'Communications Physics',
    title: 'Multi-task learning of complex networks via nonlinear ordinary differential equations',
    summary: {
      zh: '通过非线性常微分方程统一学习复杂网络结构与动力学任务。',
      en: 'Jointly learning the structure and dynamics of complex networks through nonlinear ordinary differential equations.',
    },
    doi: '10.1038/s42005-026-02687-4',
    directions: ['statistical-physics'],
  },
  {
    year: 2026,
    journal: 'Drug Discovery Today',
    title: 'IdopNetworks: How to infer the individualized genetic architecture of genomics for precision medicine',
    summary: {
      zh: '面向精准医学，从群体平均走向个体化基因组网络结构推断。',
      en: 'Moving from population averages to individualised genomic network inference for precision medicine.',
    },
    doi: '10.1016/j.drudis.2026.104733',
    directions: ['statistical-physics'],
  },
]

export const doiUrl = (doi: string) => `https://doi.org/${doi}`
