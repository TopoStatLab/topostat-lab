/**
 * Visiting scholars and former members (访学). The point of this page is to
 * show what people did at the lab and where they went afterwards.
 *
 * TODO(lab): fill in from the lab's list. Entries render newest first.
 *
 * Example entry:
 * {
 *   name: { zh: '张三', en: 'San Zhang' },
 *   period: '2025.01–2025.06',
 *   start: '2025-01',
 *   role: { zh: '访问学生', en: 'Visiting student' },
 *   atLab: { zh: '参与 idopNetwork 代谢网络研究', en: 'Worked on idopNetwork metabolic networks' },
 *   now: { zh: '南开大学博士研究生', en: 'PhD student, Nankai University' },
 *   photo: '/people/portraits/zhang-san.webp',   // optional
 * },
 */
import type { L10n } from '../i18n'

export type Visitor = {
  name: L10n
  period: string
  /** YYYY-MM, used for sorting */
  start: string
  role: L10n
  atLab?: L10n
  now?: L10n
  photo?: string
  homepage?: string
}

export const visitors: Visitor[] = []

export const sortedVisitors = [...visitors].sort((a, b) => b.start.localeCompare(a.start))
