/**
 * 人物专访: interviews with laboratory people, published at /interviews/<slug>/.
 * Same structure as news articles (see articles.ts): title, date, summary,
 * place, optional cover photo, body blocks, and `source` when the piece is
 * condensed from another outlet's report (credit and link to the original).
 * Add an entry here to publish an interview; the column page lists them newest first.
 */
import type { Article } from './articles'

export const interviews: Article[] = [
  {
    slug: 'yau-riemann-ai-2026',
    date: '2026-11-22',
    title: {
      zh: '丘成桐谈 AI 证明黎曼猜想：数学进入新纪元',
      en: 'Shing-Tung Yau on the AI-assisted proof of the Riemann Hypothesis: a new era for mathematics',
    },
    summary: {
      zh: '黎曼诞辰 200 周年学术研讨会期间，丘成桐与徐文强、James Maynard 接受媒体线上采访，谈机器证明的可信度、人类如何理解它，以及这对中国年轻数学家意味着什么。',
      en: 'During the Riemann bicentenary symposium, Shing-Tung Yau, Wenqiang Xu and James Maynard spoke to the press about how far a machine proof can be trusted, how humans will come to understand it, and what it means for young mathematicians in China.',
    },
    place: { zh: '线上记者会，黎曼诞辰 200 周年学术研讨会期间（深圳）', en: 'Online press conference during the Riemann bicentenary symposium, Shenzhen' },
    source: {
      name: { zh: '《返朴》', en: 'Fanpu' },
      authors: { zh: '潘颖、周舒义', en: 'Pan Ying and Zhou Shuyi' },
    },
    blocks: [
      { p: {
        zh: '2026 年 11 月 20 日，Anthropic 数学家 Levent Alpöge 公布了他与 AI 模型 Claude 合作完成的黎曼猜想证明，形式化为约 1700 万行 Lean 代码。同一天，“黎曼诞辰 200 周年学术研讨会”在深圳开幕。21 日晚，丘成桐携徐文强副教授、2022 年菲尔兹奖得主 James Maynard 在线接受了《返朴》等媒体采访。记者会结束后不久，Lean 与 Mathlib 社区发表联合声明，确认这份形式化证明正确。',
        en: 'On 20 November 2026, Anthropic mathematician Levent Alpöge released a proof of the Riemann Hypothesis made with the AI model Claude, formalized as about 17 million lines of Lean. The same day, the Riemann bicentenary symposium opened in Shenzhen. On the evening of the 21st, Shing-Tung Yau, together with associate professor Wenqiang Xu and 2022 Fields Medalist James Maynard, took questions online from Fanpu and other media. Shortly after the press conference, the Lean and Mathlib communities issued a joint statement confirming that the formal proof is correct.',
      } },
      { p: {
        zh: '谈到第一反应，丘成桐认为这是数论上的伟大贡献，在纪念黎曼的会议开幕当天传来，是好意头，“表示数学进了一个新的纪元”。他说，过去梦寐以求的问题得到解决之后，更要紧的是数学下一步往哪里走，带头的人要给出新的方向；他希望中国的年轻数学家借这个机会发展出自己的理论。',
        en: 'Asked for his first reaction, Yau called it a great contribution to number theory and a good omen, arriving on the opening day of a meeting in Riemann’s honour: it marks, he said, a new era for mathematics. Once long-dreamed-of problems are solved, he argued, the pressing question is where mathematics goes next, and those who lead must point the way; he hopes young Chinese mathematicians will use the moment to build theories of their own.',
      } },
      { p: {
        zh: '对于证明是否可信，丘成桐指出，这份证明已经过机器逐步检查，并非没有验证。他比较说，物理、生物、化学的结论往往在远未百分之百确认时就被接受，而数学把推理拆成一个个小命题交给机器检验，要求严格得多。他的看法是仍需继续验证，但不必过度怀疑。',
        en: 'On whether the proof can be trusted, Yau noted that it has already been checked step by step by machine. Conclusions in physics, biology and chemistry, he observed, are often accepted long before they are fully confirmed, whereas a machine check breaks the reasoning into small propositions and is far more demanding. Verification should continue, he said, but heavy scepticism is not warranted.',
      } },
      { p: {
        zh: '这次证明的自然语言草稿长达 25 万页。丘成桐并不认为这是障碍：科学史上许多重大发现在被理解之前就已成立，宇称不守恒问题至今仍未完全弄清。他估计五年之内，人们就能理解这份证明的精神，并写出人类读得懂的版本，因为 AI 用到的方法本是人类想过的方法。他还以自己当年研究卡拉比猜想、花三年寻找反例的经历说明：先知道结论对不对，方向就找对了。',
        en: 'The natural-language draft of the proof runs to 250,000 pages. Yau does not see this as an obstacle: many great discoveries held true long before they were understood, and why parity is violated in the weak interaction is still not fully explained. He expects that within five years the ideas of the proof will be understood and a human-readable version written, because the methods the AI used are ones humans had already considered. He recalled spending three years looking for a counterexample to the Calabi conjecture: knowing first whether a statement is true sets the right direction.',
      } },
      { p: {
        zh: '在丘成桐看来，AI 把数学研究的顺序倒了过来：先找到答案，再去理解和证明，这更接近物理学家和生物学家的做法。他认为机器解题的能力强于提问的能力，而提出重要的问题最需要创造力。关于成果归属，他认为主导问题、指挥 AI 推进研究的人应获得主要的功劳。',
        en: 'In Yau’s view, AI reverses the order of mathematical work: first find the answer, then understand and prove it, much as physicists and biologists do. Machines, he said, are better at solving problems than at asking them, and asking important questions is where creativity matters most. On credit, he holds that the person who drives the problem and directs the AI deserves the main share.',
      } },
      { p: {
        zh: '他还表示，科学转型期往往是年轻人的机会，这对中国年轻学者是很大的激励，应加大对基础科学的投入。同时，他强调重要的 AI 工具应当公平开放地供所有学者使用，不公平的竞争才是真正需要反对的问题。',
        en: 'Periods of scientific change, he added, tend to favour the young, which should encourage young Chinese researchers, and investment in basic science should grow. He stressed that major AI tools should be open and fair to all scholars: unfair competition is the real problem to oppose.',
      } },
      { p: {
        zh: '采访中，徐文强认为数学家应更勇敢地利用 AI 工具攀登一座座“山峰”；Maynard 则强调，AI 的成功建立在人类数学家数十年的积累之上，在新的时代里真正重要的是理解，他相信数学将迎来一个黄金时代。',
        en: 'In the same interview, Wenqiang Xu urged mathematicians to use AI tools boldly to climb one peak after another, while Maynard stressed that the AI’s success rests on decades of work by human mathematicians, that understanding is what matters in the new era, and that mathematics is entering a golden age.',
      } },
    ],
  },
]
