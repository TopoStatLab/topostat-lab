import type { Lang } from '../i18n'

type T = Record<Lang, string>

export interface Software {
  id: string
  name: string
  kind: T
  summary: T
  authors: { name: T; href?: string }[]
  url: string
  host: string
}

export const software: Software[] = [
  {
    id: 'idopnetwork-app',
    name: 'idopNetwork',
    kind: { zh: '在线分析平台', en: 'Web platform' },
    summary: {
      zh: '高维动态全息互作网络（idopNetwork）的在线分析平台。把实验室的 idopNetwork 模型做成网页应用，无需安装，在浏览器中打开即可使用。',
      en: 'An online platform for idopNetwork, the laboratory’s model of high-dimensional, dynamic, omnidirectional interaction networks. It runs in the browser with nothing to install.',
    },
    authors: [{ name: { zh: '王宇', en: 'Yu Wang' }, href: 'https://www.bimsa.cn/zh-CN/detail/ywang.html' }],
    url: 'https://idopnetworkapp-bimsa-statistics.streamlit.app',
    host: 'idopnetworkapp-bimsa-statistics.streamlit.app',
  },
]
