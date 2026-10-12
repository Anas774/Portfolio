import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from '../data/navigation'
import { useMobileMenu } from '../hooks/useMobileMenu'
import { Arrow } from './Arrow'

export function Header() {
  const menu = useMobileMenu()

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Anas Semghouni, accueil" onClick={menu.close}>
        <span className="wordmark-mark">A<span>.</span></span>
        <span className="wordmark-name">Anas Semghouni<small>Portfolio · 2026</small></span>
      </Link>
      <button className="menu-toggle" type="button" aria-label={menu.isOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menu.isOpen} onClick={menu.toggle}>
        <span /><span />
      </button>
      <nav className={`main-nav${menu.isOpen ? ' is-open' : ''}`} aria-label="Navigation principale">
        {navigationLinks.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} onClick={menu.close} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            {label}
          </NavLink>
        ))}
      </nav>
      <a className="header-contact" href="mailto:anassemghouni774@gmail.com">Me contacter <Arrow diagonal /></a>
    </header>
  )
}
