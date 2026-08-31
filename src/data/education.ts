export type Education = {
  course: string
  institution: string
  period: string
  achievement?: string
}

export const education: readonly Education[] = [
  {
    course: 'Pós-graduação em Ciência de Dados e Inteligência Artificial',
    institution: 'PUC Goiás',
    period: '2025 — 2026',
  },
  {
    course: 'Engenharia de Computação',
    institution: 'PUC Goiás',
    period: '2020 — 2024',
    achievement: 'Prêmio de Mérito Acadêmico magna cum laude',
  },
]

export const academicHighlights = [
  'Participação em equipe de maratona de programação, com uso de C++ para algoritmos e resolução de problemas.',
  'Mentor convidado na disciplina de Controle de Processos.',
  'Desenvolvimento acadêmico de sistema de supervisão e automação de aquário com Arduino e Python, integrando hardware e interface de monitoramento.',
] as const

export const languages = [
  { language: 'Português', level: 'Nativo' },
  { language: 'Inglês', level: 'Avançado' },
] as const

