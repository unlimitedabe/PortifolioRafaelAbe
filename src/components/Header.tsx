import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { languageOptionLabels } from '../i18n/translations'
import type { Language } from '../i18n/types'
import { Icon } from './Icons'

const navItems = [
  { id: 'inicio', labelKey: 'about', href: '#inicio' },
  { id: 'experiencia', labelKey: 'experience', href: '#experiencia' },
  { id: 'skills', labelKey: 'skills', href: '#skills' },
  { id: 'formacao', labelKey: 'education', href: '#formacao' },
  { id: 'idiomas', labelKey: 'languages', href: '#idiomas' },
  { id: 'contato', labelKey: 'contact', href: '#contato' },
] as const

const languageOptions: readonly Language[] = ['pt', 'en']

type SectionId = (typeof navItems)[number]['id']

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>('inicio')

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => ({ id: item.id, element: document.getElementById(item.id) }))
      .filter(
        (section): section is { id: SectionId; element: HTMLElement } =>
          section.element !== null,
      )

    if (sections.length === 0) return

    let animationFrame: number | null = null

    const updateActiveSection = () => {
      const headerHeight = document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 72
      const availableHeight = Math.max(window.innerHeight - headerHeight, 0)
      const activationLine = headerHeight + availableHeight * 0.32
      const pageBottom = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      let nextSection = sections[0].id

      if (pageBottom >= documentHeight - 2) {
        nextSection = sections[sections.length - 1].id
      } else {
        for (const section of sections) {
          if (section.element.getBoundingClientRect().top <= activationLine) {
            nextSection = section.id
          } else {
            break
          }
        }
      }

      setActiveSection((currentSection) =>
        currentSection === nextSection ? currentSection : nextSection,
      )
      animationFrame = null
    }

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection)
      }
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label={t.header.brandHome}>
          <span className="brand-mark">RA</span>
          <span>{profile.name}</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>

        <nav
          className={`main-nav${menuOpen ? ' main-nav--open' : ''}`}
          id="main-navigation"
          aria-label={t.header.mainNavigation}
        >
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                className={activeSection === item.id ? 'is-active' : undefined}
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t.navigation[item.labelKey]}
              </a>
            ))}
          </div>
          <div className="header-socials" aria-label={t.header.socialNetworks}>
            {/* <a href={profile.github} target="_blank" rel="noreferrer" aria-label={t.header.githubProfile}>
              <Icon name="github" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={t.header.linkedinProfile}>
              <Icon name="linkedin" />
            </a>
          </div> */}
            <div className="language-switcher" role="group" aria-label={t.header.languageSelector}>
              {languageOptions.map((option, index) => (
                <span className="language-option-wrap" key={option}>
                  {index > 0 && <span className="language-separator" aria-hidden="true">|</span>}
                  <button
                    className={`language-option${language === option ? ' is-active' : ''}`}
                    type="button"
                    lang={option === 'pt' ? 'pt-BR' : 'en'}
                    aria-label={languageOptionLabels[option]}
                    aria-pressed={language === option}
                    onClick={() => setLanguage(option)}
                  >
                    {option.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
