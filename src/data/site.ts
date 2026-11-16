/**
 * Site-wide settings. Non-developers: this is the file to edit for contact
 * details, filing numbers and analytics. Leave a field as `null` to hide it.
 */
export const site = {
  url: 'https://topostat.cn',
  founded: 2025,

  hostInstitution: {
    zh: '北京雁栖湖应用数学研究院',
    en: 'Beijing Institute of Mathematical Sciences and Applications (BIMSA)',
    short: 'BIMSA',
    url: 'https://www.bimsa.cn/',
  },
  partnerInstitution: {
    zh: '中国人民大学数学学院',
    en: 'School of Mathematics, Renmin University of China',
  },

  contact: {
    // TODO(lab): provide an official public mailbox and phone number.
    email: null as string | null,
    phone: null as string | null,
    locations: [
      {
        name: { zh: '复杂系统拓扑统计理论及应用北京市重点实验室', en: 'Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems' },
        tag: { zh: '实验室地址 · BIMSA', en: 'LABORATORY · BIMSA' },
        address: { zh: '北京市怀柔区怀北镇河防口村544号', en: 'No. 544, Hefangkou Village, Huaibei Town, Huairou District, Beijing' },
        mapQuery: '北京雁栖湖应用数学研究院',
      },
      {
        name: { zh: '中国人民大学', en: 'Renmin University of China' },
        tag: { zh: '联合共建单位', en: 'CO-BUILDING PARTNER' },
        address: { zh: '北京市海淀区中关村大街59号', en: 'No. 59 Zhongguancun Street, Haidian District, Beijing' },
        mapQuery: '中国人民大学',
      },
    ],
  },

  /** ICP filing number, e.g. '京ICP备2025000000号-1'. Shown in the footer when set. */
  icp: null as string | null,
  /** Public security filing, e.g. { code: '11011602000000', text: '京公网安备11011602000000号' }. */
  policeFiling: null as { code: string; text: string } | null,

  /** Analytics. Set one id to enable. */
  analytics: {
    baiduTongjiId: null as string | null,
  },
  /** Third-party page-view counter in the footer (busuanzi). */
  visitCounter: true,

  /** Set to true once recruitment details in src/data/join.ts are confirmed by the lab. */
  showJoinPage: false,
}
