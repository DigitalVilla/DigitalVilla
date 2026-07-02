import {
  Compass,
  Map,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
} from 'lucide-react'
import type { ProcessStep } from '@/types'

export const processSteps: ProcessStep[] = [
  {
    index: 1,
    key: 'discovery',
    title: 'Discovery',
    summary: 'Understand the problem before touching a keyboard.',
    detail:
      'We dig into your business goals, users, and constraints. Through workshops and technical audits we map the real problem — not just the feature request — and align on what success looks like.',
    deliverables: ['Goals & success metrics', 'Technical audit', 'Scope & risk map'],
    icon: Compass,
  },
  {
    index: 2,
    key: 'planning',
    title: 'Planning',
    summary: 'Turn ambition into a sequenced, de-risked roadmap.',
    detail:
      'We define architecture, choose the right stack, and break the work into milestones. You get a clear plan with estimates, dependencies, and the trade-offs spelled out — no surprises.',
    deliverables: ['Architecture plan', 'Milestone roadmap', 'Estimates & trade-offs'],
    icon: Map,
  },
  {
    index: 3,
    key: 'design',
    title: 'Design',
    summary: 'Interfaces that are beautiful and obvious to use.',
    detail:
      'We design a system, not just screens — tokens, components, and flows that stay consistent as the product grows. Accessibility and responsiveness are designed in from the first pixel.',
    deliverables: ['Design system', 'Interactive prototypes', 'Accessibility spec'],
    icon: PenTool,
  },
  {
    index: 4,
    key: 'development',
    title: 'Development',
    summary: 'Type-safe, tested code shipped in tight loops.',
    detail:
      'We build in small, reviewable increments with strict TypeScript, automated tests, and continuous integration. You see progress every week in a real, running environment.',
    deliverables: ['Production code', 'Automated tests', 'Weekly demos'],
    icon: Code2,
  },
  {
    index: 5,
    key: 'qa',
    title: 'Quality Assurance',
    summary: 'Prove it works — across devices, edge cases, and load.',
    detail:
      'Cross-browser and cross-device testing, performance budgets, accessibility audits, and security checks. We catch issues before your users ever could.',
    deliverables: ['Test coverage', 'Lighthouse & a11y audits', 'Security review'],
    icon: ShieldCheck,
  },
  {
    index: 6,
    key: 'deployment',
    title: 'Deployment',
    summary: 'Ship confidently with automated, repeatable releases.',
    detail:
      'Infrastructure as code, CI/CD pipelines, and zero-downtime deploys to scalable serverless infrastructure. Releasing becomes a non-event you can do any day of the week.',
    deliverables: ['CI/CD pipeline', 'Infrastructure as code', 'Zero-downtime release'],
    icon: Rocket,
  },
  {
    index: 7,
    key: 'support',
    title: 'Support',
    summary: 'We stay on, so your product keeps getting better.',
    detail:
      'Monitoring, observability, and a responsive partnership for the long run. We watch the metrics, fix fast, and keep iterating on what moves your business forward.',
    deliverables: ['Monitoring & alerts', 'SLA & response', 'Continuous iteration'],
    icon: LifeBuoy,
  },
]
