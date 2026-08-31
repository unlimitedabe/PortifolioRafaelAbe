import { highlightedSkills, skillCategories } from '../data/skills'
import { useLanguage } from '../i18n/LanguageContext'
import { getLocalizedText, getLocalizedTextKey } from '../i18n/localizedText'
import { SectionHeading } from './SectionHeading'
import { Tag } from './Tag'

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section className="section section--ink" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-group" key={category.id}>
              <header>
                <span>{category.index}</span>
                <h3>{t.skills.categories[category.id]}</h3>
              </header>
              <div className="tag-list">
                {category.skills.map((skill) => {
                  const label = getLocalizedText(skill, t.terms)

                  return (
                    <Tag
                      key={getLocalizedTextKey(skill)}
                      highlighted={highlightedSkills.has(label)}
                    >
                      {label}
                    </Tag>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
