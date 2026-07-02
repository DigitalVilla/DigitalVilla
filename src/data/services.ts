import {
  Code2,
  Smartphone,
  Cloud,
  Boxes,
  GaugeCircle,
  Workflow,
} from 'lucide-react'
import type { Service, Technology, Metric } from '@/types'

export const services: Service[] = [
  {
    id: 'web',
    title: 'Web Engineering',
    description:
      'Production-grade web applications with type-safe React, server rendering, and design systems that scale from MVP to enterprise.',
    icon: Code2,
    capabilities: [
      'React & Next.js',
      'TypeScript end-to-end',
      'Design systems',
      'Accessibility (WCAG)',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description:
      'Cross-platform mobile apps with React Native — one codebase, native feel, shipped to both App Store and Play Store.',
    icon: Smartphone,
    capabilities: [
      'React Native',
      'Offline-first',
      'Push & deep links',
      'Store deployment',
    ],
  },
  {
    id: 'serverless',
    title: 'Serverless & Cloud',
    description:
      'Event-driven, auto-scaling backends on AWS. Pay for what you use, scale to zero, and sleep through your launch day.',
    icon: Cloud,
    capabilities: [
      'AWS Lambda & API Gateway',
      'DynamoDB & S3',
      'Infrastructure as code',
      'Cost optimization',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Platforms',
    description:
      'Monorepos, micro-services, and internal tooling that turn a tangle of repos into a calm, observable platform.',
    icon: Boxes,
    capabilities: [
      'Monorepo strategy',
      'Micro-services',
      'CLI & developer tooling',
      'CI/CD pipelines',
    ],
  },
  {
    id: 'performance',
    title: 'Performance & SEO',
    description:
      'Lighthouse-obsessed engineering. Core Web Vitals, structured data, and sub-second loads that rank and convert.',
    icon: GaugeCircle,
    capabilities: [
      'Core Web Vitals',
      'Structured data',
      'Edge caching',
      'Bundle budgets',
    ],
  },
  {
    id: 'consulting',
    title: 'Fractional Engineering',
    description:
      'Embedded senior leadership — process, mentorship, and architecture reviews that lift your whole team, not just the codebase.',
    icon: Workflow,
    capabilities: [
      'Tech strategy',
      'Code & architecture review',
      'Team mentorship',
      'Process & DevEx',
    ],
  },
]

export const technologies: Technology[] = [
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue', category: 'Frontend' },
  { name: 'Tailwind', category: 'Frontend' },
  { name: 'Styled Components', category: 'Frontend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'AWS Lambda', category: 'Cloud & DevOps' },
  { name: 'Amazon S3', category: 'Cloud & DevOps' },
  { name: 'Serverless', category: 'Cloud & DevOps' },
  { name: 'Docker', category: 'Cloud & DevOps' },
  { name: 'CI/CD', category: 'Cloud & DevOps' },
  { name: 'DynamoDB', category: 'Data' },
  { name: 'PostgreSQL', category: 'Data' },
  { name: 'MongoDB', category: 'Data' },
  { name: 'Firebase', category: 'Data' },
  { name: 'Jest', category: 'Testing' },
  { name: 'Cypress', category: 'Testing' },
  { name: 'Selenium', category: 'Testing' },
]

export const metrics: Metric[] = [
  { label: 'Years of full-stack engineering', value: 10, suffix: '+' },
  { label: 'Fortune 500 & global brands shipped for', value: 5, suffix: '+' },
  { label: 'Hosting cost cut on AWS serverless', value: 80, suffix: '%' },
  { label: 'Server traffic reduced via caching', value: 75, suffix: '%' },
]
