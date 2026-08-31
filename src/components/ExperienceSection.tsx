import { experiences } from '../data/experience'
import { useLanguage } from '../i18n/LanguageContext'
import { getLocalizedText, getLocalizedTextKey } from '../i18n/localizedText'
import { SectionHeading } from './SectionHeading'
import { Tag } from './Tag'

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section className="section" id="experiencia" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="timeline">
          {experiences.map((experience, index) => {
            const content = t.experience.items[experience.id]

            return (
              <article className="experience-item" key={experience.id}>
                <div className="experience-meta">
                  <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="experience-period">
                    {content.period.start} —{' '}
                    {experience.current ? (
                      <span className="experience-period-current">{content.period.end}</span>
                    ) : (
                      content.period.end
                    )}
                  </span>
                </div>

                <div className="experience-content">
                  <h3>{content.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <ul className="experience-description">
                    {content.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div
                    className="tag-list"
                    aria-label={`${t.experience.technologiesUsed} ${experience.company}`}
                  >
                    {experience.technologies.map((technology) => (
                      <Tag key={getLocalizedTextKey(technology)}>
                        {getLocalizedText(technology, t.terms)}
                      </Tag>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
