import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 {profile.name}</p>
        <p>Built with React + TypeScript</p>
        <a href="#inicio">Voltar ao topo <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}

