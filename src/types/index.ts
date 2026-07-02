import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  to: string
}

export interface Metric {
  label: string
  value: number
  suffix?: string
  prefix?: string
  description?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  capabilities: string[]
}

export interface Technology {
  name: string
  category:
    | 'Frontend'
    | 'Backend'
    | 'Cloud & DevOps'
    | 'Mobile'
    | 'Data'
    | 'Testing'
}

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  slug: string
  name: string
  client: string
  tagline: string
  year: string
  category: string
  image: string
  url?: string
  accent: string
  featured?: boolean
  problem: string
  solution: string
  architecture: string
  impact: string
  outcomes: ProjectMetric[]
  technologies: string[]
}

export interface ProcessStep {
  index: number
  key: string
  title: string
  summary: string
  detail: string
  deliverables: string[]
  icon: LucideIcon
}

export interface Value {
  title: string
  description: string
  icon: LucideIcon
}

export type Theme = 'dark' | 'light'
