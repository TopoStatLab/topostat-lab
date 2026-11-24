/**
 * Lab news releases published on the site (/news/<slug>/).
 * Chinese text is the lab's release (2026-11-23); English is a translation.
 */
import type { L10n } from '../i18n'
import { media, type Media } from './media'

export type Block = { p: L10n } | { img: Media; caption: L10n }
export type Article = {
  slug: string
  date: string
  title: L10n
  summary: L10n
  place: L10n
  /** Optional: articles without a photo are listed as text. */
  cover?: Media
  blocks: Block[]
  /** For pieces based on another outlet's report: who published it, and where. */
  source?: { name: L10n; authors?: L10n; url?: string }
}

export const articles: Article[] = [
  {
    slug: 'himis-biomedicine-2026',
    date: '2026-11-13',
    title: {
      zh: '“生物医学中的数学智能”学术研讨会在深圳举行',
      en: 'Workshop on Mathematical Intelligence in Biomedicine held in Shenzhen',
    },
    summary: {
      zh: '会议由康家熠、车金灿和邬荣领组织，十场报告聚焦数学、统计学与生物医学的交叉研究。',
      en: 'Organized by Jiayi Kang, Jincan Che and Rongling Wu, the workshop’s ten talks addressed research where mathematics, statistics and biomedicine meet.',
    },
    place: { zh: '深圳，河套数学与交叉学科研究院', en: 'HIMIS, Shenzhen' },
    cover: media.himisGroup,
    blocks: [
      { p: {
        zh: '2026年11月13日，“生物医学中的数学智能”学术研讨会在河套数学与交叉学科研究院（深圳）举行。会议由康家熠、车金灿和邬荣领组织，聚焦数学、统计学与生物医学的交叉研究，探讨数学建模、统计分析和智能计算在生命科学与医学研究中的应用。',
        en: 'On 13 November 2026, the workshop “Mathematical Intelligence in Biomedicine” was held at the Hetao Institute of Mathematics and Interdisciplinary Sciences (HIMIS) in Shenzhen. Organized by Jiayi Kang, Jincan Che and Rongling Wu, it focused on research at the intersection of mathematics, statistics and biomedicine, and on how mathematical modelling, statistical analysis and intelligent computation can serve the life sciences and medicine.',
      } },
      { p: {
        zh: '会议设置十场学术报告，来自北京雁栖湖应用数学研究院、河套数学与交叉学科研究院、耶鲁大学、首都医科大学、南方医科大学、河北医科大学和中国人民大学等机构的学者及博士生分享了相关研究。报告涵盖图统计与网络建模、肠道微生态、药物反应预测和分子结构分析等议题，展示了数学与计算方法在不同生物医学研究场景中的应用。',
        en: 'Ten talks were given by researchers and doctoral students from the Beijing Institute of Mathematical Sciences and Applications, HIMIS, Yale University, Capital Medical University, Southern Medical University, Hebei Medical University and Renmin University of China, among others. Topics ranged from graph statistics and network modelling to the gut microbiome, drug-response prediction and molecular structure analysis, showing mathematical and computational methods at work across biomedical research.',
      } },
      { img: media.himisGroup, caption: { zh: '与会人员合影', en: 'Workshop participants' } },
      { p: {
        zh: '研讨会围绕图统计学和网络建模展开，北京雁栖湖应用数学研究院副院长、研究员邬荣领以图统计学为切入点，介绍了如何分析具有非欧几里得结构的数据。其他报告围绕肠道微生态与菌群干预、药物反应预测、基因组与 RNA 建模及蛋白质结构分析等议题，介绍了网络建模、生成模型和深度学习等方法在生物医学研究中的应用。',
        en: 'Graph statistics and network modelling ran through the programme. Rongling Wu, vice president and professor at BIMSA, used graph statistics as an entry point to show how data with non-Euclidean structure can be analysed. Other talks covered the gut microbiome and microbial interventions, drug-response prediction, genome and RNA modelling and protein structure analysis, presenting network models, generative models and deep learning in biomedical research.',
      } },
      { img: media.himisWu, caption: { zh: '邬荣领教授作学术报告', en: 'Professor Rongling Wu giving his talk' } },
      { p: {
        zh: '如何从具体的生物医学问题出发建立模型，从数据中提出可检验的假设，并结合实验加以验证，是贯穿本次研讨会的议题。会议为数学、统计学与生物医学领域的研究人员交流研究方法、探索合作方向提供了平台。',
        en: 'A question shared by the whole workshop was how to start from a concrete biomedical problem, build a model, draw testable hypotheses from data and check them against experiments. The meeting gave researchers in mathematics, statistics and biomedicine a place to compare methods and look for collaborations.',
      } },
    ],
  },
  {
    slug: 'qianhai-lecture-2026',
    date: '2026-11-12',
    title: {
      zh: '前海医学学术讲堂第七讲聚焦图医学与肠道微生态',
      en: 'Seventh Qianhai Medical Lecture on graph medicine and the gut microbiome',
    },
    summary: {
      zh: '邬荣领以《图医学：一个复杂疾病机制解析的新范式》为题作专题报告。',
      en: 'Rongling Wu spoke on “Graph medicine: a new paradigm for understanding the mechanisms of complex disease”.',
    },
    place: { zh: '深圳，南方医科大学深圳医院', en: 'Shenzhen Hospital of Southern Medical University' },
    cover: media.qianhaiWu,
    blocks: [
      { p: {
        zh: '2026年11月12日，南方医科大学深圳医院举办2026年前海医学学术讲堂第七讲。作为医院建院十周年系列讲座之一，本期讲堂邀请北京雁栖湖应用数学研究院副院长邬荣领教授和首都医科大学附属北京朝阳医院消化内科主任刘心娟教授作专题报告。',
        en: 'On 12 November 2026, Shenzhen Hospital of Southern Medical University held the seventh 2026 Qianhai Medical Lecture, part of the series marking the hospital’s tenth anniversary. The speakers were Professor Rongling Wu, vice president of BIMSA, and Professor Xinjuan Liu, director of gastroenterology at Beijing Chaoyang Hospital, Capital Medical University.',
      } },
      { img: media.qianhaiPoster, caption: { zh: '讲堂海报', en: 'Lecture poster' } },
      { p: {
        zh: '邬荣领教授以《图医学：一个复杂疾病机制解析的新范式》为题，介绍如何运用图模型刻画生物医学数据中各因素之间的联系，为理解复杂疾病的发生发展机制提供新的研究视角。刘心娟教授以《溃疡性结肠炎肠道微生态特征及其意义》为题，围绕溃疡性结肠炎相关的肠道菌群变化展开报告，探讨这些微生态特征对理解疾病的意义。',
        en: 'In “Graph medicine: a new paradigm for understanding the mechanisms of complex disease”, Professor Wu showed how graph models can describe the links between factors in biomedical data, offering a new way to study how complex diseases arise and progress. In “Gut microbiome features of ulcerative colitis and their significance”, Professor Liu discussed changes in the gut flora associated with ulcerative colitis and what they reveal about the disease.',
      } },
      { img: media.qianhaiWu, caption: { zh: '邬荣领教授作学术报告', en: 'Professor Rongling Wu giving his talk' } },
      { p: {
        zh: '本期讲堂将复杂疾病的数学建模与肠道微生态的临床研究纳入同一场学术交流，为数学与医学领域的研究人员探讨如何从临床问题出发开展跨学科研究提供了机会。',
        en: 'By bringing mathematical modelling of complex disease and clinical research on the gut microbiome into one session, the lecture gave mathematicians and physicians a chance to discuss how interdisciplinary research can start from clinical questions.',
      } },
    ],
  },
  {
    slug: 'huairou-bahrenfeld-2026',
    date: '2026-11-03',
    title: {
      zh: 'BIMSA青年科研人员赴德国汉堡参加怀柔—巴伦费尔德科学城学术研讨会',
      en: 'BIMSA early-career researchers join the Huairou–Bahrenfeld Science City symposium in Hamburg',
    },
    summary: {
      zh: '董昂作题为《Graph Statistics》的报告，介绍图统计学中的可解释网络建模理论与算法。',
      en: 'Ang Dong presented interpretable network modelling theory and algorithms from graph statistics.',
    },
    place: { zh: '德国汉堡，马克斯·普朗克物质结构与动力学研究所', en: 'Max Planck Institute for the Structure and Dynamics of Matter, Hamburg' },
    cover: media.hamburgMpsd,
    blocks: [
      { p: {
        zh: '2026年11月3日，首届怀柔—巴伦费尔德科学城学术研讨会在德国汉堡马克斯·普朗克物质结构与动力学研究所（MPSD）开幕。北京雁栖湖应用数学研究院（BIMSA）多位青年科研人员应邀参会。',
        en: 'On 3 November 2026, the first Huairou–Bahrenfeld Science City symposium opened at the Max Planck Institute for the Structure and Dynamics of Matter (MPSD) in Hamburg, Germany. Several early-career researchers from the Beijing Institute of Mathematical Sciences and Applications (BIMSA) took part by invitation.',
      } },
      { img: media.hamburgMpsd, caption: { zh: 'BIMSA 青年科研人员在 MPSD', en: 'BIMSA researchers at MPSD' } },
      { p: {
        zh: '会议以“物质成像与动力学”为主题，围绕如何观测和理解原子、电子与分子的运动及结构变化展开研讨。报告涵盖固体中的超快现象、光与物质相互作用、关联电子体系、生化过程动力学和时间分辨成像等议题，涉及实验观测与理论建模等研究方向。',
        en: 'Under the theme “Imaging and Dynamics of Matter”, the symposium asked how the motion and structural change of atoms, electrons and molecules can be observed and understood. Talks covered ultrafast phenomena in solids, light–matter interaction, correlated electron systems, the dynamics of biochemical processes and time-resolved imaging, spanning both experiment and theory.',
      } },
      { p: {
        zh: 'BIMSA助理研究员董昂作了题为《Graph Statistics——Interpretable Network Modeling Theory and Algorithms for Complex Data》的学术报告，围绕图统计学中的可解释网络建模理论与算法，介绍了如何利用网络描述复杂数据中各要素之间的关系，以及如何从网络结构出发理解数据中的关联。报告从应用数学角度为复杂数据分析提供了研究思路。',
        en: 'Ang Dong, assistant professor at BIMSA, gave the talk “Graph Statistics — Interpretable Network Modeling Theory and Algorithms for Complex Data”. He showed how networks can describe the relations among the elements of complex data and how a network’s structure helps explain the associations in the data, offering an applied-mathematics approach to complex data analysis.',
      } },
      { img: media.hamburgDong, caption: { zh: '董昂作学术报告', en: 'Ang Dong giving his talk' } },
      { p: {
        zh: '本次研讨会由马克斯·普朗克物质结构与动力学研究所和中国科学院物理研究所联合牵头组织，旨在加强北京怀柔科学城与德国汉堡巴伦费尔德科学城的学术联系，推动两地在基础物理和前沿交叉科学领域的科研合作与人才交流。双方计划通过中德两地轮流举办会议，逐步建立常态化交流机制。',
        en: 'The symposium was jointly led by MPSD and the Institute of Physics of the Chinese Academy of Sciences to strengthen ties between Huairou Science City in Beijing and Science City Bahrenfeld in Hamburg, and to promote collaboration and exchange in fundamental physics and frontier interdisciplinary science. The two sides plan to alternate meetings between China and Germany and build a regular exchange.',
      } },
      { p: {
        zh: '除学术报告外，会议还安排了圆桌讨论、开放科学论坛和德国电子同步加速器中心（DESY）参访，为两地科研人员交流实验与理论方法、了解科研设施和探讨合作方向提供了机会。此次参会也为BIMSA青年科研人员与德国同行建立学术联系、开展数学与前沿实验科学的交叉交流拓宽了渠道。',
        en: 'Besides the talks, the programme included a round-table discussion, an open-science forum and a visit to the Deutsches Elektronen-Synchrotron (DESY), giving researchers from both cities a chance to compare experimental and theoretical methods, see research facilities and discuss collaboration. For BIMSA’s early-career researchers, the visit opened new contacts with German colleagues and new ground for exchange between mathematics and frontier experimental science.',
      } },
    ],
  },
]

export const articleHref = (slug: string) => `/news/${slug}/`
