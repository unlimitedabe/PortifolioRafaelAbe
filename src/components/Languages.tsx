import { useLanguage } from '../i18n/LanguageContext'

export function Languages() {
  const { t } = useLanguage()

  return (
    <section className="languages-section" id="idiomas" aria-labelledby="languages-title">
      <div className="container languages-inner">
        <div>
          <span className="section-eyebrow">{t.languages.eyebrow}</span>
          <h2 id="languages-title">{t.languages.title}</h2>
        </div>
        <dl className="language-list">
          {t.languages.items.map((item) => (
            <div key={item.language}>
              <dt>{item.language}</dt>
              <dd>{item.level}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
