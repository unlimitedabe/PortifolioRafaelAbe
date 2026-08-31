import { languages } from '../data/education'

export function Languages() {
  return (
    <section className="languages-section" id="idiomas" aria-labelledby="languages-title">
      <div className="container languages-inner">
        <div>
          <span className="section-eyebrow">Idiomas</span>
          <h2 id="languages-title">Comunicação além do código.</h2>
        </div>
        <dl className="language-list">
          {languages.map((item) => (
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

