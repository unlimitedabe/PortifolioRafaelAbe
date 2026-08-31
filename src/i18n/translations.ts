import type { EducationId } from '../data/education'
import type { ExperienceId } from '../data/experience'
import type { SkillCategoryId } from '../data/skills'
import type { Language, LocalizedTermKey } from './types'

type ExperienceTranslation = {
  role: string
  period: {
    start: string
    end: string
  }
  description: readonly string[]
}

type EducationTranslation = {
  course: string
  achievement?: string
}

type Translation = {
  seo: {
    htmlLang: 'pt-BR' | 'en'
    openGraphLocale: 'pt_BR' | 'en_US'
    title: string
    description: string
  }
  navigation: {
    about: string
    experience: string
    skills: string
    education: string
    languages: string
    contact: string
  }
  header: {
    brandHome: string
    openMenu: string
    closeMenu: string
    mainNavigation: string
    socialNetworks: string
    githubProfile: string
    linkedinProfile: string
    languageSelector: string
  }
  hero: {
    title: readonly {
      text: string
      highlighted?: boolean
    }[]
    paragraphs: readonly string[]
    viewExperience: string
    coreStack: string
    coreTechnologies: string
  }
  experience: {
    eyebrow: string
    title: string
    description: string
    technologiesUsed: string
    items: Record<ExperienceId, ExperienceTranslation>
  }
  skills: {
    eyebrow: string
    title: string
    description: string
    categories: Record<SkillCategoryId, string>
  }
  education: {
    eyebrow: string
    title: string
    academicHighlights: string
    items: Record<EducationId, EducationTranslation>
    highlights: readonly string[]
  }
  languages: {
    eyebrow: string
    title: string
    items: readonly {
      language: string
      level: string
    }[]
  }
  contact: {
    eyebrow: string
    title: string
    email: string
  }
  footer: {
    backToTop: string
  }
  terms: Record<LocalizedTermKey, string>
}

export const languageOptionLabels: Record<Language, string> = {
  pt: 'Alterar idioma para português',
  en: 'Change language to English',
}

