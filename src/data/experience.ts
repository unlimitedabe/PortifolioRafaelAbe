import type { LocalizedText } from '../i18n/types'

export type ExperienceId =
  | 'arkea'
  | 'casaCivil'
  | 'freelancer'
  | 'jcpoli'
  | 'ministerioPublico'

export type Experience = {
  id: ExperienceId
  company: string
  current?: boolean
  technologies: readonly LocalizedText[]
}

export const experiences: readonly Experience[] = [
  {
    id: 'arkea',
    company: 'Arkea Soluções Inteligentes',
    current: true,
    technologies: [
      'TypeScript',
      'Node.js',
      'React',
      'SQL',
      'Docker',
      'REST APIs',
      'GitHub',
    ],
  },
  {
    id: 'casaCivil',
    company: 'Secretaria de Estado da Casa Civil de Goiás',
    technologies: [
      'Ruby on Rails',
      'Vue.js',
      'PostgreSQL',
      'REST APIs',
      'Postman',
      'GitLab',
    ],
  },
  {
    id: 'freelancer',
    company: 'Freelancer',
    technologies: [
      'Vue.js',
      'React',
      'Node.js',
      'Vite',
      'REST APIs',
      { translationKey: 'responsiveDesign' },
    ],
  },
  {
    id: 'jcpoli',
    company: 'Pontifícia Universidade Católica de Goiás — JCPOLI',
    technologies: [
      'Vue.js',
      'Git',
      { translationKey: 'database' },
      { translationKey: 'webDevelopment' },
    ],
  },
  {
    id: 'ministerioPublico',
    company: 'Ministério Público do Estado de Goiás',
    technologies: [
      'JotForm',
      'Excel',
      { translationKey: 'automation' },
      { translationKey: 'systemIntegration' },
    ],
  },
]
