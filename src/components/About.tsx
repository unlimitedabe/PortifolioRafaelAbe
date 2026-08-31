import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section section--soft" id="sobre" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="Sobre" title="Base técnica e visão de produto." />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              Sou desenvolvedor de software formado em Engenharia de Computação pela PUC Goiás,
              com experiência em aplicações web, backend e integração de sistemas.
            </p>
            <p>
              Atuei profissionalmente com Ruby on Rails, Vue.js e PostgreSQL e atualmente trabalho
              com TypeScript, Node.js, React, SQL e Docker.
            </p>
          </div>

          <aside className="academic-note" aria-label="Resumo acadêmico">
            <span className="note-index">Formação</span>
            <strong>Engenharia de Computação</strong>
            <span>PUC Goiás</span>
            <span className="note-divider" />
            <strong>Magna cum laude</strong>
            <span>Prêmio de Mérito Acadêmico</span>
          </aside>
        </div>
      </div>
    </section>
  )
}
