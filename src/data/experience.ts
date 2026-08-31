export type Experience = {
  company: string
  role: string
  period: string
  current?: boolean
  description: readonly string[]
  technologies: readonly string[]
}

export const experiences: readonly Experience[] = [
  {
    company: 'Arkea Soluções Inteligentes',
    role: 'Software Developer / Liderança de desenvolvimento',
    period: '2026 — Atual',
    current: true,
    description: [
      'Desenvolvimento de aplicações, automações e integrações utilizando TypeScript, React, Node.js, SQL e Docker.',
      'Integração com marketplaces, ERPs, serviços externos e automações de comunicação via WhatsApp.',
      'Participação em levantamento de requisitos, regras de negócio, arquitetura e desenvolvimento das soluções.',
    ],
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
    company: 'Secretaria de Estado da Casa Civil de Goiás',
    role: 'Full Stack Developer — Estágio',
    period: 'Jan 2022 — Mai 2023',
    description: [
      'Desenvolvimento de sistemas institucionais com Ruby on Rails, Vue.js e PostgreSQL.',
      'Implementação de funcionalidades CRUD, upload de arquivos, relatórios, dashboards e recursos da plataforma de Consulta Pública.',
      'Participação em levantamento de requisitos e testes de endpoints e requisições HTTP utilizando Postman.',
    ],
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
    company: 'Freelancer',
    role: 'Software Developer',
    period: '2025 — Atual',
    current: true,
    description: [
      'Desenvolvimento de aplicações web, interfaces responsivas, automações e integrações para diferentes clientes.',
      'Implementação de interfaces a partir de especificações visuais complexas e adaptação para diferentes tamanhos de tela.',
      'Integração com APIs externas utilizando principalmente Vue.js, React, Node.js e Vite.',
    ],
    technologies: [
      'Vue.js',
      'React',
      'Node.js',
      'Vite',
      'REST APIs',
      'Responsive Design',
    ],
  },
  {
    company: 'Pontifícia Universidade Católica de Goiás — JCPOLI',
    role: 'Desenvolvedor Web — Estágio',
    period: 'Mar 2024 — Jun 2024',
    description: [
      'Participação na reestruturação da plataforma da JCPOLI, incluindo integração de duas aplicações web.',
      'Desenvolvimento de nova interface, novas funcionalidades e persistência de dados em uma aplicação que anteriormente não possuía banco de dados.',
    ],
    technologies: ['Vue.js', 'Git', 'Database', 'Web Development'],
  },
  {
    company: 'Ministério Público do Estado de Goiás',
    role: 'Desenvolvedor Low-code — Estágio',
    period: 'Jul 2024 — Ago 2024',
    description: [
      'Desenvolvimento do E-relatório utilizando JotForm e automações em Excel.',
      'Participação na integração da solução com processos automatizados de cálculos relacionados ao monitoramento de desmatamento.',
    ],
    technologies: ['JotForm', 'Excel', 'Automação', 'Integração de sistemas'],
  },
]

