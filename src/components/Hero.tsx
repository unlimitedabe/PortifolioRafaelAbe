import { featuredTechnologies, profile } from '../data/profile'
import { Icon } from './Icons'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-profile">
          <p className="hero-identity">
            <strong>{profile.name}</strong>
          </p>

          <figure className="hero-portrait">
            {/* Substitua este placeholder por uma imagem com a classe portrait-image. */}
            <div className="portrait-placeholder" role="img" aria-label="Espaço reservado para a foto profissional de Rafael Abe">
              <span className="portrait-initials" aria-hidden="true">RA</span>
              <span className="portrait-label">Foto profissional</span>
            </div>
          </figure>

          <div className="hero-copy">
            <h1 id="hero-title">
              Desenvolvedor de Software <span> Júnior</span>
            </h1>

            <div className="hero-bio">
              <p>
                Formado em Engenharia de Computação pela PUC Goiás e pós-graduado em Ciência de
                Dados e Inteligência Artificial, tenho experiência Full Stack em backend, APIs REST,
                aplicações web, integrações e automação de sistemas.
              </p>
              <p>
                Atuei profissionalmente com Ruby on Rails, Vue.js e PostgreSQL e atualmente trabalho
                com TypeScript, Node.js, React, SQL e Docker.
              </p>
            </div>

            <div className="hero-actions">
              <a className="button button--primary" href="#experiencia">
                Ver experiência
                <Icon name="arrow" />
              </a>
              <a className="button button--secondary" href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" />
                GitHub
              </a>
              <a className="button button--text" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-technologies" aria-label="Principais tecnologias">
            <span className="tech-label">Stack principal</span>
            <ul>
              {featuredTechnologies.map((technology, index) => (
                <li className={index < 3 ? 'technology--featured' : undefined} key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
