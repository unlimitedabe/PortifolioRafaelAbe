import { education } from '../data/education'
import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from './SectionHeading'

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section className="section" id="formacao" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          eyebrow={t.education.eyebrow}
          title={t.education.title}
        />

        <div className="education-layout">
          <div className="degree-list">
            {education.map((item) => {
              const content = t.education.items[item.id]

              return (
                <article className="degree-item" key={item.id}>
                  <span className="degree-period">{item.period}</span>
                  <div>
                    <h3>{content.course}</h3>
                    <p>{item.institution}</p>
                    {content.achievement && (
                      <span className="achievement">
                        <span aria-hidden="true">✦</span>
                        {content.achievement}
                      </span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          <aside className="academic-highlights">
            <span className="section-eyebrow">{t.education.academicHighlights}</span>
            <ul>
              {t.education.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
