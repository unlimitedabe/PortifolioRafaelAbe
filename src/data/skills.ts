import type { LocalizedText } from '../i18n/types'

export type SkillCategoryId =
  | 'backend'
  | 'integrations'
  | 'frontend'
  | 'dataInfrastructure'
  | 'softwareEngineering'

export type SkillCategory = {
  id: SkillCategoryId
  index: string
  skills: readonly LocalizedText[]
}

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'backend',
    index: '01',
    skills: ['Ruby on Rails', 'Node.js', 'Python', 'FastAPI', 'Flask'],
  },
  {
    id: 'integrations',
    index: '02',
    skills: [
      'REST APIs',
      'Postman',
      'Webhooks',
      { translationKey: 'thirdPartyApiIntegration' },
    ],
  },
  {
    id: 'frontend',
    index: '03',
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'Vite'],
  },
  {
    id: 'dataInfrastructure',
    index: '04',
    skills: ['PostgreSQL', 'SQL', 'Docker', 'Git', 'GitHub', 'GitLab'],
  },
  {
    id: 'softwareEngineering',
    index: '05',
    skills: [
      { translationKey: 'requirementsGathering' },
      { translationKey: 'technicalDocumentation' },
      { translationKey: 'systemTesting' },
      'Scrum',
    ],
  },
]

export const highlightedSkills = new Set([
  'Ruby on Rails',
  'REST APIs',
  'PostgreSQL',
])
