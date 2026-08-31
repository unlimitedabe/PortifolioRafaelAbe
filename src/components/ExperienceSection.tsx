import { experiences } from '../data/experience'
import { SectionHeading } from './SectionHeading'
import { Tag } from './Tag'

export function ExperienceSection() {
  return (
    <section className="section" id="experiencia" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="Experiência"
          title="Software em produção, da regra de negócio à interface."
          description="Experiência profissional em aplicações web completas, integrações e construção de soluções para diferentes contextos."
        />

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={`${experience.company}-${experience.period}`}>
              <div className="experience-meta">
                <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="experience-period">{experience.period}</span>
                {experience.current && <span className="current-badge">Em andamento</span>}
              </div>

              <div className="experience-content">
                <h3>{experience.role}</h3>
                <p className="experience-company">{experience.company}</p>
                <ul className="experience-description">
                  {experience.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="tag-list" aria-label={`Tecnologias usadas em ${experience.company}`}>
                  {experience.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
