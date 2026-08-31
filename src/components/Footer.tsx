import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 {profile.name}</p>
        <p>Built with React + TypeScript</p>
        <a href="#inicio">{t.footer.backToTop} <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}
