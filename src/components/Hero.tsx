import { featuredTechnologies, profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { Icon } from './Icons'
import profilePhoto from '../assets/rafael-abe.jpeg'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-profile">
          <p className="hero-identity">
            <strong>{profile.name}</strong>
          </p>

          <figure className="hero-portrait">
            <img
              className="portrait-image"
              src={profilePhoto}
              alt="Rafael Abe"
            />
          </figure>

          <div className="hero-copy">
            <h1 id="hero-title">
              {t.hero.title.map((part, index) =>
                part.highlighted ? (
                  <span key={`${part.text}-${index}`}>{part.text}</span>
                ) : (
                  part.text
                ),
              )}
            </h1>

            <div className="hero-bio">
              {t.hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button button--primary" href="#experiencia">
                {t.hero.viewExperience}
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
          <div className="hero-technologies" aria-label={t.hero.coreTechnologies}>
            <span className="tech-label">{t.hero.coreStack}</span>
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
