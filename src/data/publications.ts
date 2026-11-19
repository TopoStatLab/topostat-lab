/**
 * Papers by laboratory people (from 丘成桐 down to students and former members).
 * Source: tsa.bimsa.cn publication list and BIMSA profile pages, checked 2026-11.
 *
 * Add new papers anywhere; the page sorts by year, then lists papers with
 * core people (`core: true`) first. `lab` lists the author names to set in
 * bold — write them exactly as they appear in `authors`.
 * `directions` uses ids from src/data/research.ts.
 */
import type { L10n } from '../i18n'

export type Publication = {
  year: number
  title: string
  authors?: string
  journal: string
  /** volume(issue):pages or article number */
  where?: string
  doi?: string
  url?: string
  preprint?: boolean
  directions: string[]
  lab?: string[]
  core?: boolean
  summary?: L10n
}

const SP = 'statistical-physics'
const TS = 'topological-statistics'
const ST = 'statistical-topology'

export const publications: Publication[] = [
  // ---------- 2026 ----------
  {
    year: 2026, core: true, directions: [SP, TS],
    title: 'Graph statistics theory of individualized quantitative genetics under haplotype-resolved genome assembly',
    authors: 'Sun L, Bian Y, Yang D, Miao R, Meng Y, Che J, Li Z, Li Z, Wang H, Wu S, Meng J, Wang Y, Griffin C, Yau ST, Wu R',
    lab: ['Yang D', 'Wu S', 'Yau ST', 'Wu R'],
    journal: 'Proceedings of the National Academy of Sciences', where: '123(14):e2600004123',
    doi: '10.1073/pnas.2600004123',
  },
  {
    year: 2026, core: true, directions: [SP, TS],
    title: 'Statistical learning of stochastic complex systems via the Yau-Yau nonlinear filter',
    authors: 'Xu S, Wang Y, Wu S, Wang Y, Dong A, Yau SS-T, Yau ST, Wu R',
    lab: ['Wu S', 'Dong A', 'Yau SS-T', 'Yau ST', 'Wu R'],
    journal: 'The Innovation', where: '7(6):101267',
    doi: '10.1016/j.xinn.2026.101267',
    summary: { zh: '以 Yau-Yau 非线性滤波为核心，建立随机复杂系统的统计学习框架。', en: 'A statistical-learning framework for stochastic complex systems built on the Yau-Yau nonlinear filter.' },
  },
  {
    year: 2026, core: true, directions: [SP],
    title: 'An end-to-end generalizable deep learning framework to comprehensively analyze transcriptional regulation',
    authors: 'Zhang Z, Fan X, Zhong J, Jia L, Han Y, Yang C, He Z, Li X, Yau ST, Wu R, Danko CG, Wang Z',
    lab: ['Yau ST', 'Wu R'],
    journal: 'Nature Communications', where: '17(1):4708',
    doi: '10.1038/s41467-026-70070-6',
  },

  {
    year: 2026, core: true, directions: [SP],
    title: 'A statistical mechanics model to decode tissue crosstalk during graft formation',
    authors: 'Dong A, Meng Y, Yau SS-T, Yau ST, Wu R',
    lab: ['Dong A', 'Yau SS-T', 'Yau ST', 'Wu R'],
    journal: 'Advanced Science', where: '13(10):e23373',
    doi: '10.1002/advs.202523373',
    summary: { zh: '用统计力学模型揭示植物嫁接过程中砧木与接穗的基因互作机制。', en: 'A statistical mechanics model revealing gene interactions between rootstock and scion during grafting.' },
  },
  {
    year: 2026, core: true, directions: [SP],
    title: 'IdopNetworks: How to infer the individualized genetic architecture of genomics for precision medicine',
    authors: 'Wu S, Pan W, Wang Y, Meng Y, Yau ST, Wu R',
    lab: ['Wu S', 'Yau ST', 'Wu R'],
    journal: 'Drug Discovery Today', where: '31(4)',
    doi: '10.1016/j.drudis.2026.104733',
  },
  {
    year: 2026, core: true, directions: [SP],
    title: 'Multi-task learning of complex networks via nonlinear ordinary differential equations',
    journal: 'Communications Physics',
    doi: '10.1038/s42005-026-02687-4',
  },
  {
    year: 2026, core: true, directions: [ST],
    title: 'On singular homology theories of digraphs and quivers',
    authors: 'Li J, Muranov Y, Wu J, Yau ST',
    lab: ['Li J', 'Wu J', 'Yau ST'],
    journal: 'Journal of Combinatorics', where: '17(1):89–120',
  },
  {
    year: 2026, core: true, directions: [SP],
    title: 'A computational ecological genetic model of phenotypic plasticity in species interactions',
    authors: 'Wang Y, Zhao J, He X, Yang D, Jin Y, Wu R',
    lab: ['Yang D', 'Wu R'],
    journal: 'Molecular Ecology Resources', where: '26(1):e70095',
    doi: '10.1111/1755-0998.70095',
  },
  {
    year: 2026, directions: [TS],
    title: 'An improved method of Wu’s functional clustering',
    authors: 'Pan W, Che J, Wu S',
    lab: ['Wu S'],
    journal: 'Statistics Innovation', where: '3:e005',
    doi: '10.48130/stati-0026-0006',
  },
  {
    year: 2026, directions: [TS],
    title: 'Estimating time-to-death and determining risk predictors of heart failure patients',
    authors: 'Temesgen S, Kedir R, Wang Y, Tulu TW',
    lab: ['Tulu TW'],
    journal: 'Statistics Innovation', where: '3:e001',
    doi: '10.48130/stati-0026-0001',
  },
  {
    year: 2026, directions: [SP],
    title: 'From adaptive networks to expanding state spaces: Comment on “Beyond networks: Toward adaptive models of biological complexity” by Pessoa',
    authors: 'Che J',
    journal: 'Physics of Life Reviews', where: '56:126–127',
    doi: '10.1016/j.plrev.2025.12.010',
  },

  // ---------- 2025 ----------
  {
    year: 2025, core: true, directions: [SP],
    title: 'An omnigenic interactome model to chart the genetic architecture of individual plants',
    authors: 'Fa C, Wang G, Pan W, Wang Y, Che J, Dong A, Yang D, Wu R, Yau ST, Sun L',
    lab: ['Dong A', 'Yang D', 'Wu R', 'Yau ST'],
    journal: 'Horticulture Research', where: '13(3):uhaf345',
    doi: '10.1093/hr/uhaf345',
  },
  {
    year: 2025, core: true, directions: [SP],
    title: 'High-order interaction modeling of tumor-microenvironment crosstalk for tumor growth',
    authors: 'Che J, Wang Y, Feng L, Gragnoli C, Griffin C, Wu R',
    lab: ['Wu R'],
    journal: 'Physics of Life Reviews', where: '54:11–23',
    doi: '10.1016/j.plrev.2025.05.007',
  },
  {
    year: 2025, core: true, directions: [SP],
    title: 'Network stress: a wiring diagram of whole stress genes',
    authors: 'Wang Y, Wu R',
    lab: ['Wu R'],
    journal: 'Horticulture Research', where: '13(2):uhaf302',
    doi: '10.1093/hr/uhaf302',
  },
  {
    year: 2025, core: true, directions: [TS],
    title: 'scMFF: a machine learning framework with multiple feature fusion strategies for cell type identification',
    authors: 'Sun N, Wang Y, Shi X, Yang D, Wu R, Yau SS-T',
    lab: ['Yang D', 'Wu R', 'Yau SS-T'],
    journal: 'BMC Bioinformatics', where: '26(1):277',
    doi: '10.1186/s12859-025-06309-8',
  },
  {
    year: 2025, core: true, directions: [SP],
    title: 'Cooperation of TRADD- and RIPK1-dependent cell death pathways in maintaining intestinal homeostasis',
    authors: 'Sun Z, Ye J, Sun W, Jiang L, Shan B, Zhang M, Xu J, Li W, Liu J, Jing H, Zhang T, Hou M, Xie C, Wu R, Pan H, Yuan J',
    lab: ['Wu R'],
    journal: 'Nature Communications', where: '16(1):1890',
    doi: '10.1038/s41467-025-57211-z',
  },
  {
    year: 2025, core: true, directions: [ST, SP],
    title: 'Disentangling complex systems: IdopNetwork meets GLMY homology theory',
    authors: 'Wu S, Zhang M',
    lab: ['Wu S', 'Zhang M'],
    journal: 'Data Analytics and Topology', where: '1(1):47–63',
    url: 'https://doi.org/10.48550/arXiv.2505.04140',
  },
  {
    year: 2025, core: true, directions: [TS],
    title: 'Yau-YauAL: A computer tool for solving nonlinear filtering problems',
    authors: 'Wang Y, Xu S, Wei X, Luo X, Yau SS-T, Yau ST, Wu R',
    lab: ['Yau SS-T', 'Yau ST', 'Wu R'],
    journal: 'Data Analytics and Topology', where: '1(1):77–84',
  },
  {
    year: 2025, core: true, directions: [SP],
    title: 'GameTalker: Tracing cell–cell communication in tumorigenesis across boundaries',
    authors: 'Wang Y, Sun N, Che J, Griffin C, Gragnoli C, Jiang L',
    journal: 'Data Analytics and Topology', where: '1(2):143–152',
    url: 'https://doi.org/10.4310/DAT.260127002543',
  },
  {
    year: 2025, core: true, directions: [ST],
    title: 'Inverse design of catalytic active sites via interpretable topology-based deep generative models',
    authors: 'Wang B, Zheng S, Wu J, et al.',
    lab: ['Wu J'],
    journal: 'npj Computational Materials', where: '11:147',
    url: 'https://doi.org/10.1038/s41524-025-01649',
  },
  {
    year: 2025, core: true, directions: [TS, ST],
    title: 'Change point detection in financial market using topological data analysis',
    authors: 'Yao J, Li J, Wu J, Yang M, Wang X',
    lab: ['Wu J'],
    journal: 'Systems', where: '13:875',
    doi: '10.3390/systems13100875',
  },
  {
    year: 2025, core: true, directions: [ST],
    title: 'Cohomotopy sets of (n−1)-connected (2n+2)-manifolds for small n',
    authors: 'Li P, Pan J, Wu J',
    lab: ['Wu J'],
    journal: 'Transactions of the London Mathematical Society', where: '12:e70010',
    doi: '10.1112/tlm3.70010',
  },
  {
    year: 2025, directions: [ST],
    title: 'A note on the non-existence of functors',
    authors: 'Dror Farjoun E, Ivanov SO, Krasilnikov A, Zaikovskii A',
    journal: 'Journal of Algebra', where: '675:273–288',
    doi: '10.1016/j.jalgebra.2025.03.037',
  },
  {
    year: 2025, directions: [TS],
    title: 'Data-driven design of electromagnetic functional materials: a statistical perspective',
    authors: 'Zhang H, Che J',
    journal: 'Statistics Innovation',
  },
  {
    year: 2025, directions: [ST], preprint: true,
    title: 'Bousfield–Kan completion as a codensity ∞-monad',
    authors: 'Dror Farjoun E, Ivanov SO',
    journal: 'arXiv:2507.08414',
    doi: '10.48550/arXiv.2507.08414',
  },
  {
    year: 2025, directions: [TS], preprint: true,
    title: 'A novel implementation of Yau–Yau filter for time-variant nonlinear problems',
    authors: 'Hu Y, Kang J, Ma L, Zhang X',
    journal: 'arXiv:2505.03240',
    doi: '10.48550/arXiv.2505.03240',
  },
  {
    year: 2025, directions: [ST], preprint: true,
    title: 'Cohomology of classifying spaces of rank 3 Kac-Moody groups',
    authors: 'Ruan Y, Zhao X',
    lab: ['Ruan Y'],
    journal: 'arXiv:2502.06169',
    doi: '10.48550/arXiv.2502.06169',
  },

  // ---------- 2024 ----------
  {
    year: 2024, core: true, directions: [ST], preprint: true,
    title: 'Primitive path homology',
    authors: 'Li J, Muranov Y, Wu J, Yau ST',
    lab: ['Li J', 'Wu J', 'Yau ST'],
    journal: 'arXiv:2411.18955',
    doi: '10.48550/arXiv.2411.18955',
  },
  {
    year: 2024, directions: [ST], preprint: true,
    title: 'New aspects of analyzing amyloid fibrils',
    authors: 'Lin X, Zi Y, Li F, Li J',
    journal: 'arXiv:2405.14370',
    doi: '10.48550/arXiv.2405.14370',
  },
]

export const paperUrl = (p: Publication) => (p.doi ? `https://doi.org/${p.doi}` : p.url)

/** Year descending, then papers with core people first. */
export const sortedPublications = [...publications].sort((a, b) => b.year - a.year || Number(!!b.core) - Number(!!a.core))
