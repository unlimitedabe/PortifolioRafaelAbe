import { academicHighlights, education } from '../data/education'
import { SectionHeading } from './SectionHeading'

export function EducationSection() {
  return (
    <section className="section" id="formacao" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          eyebrow="Formação"
          title="Formação acadêmica"
        />

        <div className="education-layout">
          <div className="degree-list">
            {education.map((item) => (
              <article className="degree-item" key={item.course}>
                <span className="degree-period">{item.period}</span>
                <div>
                  <h3>{item.course}</h3>
                  <p>{item.institution}</p>
                  {item.achievement && (
                    <span className="achievement">
                      <span aria-hidden="true">✦</span>
                      {item.achievement}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <aside className="academic-highlights">
            <span className="section-eyebrow">Destaques acadêmicos</span>
            <ul>
              {academicHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
