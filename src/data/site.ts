import type { NavLink } from '@/types'

export const site = {
  name: 'Digital Villa',
  shortName: 'DV',
  domain: 'digitalvilla.ca',
  url: 'https://www.digitalvilla.ca',
  logo: 'https://assets.digitalvilla.ca/images/logo_DV.png',
  tagline: 'Full-stack serverless products, engineered end-to-end.',
  description:
    'Digital Villa is a full-stack software studio building serverless web & mobile products — trusted by Fortune 500 and global brands including lululemon, Panasonic, and CPKC.',
  founded: '2018',
  location: 'Calgary, Alberta · Canada',
  email: 'digitalvilla01@gmail.com',
  phone: '+1 587-887-8781',
  founder: {
    name: 'Omar Villanueva',
    role: 'Founder · Senior Full-Stack Engineer',
  },
} as const

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/company' },
  { label: 'Work', to: '/work' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export const socials = [
  { label: 'Email', href: 'mailto:digitalvilla01@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/DigitalVilla' },
  { label: 'Website', href: 'https://www.digitalvilla.ca' },
]
