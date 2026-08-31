export type EducationId = 'postgraduate' | 'computerEngineering'

export type Education = {
  id: EducationId
  institution: string
  period: string
}

export const education: readonly Education[] = [
  {
    id: 'postgraduate',
    institution: 'PUC Goiás',
    period: '2025 — 2026',
  },
  {
    id: 'computerEngineering',
    institution: 'PUC Goiás',
    period: '2020 — 2024',
  },
]
