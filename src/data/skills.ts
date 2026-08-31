export type SkillCategory = {
  title: string
  index: string
  skills: readonly string[]
}

export const skillCategories: readonly SkillCategory[] = [
  {
    title: 'Backend',
    index: '01',
    skills: ['Ruby on Rails', 'Node.js', 'Python', 'FastAPI', 'Flask'],
  },
  {
    title: 'APIs & Integrações',
    index: '02',
    skills: [
      'REST APIs',
      'Postman',
      'Webhooks',
      'Integração com APIs externas',
    ],
  },
  {
    title: 'Frontend',
    index: '03',
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'Vite'],
  },
  {
    title: 'Dados & Infraestrutura',
    index: '04',
    skills: ['PostgreSQL', 'SQL', 'Docker', 'Git', 'GitHub', 'GitLab'],
  },
  {
    title: 'Engenharia de Software',
    index: '05',
    skills: [
      'Levantamento de requisitos',
      'Documentação técnica',
      'Teste de sistemas',
      'Scrum',
    ],
  },
]

export const highlightedSkills = new Set([
  'Ruby on Rails',
  'REST APIs',
  'PostgreSQL',
])

