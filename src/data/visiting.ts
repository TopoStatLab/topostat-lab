/**
 * Visiting scholars and students (访问学者), from the lab's member list
 * (2026-11) merged with the list sent on 2026-11-21; duplicates removed.
 * `note` is their home institution or where they are now, as given by the lab.
 * Text is in Chinese on both language versions.
 */
export type Visiting = { name: string; note?: string }

export const visitingNow: Visiting[] = [
  { name: '罗成', note: '复旦大学博士生' },
  { name: '边洋洋', note: '北京林业大学博士生' },
  { name: '法昌健', note: '北京林业大学博士生' },
  { name: '郭佳泽', note: '北京林业大学博士生' },
  { name: '韩园园', note: '大连理工大学博士生' },
  { name: '李穗', note: '大连理工大学博士生' },
  { name: '王方圆', note: 'Imperial College London 硕士' },
  { name: '黄祖恒', note: '纽约大学硕士' },
  { name: '周馨宇', note: '大连理工大学硕士' },
  { name: 'Mahsa Lotfivarmazani', note: 'Razi University 硕士' },
  { name: '唐宇轩', note: '四川大学本科生' },
  { name: '李伯涵', note: '威斯康星大学本科生' },
]

export const visitingPast: Visiting[] = [
  { name: '崔跃华', note: '美国密歇根州立大学教授' },
  { name: '张莉', note: '加利福尼亚大学旧金山分校' },
  { name: '汪作蘅', note: '耶鲁大学' },
  { name: '梁胡义乐', note: '内蒙古师范大学副教授' },
  { name: '冯莉', note: '中国水产科学研究院渔业工程研究所' },
  { name: '曹达啟', note: '北京建筑大学' },
  { name: '赵国淼', note: '中粮营养健康研究院生物技术中心' },
  { name: '李佳颐', note: '首都医科大学附属北京朝阳医院' },
  { name: '姜立波', note: '山东理工大学' },
  { name: '张苗苗', note: '中国林业科学研究院' },
  { name: '王玉', note: '现河套数学与交叉学科研究院助理教授' },
  { name: '吴双', note: '现 BIMSA 助理研究员' },
  { name: '杨登程', note: '现 BIMSA 助理研究员' },
  { name: '桑蒙蒙', note: '现南通大学讲师' },
  { name: '车金灿', note: '现河北医科大学讲师' },
  { name: '高天辰', note: '现北京大学博士后' },
  { name: '龚慧莹', note: '现 BIMSA 博士后' },
  { name: '王宇', note: '现 BIMSA–中国人民大学联培博士生' },
  { name: '罗鑫蕊', note: '现 BIMSA–北京科技大学联培博士生' },
  { name: '危学达', note: '现 BIMSA–中国人民大学联培博士生' },
  { name: '马帅康', note: '现 BIMSA–北京科技大学联培博士生' },
  { name: '潘文祺', note: '现 BIMSA–北京科技大学联培博士生' },
  { name: '杨文杰', note: '现 BIMSA–北京科技大学联培博士生' },
  { name: '彭叶葳', note: '哈尔滨工业大学博士生' },
  { name: '尹嘉楠', note: '现天津大学博士生' },
  { name: '谢栋博', note: '中国林业科学研究院博士生' },
  { name: '董智斌', note: '国防科技大学博士生' },
  { name: '李辰', note: '中国医学科学院博士生' },
  { name: '何天龙', note: '中国医学科学院博士生' },
  { name: '许智翔', note: '大连理工大学硕士生' },
  { name: '徐潇萌', note: '牛津大学硕士' },
  { name: '管嘉颉', note: '江苏师范大学硕士' },
  { name: '林文奎', note: '大连理工大学硕士' },
  { name: '范旻豪', note: '南开大学本科生' },
  { name: '刘芝华', note: '中南财经政法大学本科生' },
]