export const translations: Record<Language, Translation> = {
  pt: {
    seo: {
      htmlLang: 'pt-BR',
      openGraphLocale: 'pt_BR',
      title: 'Rafael Abe | Desenvolvedor de Software',
      description:
        'Desenvolvedor de Software com experiência em Ruby on Rails, APIs REST, integração de sistemas e desenvolvimento Full Stack.',
    },
    navigation: {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Skills',
      education: 'Formação',
      languages: 'Idiomas',
      contact: 'Contato',
    },
    header: {
      brandHome: 'Rafael Abe — início',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      mainNavigation: 'Navegação principal',
      socialNetworks: 'Redes sociais',
      githubProfile: 'GitHub de Rafael Abe',
      linkedinProfile: 'LinkedIn de Rafael Abe',
      languageSelector: 'Seletor de idioma',
    },
    hero: {
      title: [
        { text: 'Desenvolvedor de Software ' },
        { text: 'Júnior', highlighted: true },
      ],
      paragraphs: [
        'Engenheiro de Computação pela PUC Goiás e pós-graduado em Ciência de Dados e Inteligência Artificial, com atuação full stack e experiência em backend, APIs REST, aplicações web, integrações e automação de sistemas.',
        'Atuei profissionalmente com Ruby on Rails, Vue.js e PostgreSQL e atualmente desenvolvo soluções com TypeScript, Node.js, React, SQL e Docker.',
      ],
      viewExperience: 'Ver experiência',
      coreStack: 'Stack principal',
      coreTechnologies: 'Principais tecnologias',
    },
    experience: {
      eyebrow: 'TRAJETÓRIA',
      title: 'Experiência profissional',
      description:
        'Experiência profissional em aplicações web completas, integrações e construção de soluções para diferentes contextos.',
      technologiesUsed: 'Tecnologias usadas em',
      items: {
        arkea: {
          role: 'Desenvolvedor de Software Jr.',
          period: { start: 'Jan 2026', end: 'Atual' },
          description: [
            'Desenvolvimento de aplicações, automações e integrações utilizando TypeScript, React, Node.js, SQL e Docker.',
            'Integração com marketplaces, ERPs, serviços externos e automações de comunicação via WhatsApp.',
            'Participação em levantamento de requisitos, regras de negócio, arquitetura e desenvolvimento das soluções.',
          ],
        },
        casaCivil: {
          role: 'Desenvolvedor Full Stack — Estágio',
          period: { start: 'Jan 2022', end: 'Mai 2023' },
          description: [
            'Desenvolvimento de sistemas institucionais com Ruby on Rails, Vue.js e PostgreSQL.',
            'Implementação de funcionalidades CRUD, upload de arquivos, relatórios, dashboards e recursos da plataforma de Consulta Pública.',
            'Participação em levantamento de requisitos e testes de endpoints e requisições HTTP utilizando Postman.',
          ],
        },
        freelancer: {
          role: 'Desenvolvedor de Software Jr.',
          period: { start: 'Jul 2025', end: 'Jan 2026' },
          description: [
            'Desenvolvimento de aplicações web, interfaces responsivas, automações e integrações para diferentes clientes.',
            'Implementação de interfaces a partir de especificações visuais complexas e adaptação para diferentes tamanhos de tela.',
            'Integração com APIs externas utilizando principalmente Vue.js, React, Node.js e Vite.',
          ],
        },
        jcpoli: {
          role: 'Desenvolvedor Web — Estágio',
          period: { start: 'Mar 2024', end: 'Jun 2024' },
          description: [
            'Participação na reestruturação da plataforma da JCPOLI, incluindo integração de duas aplicações web.',
            'Desenvolvimento de nova interface, novas funcionalidades e persistência de dados em uma aplicação que anteriormente não possuía banco de dados.',
          ],
        },
        ministerioPublico: {
          role: 'Desenvolvedor Low-code — Estágio',
          period: { start: 'Jul 2024', end: 'Ago 2024' },
          description: [
            'Desenvolvimento do E-relatório utilizando JotForm e automações em Excel.',
            'Participação na integração da solução com processos automatizados de cálculos relacionados ao monitoramento de desmatamento.',
          ],
        },
      },
    },
    skills: {
      eyebrow: 'STACK',
      title: 'Competências técnicas',
      description:
        'Uma base Full Stack com ênfase em backend, dados e comunicação entre sistemas.',
      categories: {
        backend: 'Backend',
        integrations: 'APIs & Integrações',
        frontend: 'Frontend',
        dataInfrastructure: 'Dados & Infraestrutura',
        softwareEngineering: 'Engenharia de Software',
      },
    },
    education: {
      eyebrow: 'FORMAÇÃO',
      title: 'Formação acadêmica',
      academicHighlights: 'Destaques acadêmicos',
      items: {
        postgraduate: {
          course: 'Pós-graduação em Ciência de Dados e Inteligência Artificial',
        },
        computerEngineering: {
          course: 'Engenharia de Computação',
          achievement: 'Prêmio de Mérito Acadêmico — Magna Cum Laude',
        },
      },
      highlights: [
        'Participação em time de maratona de programação, com uso de C++ nos algoritmos para a resolução de problemas complexos e no menor tempo possível.',
        'Mentor convidado na disciplina de Controle de Processos.',
        'Desenvolvimento acadêmico de sistema de supervisão e automação de aquário com Arduino e Python, integrando hardware e interface de monitoramento.',
        'Desenvolvimento acadêmico de sistema de telemedicina para gestantes em situação de risco, utilizando plataformas existentes e manipulação de dados.',
      ],
    },
    languages: {
      eyebrow: 'COMUNICAÇÃO',
      title: 'Idiomas para comunicação e estudo técnico',
      items: [
        { language: 'Português', level: 'Nativo' },
        { language: 'Inglês', level: 'Avançado' },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar?',
      email: 'E-mail',
    },
    footer: {
      backToTop: 'Voltar ao topo',
    },
    terms: {
      automation: 'Automação',
      database: 'Banco de Dados',
      requirementsGathering: 'Levantamento de requisitos',
      responsiveDesign: 'Design responsivo',
      systemIntegration: 'Integração de sistemas',
      systemTesting: 'Teste de sistemas',
      technicalDocumentation: 'Documentação técnica',
      thirdPartyApiIntegration: 'Integração com APIs externas',
      webDevelopment: 'Desenvolvimento Web',
    },
  },
  en: {
    seo: {
      htmlLang: 'en',
      openGraphLocale: 'en_US',
      title: 'Rafael Abe | Software Developer',
      description:
        'Software Developer with experience in Ruby on Rails, REST APIs, system integration and Full Stack development.',
    },
    navigation: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      languages: 'Languages',
      contact: 'Contact',
    },
    header: {
      brandHome: 'Rafael Abe — home',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      mainNavigation: 'Main navigation',
      socialNetworks: 'Social networks',
      githubProfile: 'Rafael Abe on GitHub',
      linkedinProfile: 'Rafael Abe on LinkedIn',
      languageSelector: 'Language selector',
    },
    hero: {
      title: [
        { text: 'Junior', highlighted: true },
        { text: ' Software Developer' },
      ],
      paragraphs: [
        'Computer Engineer graduated from PUC Goiás and postgraduate in Data Science and Artificial Intelligence, with full-stack experience in backend development, REST APIs, web applications, system integrations and automation.',
        'I have professional experience with Ruby on Rails, Vue.js and PostgreSQL, and currently develop solutions using TypeScript, Node.js, React, SQL and Docker.',
      ],
      viewExperience: 'View experience',
      coreStack: 'Core stack',
      coreTechnologies: 'Core technologies',
    },
    experience: {
      eyebrow: 'CAREER',
      title: 'Professional experience',
      description:
        'Professional experience building complete web applications, integrations and solutions for different contexts.',
      technologiesUsed: 'Technologies used at',
      items: {
        arkea: {
          role: 'Junior Software Developer',
          period: { start: 'Jan 2026', end: 'Present' },
          description: [
            'Development of applications, automations and integrations using TypeScript, React, Node.js, SQL and Docker.',
            'Integration with marketplaces, ERPs, third-party services and WhatsApp communication automations.',
            'Participation in requirements gathering, business rule definition, solution architecture and development.',
          ],
        },
        casaCivil: {
          role: 'Full Stack Developer — Internship',
          period: { start: 'Jan 2022', end: 'May 2023' },
          description: [
            'Development of institutional systems using Ruby on Rails, Vue.js and PostgreSQL.',
            'Implementation of CRUD features, file uploads, reports, dashboards and features for the Consulta Pública platform.',
            'Participation in requirements gathering and testing endpoints and HTTP requests using Postman.',
          ],
        },
        freelancer: {
          role: 'Junior Software Developer',
          period: { start: 'Jul 2025', end: 'Jan 2026' },
          description: [
            'Development of web applications, responsive interfaces, automations and integrations for different clients.',
            'Implementation of interfaces based on complex visual specifications and adaptation across different screen sizes.',
            'Integration with third-party APIs, primarily using Vue.js, React, Node.js and Vite.',
          ],
        },
        jcpoli: {
          role: 'Web Developer — Internship',
          period: { start: 'Mar 2024', end: 'Jun 2024' },
          description: [
            'Contributed to restructuring the JCPOLI platform, including the integration of two web applications.',
            'Developed a new interface, new features and data persistence for an application that previously had no database.',
          ],
        },
        ministerioPublico: {
          role: 'Low-code Developer — Internship',
          period: { start: 'Jul 2024', end: 'Aug 2024' },
          description: [
            'Developed E-relatório using JotForm and Excel automation.',
            'Contributed to integrating the solution with automated calculation processes related to deforestation monitoring.',
          ],
        },
      },
    },
    skills: {
      eyebrow: 'STACK',
      title: 'Technical skills',
      description:
        'A Full Stack foundation focused on backend, data and communication between systems.',
      categories: {
        backend: 'Backend',
        integrations: 'APIs & Integrations',
        frontend: 'Frontend',
        dataInfrastructure: 'Data & Infrastructure',
        softwareEngineering: 'Software Engineering',
      },
    },
    education: {
      eyebrow: 'EDUCATION',
      title: 'Academic Background',
      academicHighlights: 'Academic highlights',
      items: {
        postgraduate: {
          course: 'Postgraduate Degree in Data Science and Artificial Intelligence',
        },
        computerEngineering: {
          course: 'Computer Engineering',
          achievement: 'Academic Merit Award — Magna Cum Laude',
        },
      },
      highlights: [
        'Member of the university competitive programming team, using C++ for algorithms and problem solving.',
        'Guest mentor for the Process Control course.',
        'Developed an academic aquarium monitoring and automation system using Arduino and Python, integrating hardware with a monitoring interface.',
        'Developed an academic telemedicine system for at-risk pregnant women, using existing platforms and data processing.',
      ],
    },
    languages: {
      eyebrow: 'COMMUNICATION',
      title: 'Languages for communication and technical learning',
      items: [
        { language: 'Portuguese', level: 'Native' },
        { language: 'English', level: 'Advanced' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      email: 'Email',
    },
    footer: {
      backToTop: 'Back to top',
    },
    terms: {
      automation: 'Automation',
      database: 'Database',
      requirementsGathering: 'Requirements Gathering',
      responsiveDesign: 'Responsive Design',
      systemIntegration: 'System Integration',
      systemTesting: 'System Testing',
      technicalDocumentation: 'Technical Documentation',
      thirdPartyApiIntegration: 'Third-party API Integration',
      webDevelopment: 'Web Development',
    },
  },
}

export type { Translation }
