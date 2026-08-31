import { highlightedSkills, skillCategories } from '../data/skills'
import { SectionHeading } from './SectionHeading'
import { Tag } from './Tag'

export function SkillsSection() {
  return (
    <section className="section section--ink" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="STACK"
          title="Tecnologias e Competências"
          description="Uma base Full Stack com ênfase em backend, dados e comunicação entre sistemas."
        />

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-group" key={category.title}>
              <header>
                <span>{category.index}</span>
                <h3>{category.title}</h3>
              </header>
              <div className="tag-list">
                {category.skills.map((skill) => (
                  <Tag key={skill} highlighted={highlightedSkills.has(skill)}>
                    {skill}
                  </Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
