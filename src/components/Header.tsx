import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { Icon } from './Icons'

const navItems = [
  { label: 'Sobre', href: '#inicio' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Skills', href: '#skills' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Idiomas', href: '#idiomas' },
  { label: 'Contato', href: '#contato' },
] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Rafael Abe — início">
          <span className="brand-mark">RA</span>
          <span>{profile.name}</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>

        <nav
          className={`main-nav${menuOpen ? ' main-nav--open' : ''}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="header-socials" aria-label="Redes sociais">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub de Rafael Abe">
              <Icon name="github" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Rafael Abe">
              <Icon name="linkedin" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
