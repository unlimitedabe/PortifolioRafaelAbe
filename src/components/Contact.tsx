import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { Icon } from './Icons'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section className="contact-section" id="contato" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="contact-eyebrow">{t.contact.eyebrow}</span>
            <h2 id="contact-title">{t.contact.title}</h2>
          </div>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <span className="contact-icon"><Icon name="mail" /></span>
              <span>
                <small>{t.contact.email}</small>
                {profile.email}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Icon name="linkedin" /></span>
              <span>
                <small>LinkedIn</small>
                Rafael de Matos Abe
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Icon name="github" /></span>
              <span>
                <small>GitHub</small>
                @unlimitedabe
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
