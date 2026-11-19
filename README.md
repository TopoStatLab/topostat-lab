# TopoStat Lab Website

复杂系统拓扑统计理论及应用北京市重点实验室官方网站 · https://topostat.cn

Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems

Static site built with [Astro](https://astro.build). Every page is pre-rendered to plain HTML, so search engines (including Baidu) see the full content, and pages load without waiting for JavaScript.

## 快速开始 · Development

```bash
npm ci            # install exact locked versions
npm run dev       # local dev server at http://localhost:4321
npm run build     # build static site into dist/
npm run check:links   # verify all internal links/anchors in dist/
```

Requires Node 22+.

## 更新内容 · Editing content (no React/Astro knowledge needed)

All content lives in `src/data/`. Each file is plain data with Chinese and English side by side (`{ zh: '…', en: '…' }`).

| 要改什么 | 文件 |
|---|---|
| 联系邮箱、电话、地址、ICP/公安备案号、统计代码、是否显示招聘页 | `src/data/site.ts` |
| 组织架构（主任、副主任、助理、成员）与学术委员会 | `src/data/people.ts` |
| 研究方向、应用领域 | `src/data/research.ts` |
| 论文（自动按年份、核心成员优先排序；`lab` 里列出的作者会加粗） | `src/data/publications.ts` |
| 专利 | `src/data/patents.ts` |
| 新闻、学术活动 | `src/data/news.ts` |
| 访学成员（在实验室期间与后续发展） | `src/data/visitors.ts` |
| 招聘信息 | `src/data/join.ts` |

Optional fields (e.g. a member's `title`, `homepage`, `email`) only appear on the site once filled in. Publications automatically show up under "研究进展" on the news page and on the related research direction.

Every push to a pull request is built and link-checked by CI; merging to `main` deploys.

## 结构 · Structure

```
src/
  data/        content (edit these)
  views/       one component per page, shared by zh and en
  pages/       routes: /  /research/  /team/  /publications/  /news/  /contact/  and /en/…
  components/  header, footer, HeroFigure (scroll-driven Figure 1), demo, bibliography, timeline
  lib/persistence.ts   Vietoris–Rips persistent homology (H0/H1) used by the demo
  layouts/Base.astro   <head>: SEO meta, hreflang, Open Graph, schema.org JSON-LD
  styles/      site.css (design system) + fonts.css (self-hosted Inter and STIX Two)
public/        static files: portraits (people/portraits/*.webp), favicon, og-image, robots.txt, CNAME
scripts/       check-links.mjs
```

Pages: `/about/` (介绍、组织架构、学术委员会), `/research/`, `/publications/` (论文、专利), `/news/`, `/events/`, `/visitors/`, `/contact/`.

Routing: Chinese at `/…/`, English at `/en/…/`. The header language switch goes to the same page in the other language. Old `/team.html` and `/team/` URLs redirect to `/about/#organization`.

## 上线前待办 · Before / after launch

**Needs input from the lab**

- [x] Member roster, former members, papers and patents from the BIMSA roster (2026-11)
- [ ] Current positions of former members (only 3 of 17 found publicly) → `now` in `src/data/visitors.ts`
- [ ] Email for 陈天翮; member portraits (most members show their initial)

- [ ] Official contact email and phone → `src/data/site.ts`
- [ ] Approved logo to replace the provisional mark (`src/components/LabMark.astro`, `public/favicon.svg`, `public/og-image.jpg`)
- [ ] Portrait for 崔跃华 (the old photo files were corrupt) → add `public/people/portraits/cui-yuehua.webp` (square, 288×288 px, WebP) and set `photo` in `src/data/people.ts`
- [ ] Member titles, affiliations and homepages → `src/data/people.ts`
- [ ] Recruitment details → `src/data/join.ts`, then set `showJoinPage: true`

**Updating papers from a new roster export**

`src/data/papers-all.json` (every paper, with lab authors marked) and
`src/data/people-names.json` are generated from the BIMSA roster spreadsheet;
`src/data/publications.ts` holds the hand-curated selected papers with summaries.

**Hosting & compliance**

- [ ] GitHub Pages is slow/unreliable from mainland China. Recommended: host `dist/` on a domestic object storage + CDN (e.g. Aliyun OSS / Tencent COS), complete ICP filing (ICP 备案) and public-security filing (公安备案) under the institute, then fill `icp` / `policeFiling` in `src/data/site.ts` so they show in the footer.
- [ ] Submit `https://topostat.cn/sitemap-index.xml` to Baidu 站长平台 and Google Search Console
- [ ] Add analytics: set `analytics.baiduTongjiId` in `src/data/site.ts`

## Sources

Initial facts come from public sources and should be reviewed by the laboratory:
[Beijing Municipal S&T Commission announcement](https://kw.beijing.gov.cn/xwdt/kcyx/xwdtscyqld/202502/t20250214_4010193.html) ·
[BIMSA profile of Rongling Wu](https://www.bimsa.cn/zh-CN/detail/ronglingwu.html) ·
[BIMSA workshop](https://www.bimsa.cn/research_detail/TopStaDatandInt.html) ·
[The Innovation](https://doi.org/10.1016/j.xinn.2026.101267) ·
[Communications Physics](https://doi.org/10.1038/s42005-026-02687-4) ·
[Drug Discovery Today](https://doi.org/10.1016/j.drudis.2026.104733)
