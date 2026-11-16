import type { L10n } from '../i18n'

export const researchDirections: {
  id: string
  title: L10n
  en: string
  body: L10n
  tags: string[]
}[] = [
  {
    id: 'statistical-physics',
    title: { zh: '广义统计物理与复杂网络', en: 'Generalized Statistical Physics & Complex Networks' },
    en: 'Generalized Statistical Physics',
    body: {
      zh: '融合进化博弈论、生态位理论与统计建模，发展高维动态全息互作网络模型 idopNetwork，识别复杂系统中的结构、规律与演化趋势。',
      en: 'Combining evolutionary game theory, niche theory and statistical modelling to develop idopNetwork — high-dimensional, dynamic, omnidirectional interaction networks — for identifying structure, regularities and evolutionary trends in complex systems.',
    },
    tags: ['idopNetwork', 'Dynamic Networks', 'Statistical Physics'],
  },
  {
    id: 'topological-statistics',
    title: { zh: '拓扑统计学', en: 'Topological Statistics' },
    en: 'Topological Statistics',
    body: {
      zh: '将拓扑学的概念与工具引入统计物理和数据分析框架，面向高维、动态、异构与含噪数据建立新的统计理论与计算方法。',
      en: 'Bringing the concepts and tools of topology into statistical physics and data analysis, building new statistical theory and computational methods for high-dimensional, dynamic, heterogeneous and noisy data.',
    },
    tags: ['TDA', 'High-dimensional Data', 'Topology'],
  },
  {
    id: 'statistical-topology',
    title: { zh: '统计拓扑与高阶互作', en: 'Statistical Topology & Higher-order Interactions' },
    en: 'Statistical Topology',
    body: {
      zh: '以现代拓扑理论为基础，研究适用于高阶互作复杂网络的数学工具，连接非欧数据分析、复杂系统建模与可解释智能。',
      en: 'Grounded in modern topology, developing mathematical tools for complex networks with higher-order interactions, connecting non-Euclidean data analysis, complex-system modelling and interpretable intelligence.',
    },
    tags: ['Higher-order Interaction', 'Non-Euclidean Data', 'Complex Systems'],
  },
]

export const concepts: L10n[] = [
  { zh: '非欧数据结构', en: 'Non-Euclidean data' },
  { zh: '动态网络建模', en: 'Dynamic network modelling' },
  { zh: '高阶互作推断', en: 'Higher-order inference' },
  { zh: '数学驱动智能', en: 'Mathematics-driven AI' },
]

export const applications: { title: L10n; en: string; body: L10n }[] = [
  {
    title: { zh: '生物医学', en: 'Biomedicine' },
    en: 'Biomedicine',
    body: {
      zh: '从分子到个体构建高分辨率生物网络，服务疾病机制解析、个性化健康管理与精准药物设计。',
      en: 'High-resolution biological networks from molecules to individuals, supporting disease mechanisms, personalised health management and precision drug design.',
    },
  },
  {
    title: { zh: '人工智能', en: 'Artificial Intelligence' },
    en: 'Artificial Intelligence',
    body: {
      zh: '为非欧数据、复杂结构与动态系统建立可解释的数学统计底座，拓展机器学习建模范式。',
      en: 'Interpretable mathematical and statistical foundations for non-Euclidean data, complex structures and dynamical systems, extending machine-learning paradigms.',
    },
  },
  {
    title: { zh: '材料与环境', en: 'Materials & Environment' },
    en: 'Materials & Environment',
    body: {
      zh: '将拓扑统计工具推广到材料科学、环境科学等复杂多尺度系统。',
      en: 'Extending topological-statistical tools to complex multi-scale systems in materials and environmental science.',
    },
  },
  {
    title: { zh: '社会与经济', en: 'Society & Economy' },
    en: 'Society & Economy',
    body: {
      zh: '以网络与复杂系统方法分析真实世界中的群体互动、传播与演化机制。',
      en: 'Network and complex-system methods for collective interaction, diffusion and evolution in the real world.',
    },
  },
]
