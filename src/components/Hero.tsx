import { featuredTechnologies, profile } from '../data/profile'
import { Icon } from './Icons'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span>{profile.name}</span>
            <span aria-hidden="true">/</span>
            {profile.role}
          </p>
          <h1 id="hero-title">
            Desenvolvedor Full Stack com experiência em{' '}
            <span>Ruby on Rails</span> e APIs REST.
          </h1>
          <p className="hero-intro">
            Atuação em desenvolvimento web, backend e integração entre sistemas.
          </p>

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

        <div className="hero-technologies" aria-label="Principais tecnologias">
          <span className="tech-label">Stack principal</span>
          <ul>
            {featuredTechnologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
      <a className="scroll-cue" href="#sobre" aria-label="Ir para a seção Sobre">
        <span>Conheça meu trabalho</span>
        <span className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}

