import {
  Target,
  Eye,
  Sparkles,
  Gauge,
  HeartHandshake,
  Globe2,
} from 'lucide-react'
import type { Value } from '@/types'

export const mission =
  'Help ambitious teams grow by taking the technology off their plate — so they can focus on what they do best while we engineer the rest.'

export const vision =
  'A world where great ideas are never bottlenecked by their software. Where shipping is calm, infrastructure is invisible, and quality is the default.'

export const values: Value[] = [
  {
    title: 'Craft over output',
    description:
      'We measure ourselves on what we ship being correct, fast, and maintainable — not on lines of code or hours logged.',
    icon: Sparkles,
  },
  {
    title: 'Performance is a feature',
    description:
      'Speed and accessibility are not afterthoughts. We hold ourselves to Lighthouse 95+ and WCAG compliance on every build.',
    icon: Gauge,
  },
  {
    title: 'Partnership, not tickets',
    description:
      'We embed with your team, challenge assumptions, and own outcomes. Your success metric is our success metric.',
    icon: HeartHandshake,
  },
  {
    title: 'Remote-first, results-first',
    description:
      'Distributed by design. We communicate clearly, document obsessively, and deliver wherever the best work happens.',
    icon: Globe2,
  },
]

export const pillars = [
  {
    icon: Target,
    label: 'Mission',
    title: 'Take technology off your plate',
    body: mission,
  },
  {
    icon: Eye,
    label: 'Vision',
    title: 'Software that never gets in the way',
    body: vision,
  },
]

export const story = [
  {
    year: '2018',
    title: 'A studio is founded',
    body: 'Digital Villa begins in Calgary as a full-stack software shop for web and mobile — built on the belief that senior engineering should be accessible to ambitious teams of any size.',
  },
  {
    year: '2020',
    title: 'Going serverless with Quantifi',
    body: 'Partnering with fintech Quantifi, we rebuild products as AWS serverless applications — cutting hosting costs 80% and server traffic 75% while shipping continuously.',
  },
  {
    year: '2021',
    title: 'Fortune 500 scale at lululemon',
    body: 'We redesign lululemon’s shop sign-in and migrate authentication from Java to Okta — real-time, cross-device identity for a global retail brand.',
  },
  {
    year: '2023',
    title: 'Enterprise logistics with CPKC & Panasonic',
    body: 'Real-time train tracking and a carbon calculator for CPKC’s rail network, plus pixel-perfect UI work for Panasonic — engineering at continental scale.',
  },
  {
    year: '2024',
    title: 'Cloud-native telecom with NetLync',
    body: 'We help build NetLync’s Entitlements-as-a-Service® platform — cloud-native eSIM entitlements on AWS for mobile operators worldwide.',
  },
  {
    year: 'Today',
    title: 'A premium engineering partner',
    body: 'Digital Villa pairs senior, remote-first engineering with design and delivery — shipping products that sit comfortably next to the best on the web.',
  },
]

export const whyChooseUs = [
  {
    title: 'Trusted by Fortune 500s',
    body: 'You work directly with senior engineers who have shipped production software for Fortune 500 and global brands — lululemon, Panasonic, and CPKC among them.',
  },
  {
    title: 'Full-stack ownership',
    body: 'From design systems to serverless infrastructure, one team owns the whole stack — no hand-offs, no finger-pointing.',
  },
  {
    title: 'Proven ROI',
    body: 'A track record of measurable impact — 80% lower hosting costs, 75% less server traffic — by modernizing architecture on AWS.',
  },
  {
    title: 'We make teams better',
    body: 'We mentor developers and improve developer experience, leaving your team stronger than we found it.',
  },
]
