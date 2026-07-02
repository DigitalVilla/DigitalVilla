import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'cpkc',
    name: 'CPKC Rail',
    client: 'CPKC · Rail & Logistics',
    tagline:
      'Real-time train logistics and carbon tracking for North America’s rail network.',
    year: '2023',
    category: 'Enterprise Logistics',
    image: 'https://assets.digitalvilla.ca/projects/cpkc.png',
    accent: 'oklch(0.62 0.16 155)',
    featured: true,
    problem:
      'CPKC runs one of North America’s largest rail networks. Operations teams needed real-time visibility into where trains are and how they’re scheduled — and the business needed a credible, data-driven way to measure and reduce the carbon footprint of rail freight.',
    solution:
      'We built CPKC’s Train Management System for real-time tracking of train locations, schedules, and timetables, alongside a Carbon Calculator — a web tool that quantifies emissions and makes the case for sustainable rail operations.',
    architecture:
      'Real-time data pipelines feeding a responsive React interface, backed by scalable, cloud-native services on AWS engineered for high-throughput logistics data.',
    impact:
      'Sharper logistics decisions from live network visibility, and a data-driven sustainability story that positions rail as the greener way to move freight across the continent.',
    outcomes: [
      { label: 'Network visibility', value: 'Real-time tracking' },
      { label: 'Sustainability', value: 'Carbon calculator' },
      { label: 'Scale', value: 'Enterprise logistics' },
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'AWS', 'Real-time Data'],
  },
  {
    slug: 'lululemon',
    name: 'lululemon',
    client: 'lululemon · Global Retail',
    tagline: 'A faster, more secure sign-in for a Fortune 500 retail brand.',
    year: '2022',
    category: 'Retail · Identity',
    image: 'https://assets.digitalvilla.ca/projects/lululemon.png',
    accent: 'oklch(0.62 0.21 25)',
    featured: true,
    problem:
      'lululemon’s shop authentication ran on a legacy Java stack that was difficult to scale and secure across the web and the growing set of connected devices customers shop from.',
    solution:
      'We redesigned and optimized the shop login flow with modern motion and faster frontend performance, introduced an Async Observer Pattern for seamless iFrame authentication with real-time synchronization across devices, and migrated identity from Java to the Okta API.',
    architecture:
      'An event-driven Async Observer Pattern enabling secure iFrame authentication and real-time cross-device sync, with Okta-backed identity replacing the legacy Java system.',
    impact:
      'A smoother, more engaging sign-in with stronger security and streamlined access management — at the scale a global retailer demands.',
    outcomes: [
      { label: 'Identity platform', value: 'Java → Okta' },
      { label: 'Sync', value: 'Real-time, cross-device' },
      { label: 'Login', value: 'Redesigned flow' },
    ],
    technologies: ['TypeScript', 'React', 'Okta', 'Styled Components'],
  },
  {
    slug: 'netlync',
    name: 'NetLync',
    client: 'NetLync · Telecom',
    tagline: 'Cloud-native eSIM entitlements for mobile operators worldwide.',
    year: '2024',
    category: 'Telecom Platform',
    image: 'https://assets.digitalvilla.ca/projects/netlync.png',
    url: 'https://netlync.com',
    accent: 'oklch(0.64 0.17 245)',
    featured: true,
    problem:
      'Mobile operators need to manage device entitlements — eSIM transfer, VoLTE, WiFi calling, 5G, roaming, and smartwatch activation — across both iOS and Android, without ripping out the entitlement servers they already run.',
    solution:
      'We help build NetLync’s Entitlements-as-a-Service® platform: a single integration that supports both iOS and Android, Parallel Entitlements™ to run alongside existing servers, a developer portal with APIs, and an AI-assisted KPI dashboard.',
    architecture:
      'A cloud-native, ISO/IEC 27001-certified platform on AWS exposing developer-friendly APIs and real-time entitlement flows across carriers and device ecosystems.',
    impact:
      'Operators go live in weeks instead of months, with unified cross-platform support and pay-as-you-grow economics.',
    outcomes: [
      { label: 'Integration', value: 'iOS + Android, one API' },
      { label: 'Time to launch', value: 'Weeks, not months' },
      { label: 'Security', value: 'ISO/IEC 27001' },
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'AWS', 'GraphQL'],
  },
  {
    slug: 'quantifi',
    name: 'Quantifi',
    client: 'Quantifi · Fintech',
    tagline: 'A credit-risk platform rebuilt for speed and scale.',
    year: '2021',
    category: 'Fintech Platform',
    image: 'https://assets.digitalvilla.ca/projects/quantifi.jpg',
    url: 'https://quantifi.ca',
    accent: 'oklch(0.68 0.17 255)',
    featured: true,
    problem:
      'Quantifi helps lenders assess and manage consumer credit risk, but its products were spread across aging, hard-to-deploy stacks and its marketing site lived in Contentful. Iteration was slow and infrastructure was expensive.',
    solution:
      'We migrated the marketing site off Contentful into a purpose-built React CRM the team fully owns, rebuilt flagship products as AWS serverless applications, and introduced custom caching APIs and a shared React component library.',
    architecture:
      'Type-safe React front ends backed by AWS Lambda, with custom caching APIs, DynamoDB for low-latency reads, and infrastructure defined as code so every environment is reproducible.',
    impact:
      'Cut hosting costs by 80% on serverless, reduced server traffic by 75% through custom caching, and gave the team continuous, low-risk releases.',
    outcomes: [
      { label: 'Hosting cost', value: '−80% on AWS serverless' },
      { label: 'Server traffic', value: '−75% via caching' },
      { label: 'Release cadence', value: 'Continuous' },
    ],
    technologies: ['TypeScript', 'React', 'AWS Lambda', 'DynamoDB', 'Node.js'],
  },
  {
    slug: 'quantifi-app',
    name: 'Quantifi App',
    client: 'Quantifi · Fintech',
    tagline: 'The core product, re-architected as living micro-services.',
    year: '2022',
    category: 'Product Re-platform',
    image: 'https://assets.digitalvilla.ca/projects/worksheet.png',
    url: 'https://signup.quantifi.ca',
    accent: 'oklch(0.7 0.15 200)',
    problem:
      "Quantifi's core business application had grown into a monolith that was slow to change and inconsistent to use. Customers needed a faster, more reliable experience and the team needed room to move.",
    solution:
      'We re-platformed the application onto a modern micro-services architecture and designed a brand-new component library from scratch — with built-in accessibility, unit testing, and TypeScript — giving every screen a consistent, responsive foundation.',
    architecture:
      'Composable micro-services behind a unified API, a design-token-driven component library, and a responsive UI engineered for speed and clarity.',
    impact:
      'Customers now work faster on a beautiful, responsive interface, while the engineering team ships features independently without stepping on each other.',
    outcomes: [
      { label: 'Architecture', value: 'Micro-services' },
      { label: 'UI', value: 'Accessible design system' },
      { label: 'Experience', value: 'Fully responsive' },
    ],
    technologies: ['TypeScript', 'React', 'Design Systems', 'Jest', 'Node.js'],
  },
  {
    slug: 'grey-eagle',
    name: 'Grey Eagle Resort & Casino',
    client: 'Grey Eagle · Hospitality',
    tagline: "A flagship destination's website, rebuilt for performance.",
    year: '2020',
    category: 'Marketing Website',
    image: 'https://assets.digitalvilla.ca/projects/greyeagle.png',
    url: 'https://greyeagleresortandcasino.ca/',
    accent: 'oklch(0.72 0.15 70)',
    featured: false,
    problem:
      "Calgary's most famous casino and resort needed a modern, attractive website that loaded fast and was accessible to every guest — across every device.",
    solution:
      'We delivered a refreshed, high-performance site with accessible interactive carousels, map integration, and a timely COVID information system that kept guests informed.',
    architecture:
      'Performance-budgeted front end with lazy-loaded media, accessible carousel components, embedded mapping, and a lightweight content popup system.',
    impact:
      'A faster, more accessible flagship presence that reflects the resort’s premium brand.',
    outcomes: [
      { label: 'Focus', value: 'Performance & a11y' },
      { label: 'Features', value: 'Carousels · Maps' },
      { label: 'Response', value: 'Live COVID updates' },
    ],
    technologies: ['JavaScript', 'Accessibility', 'Web Performance', 'Maps API'],
  },
  {
    slug: 'justbeer',
    name: 'JustBeer',
    client: 'JustBeer · Consumer App',
    tagline: 'The app for beer lovers around the world.',
    year: '2021',
    category: 'Consumer Platform',
    image: 'https://assets.digitalvilla.ca/projects/justbeer.jpg',
    url: 'https://justbeerapp.com/guides',
    accent: 'oklch(0.78 0.14 90)',
    problem:
      'JustBeer wanted to help people discover new beers and connect with locals — while ranking well in search and serving content tailored to where each user is.',
    solution:
      'We built location-aware personalization, advanced SEO with JSON-LD structured data, and a Google Ads–ready content platform engineered for discoverability.',
    architecture:
      'Content platform with location-based personalization, structured data (JSON-LD) for rich results, and SEO/accessibility baked into every page.',
    impact:
      'Beer lovers get relevant, local recommendations and the brand earns visibility in organic search.',
    outcomes: [
      { label: 'Personalization', value: 'Location-aware' },
      { label: 'SEO', value: 'JSON-LD rich results' },
      { label: 'Monetization', value: 'Google Ads ready' },
    ],
    technologies: ['JavaScript', 'SEO', 'JSON-LD', 'Accessibility'],
  },
  {
    slug: 'winsight',
    name: 'Winsight Media',
    client: 'Winsight · Media',
    tagline: 'A people-first rebrand across a portfolio of media brands.',
    year: '2020',
    category: 'Brand & Web',
    image: 'https://assets.digitalvilla.ca/projects/winsight.jpg',
    url: 'https://winsightmedia.com/',
    accent: 'oklch(0.68 0.16 25)',
    problem:
      'After redesigning each of Winsight’s individual brands, the parent company’s main site needed to communicate that people come before being a multi-million-dollar food-industry leader.',
    solution:
      'We upgraded the flagship website to lead with the human story — emphasizing the people-centred culture while unifying the visual language across the brand portfolio.',
    architecture:
      'A cohesive multi-brand front end with shared components and a narrative-driven content structure.',
    impact:
      'A flagship presence that puts people first and ties the brand family together.',
    outcomes: [
      { label: 'Scope', value: 'Full brand portfolio' },
      { label: 'Message', value: 'People-first' },
      { label: 'System', value: 'Unified design language' },
    ],
    technologies: ['JavaScript', 'Brand Systems', 'CMS', 'Responsive Design'],
  },
  {
    slug: 'tlc',
    name: 'TLC Pricing Tool',
    client: 'TLC · Services',
    tagline: 'An interactive pricing experience that won real trust.',
    year: '2019',
    category: 'Web App',
    image: 'https://assets.digitalvilla.ca/projects/tlc.png',
    url: 'https://tlc.ca/',
    accent: 'oklch(0.7 0.15 320)',
    problem:
      'TLC needed an innovative way to showcase their high-end services and let prospects explore pricing without friction.',
    solution:
      'We built an interactive pricing web app that made their premium offering tangible — so compelling that it earned the trust to build their full website.',
    architecture:
      'A focused, interactive quoting tool with a clean UI and a pricing engine tuned for clarity.',
    impact:
      'The tool resonated so strongly it became the foundation for an ongoing client relationship.',
    outcomes: [
      { label: 'Type', value: 'Interactive pricing' },
      { label: 'Outcome', value: 'Earned full rebuild' },
      { label: 'Focus', value: 'High-end services' },
    ],
    technologies: ['PHP', 'JavaScript', 'UI Engineering'],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
