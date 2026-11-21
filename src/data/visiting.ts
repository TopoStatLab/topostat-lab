/**
 * Past visiting scholars (往届访问学者) — the only people shown on the visitors
 * page, as confirmed by the lab (2026-11-21). `note` is where they are now or
 * their home institution, as given by the lab. Text is Chinese on both versions.
 */
export type Visiting = { id: string; name: string; note: string; photo?: string }
const P = (id: string) => `/people/portraits/${id}.webp`

export const visiting: Visiting[] = [
  { id: 'v-cui-yuehua', name: '崔跃华', note: '美国密歇根州立大学教授', photo: P('cui-yuehua') },
  { id: 'v-liang-huyile', name: '梁胡义乐', note: '内蒙古师范大学副教授' },
  { id: 'v-wang-yu-postdoc', name: '王玉', note: '现河套数学与交叉学科研究院助理教授' },
  { id: 'v-wu-shuang', name: '吴双', note: '现 BIMSA 助理研究员', photo: P('wu-shuang') },
  { id: 'v-yang-dengcheng', name: '杨登程', note: '现 BIMSA 助理研究员', photo: P('yang-dengcheng') },
  { id: 'v-sang-mengmeng', name: '桑蒙蒙', note: '现南通大学讲师' },
  { id: 'v-che-jincan', name: '车金灿', note: '现河北医科大学讲师' },
  { id: 'v-gao-tianchen', name: '高天辰', note: '现北京大学博士后' },
  { id: 'v-gong-huiying', name: '龚慧莹', note: '现 BIMSA 博士后', photo: P('gong-huiying') },
  { id: 'v-wang-yu', name: '王宇', note: '现 BIMSA–中国人民大学联培博士生', photo: P('wang-yu-phd') },
  { id: 'v-luo-xinrui', name: '罗鑫蕊', note: '现 BIMSA–北京科技大学联培博士生' },
  { id: 'v-wei-xueda', name: '危学达', note: '现 BIMSA–中国人民大学联培博士生' },
  { id: 'v-peng-yewei', name: '彭叶葳', note: '哈尔滨工业大学博士生' },
  { id: 'v-ma-shuaikang', name: '马帅康', note: '现 BIMSA–北京科技大学联培博士生' },
  { id: 'v-pan-wenqi', name: '潘文祺', note: '现 BIMSA–北京科技大学联培博士生' },
  { id: 'v-yang-wenjie', name: '杨文杰', note: '现 BIMSA–北京科技大学联培博士生' },
  { id: 'v-yin-jianan', name: '尹嘉楠', note: '现天津大学博士生' },
  { id: 'v-xie-dongbo', name: '谢栋博', note: '中国林业科学研究院博士生' },
  { id: 'v-dong-zhibin', name: '董智斌', note: '国防科技大学博士生' },
  { id: 'v-li-chen', name: '李辰', note: '中国医学科学院博士研究生' },
  { id: 'v-he-tianlong', name: '何天龙', note: '中国医学科学院博士研究生' },
  { id: 'v-xu-zhixiang', name: '许智翔', note: '大连理工大学硕士生' },
  { id: 'v-xu-xiaomeng', name: '徐潇萌', note: '牛津大学硕士' },
  { id: 'v-guan-jiajie', name: '管嘉颉', note: '江苏师范大学硕士' },
  { id: 'v-lin-wenkui', name: '林文奎', note: '大连理工大学硕士' },
  { id: 'v-fan-minhao', name: '范旻豪', note: '南开大学本科生' },
  { id: 'v-liu-zhihua', name: '刘芝华', note: '中南财经政法大学本科生' },
]
