import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from '../data/navigation'
import { useMobileMenu } from '../hooks/useMobileMenu'
import { Arrow } from './Arrow'

export function Header() {
  const menu = useMobileMenu()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a10]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-8 px-6 max-[700px]:h-[68px] max-[700px]:px-5">
      <Link className="group flex shrink-0 items-center gap-3" to="/" aria-label="Anas Semghouni, accueil" onClick={menu.close}>
        <span className="grid size-10 place-items-center rounded-xl border border-lime-200/20 bg-lime-200/10 font-mono text-lg font-bold text-lime-200 shadow-[inset_0_0_20px_#bef2640d]">A<span className="text-white">.</span></span>
        <span className="flex flex-col text-sm font-semibold tracking-tight text-white">Anas Semghouni<small className="mt-1 font-mono text-[9px] font-normal uppercase tracking-[.2em] text-slate-500">Portfolio <span className="text-lime-300">/</span> 2026</small></span>
      </Link>
      <button className="hidden size-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 max-[700px]:flex" type="button" aria-label={menu.isOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menu.isOpen} onClick={menu.toggle}>
        <span className="h-px w-4 bg-slate-200" /><span className="h-px w-4 bg-slate-200" />
      </button>
      <nav className={`flex items-center gap-8 max-[700px]:absolute max-[700px]:left-0 max-[700px]:right-0 max-[700px]:top-[calc(100%+1px)] max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-0 max-[700px]:border-b max-[700px]:border-white/10 max-[700px]:bg-[#0b0e15] max-[700px]:px-6 max-[700px]:py-2 ${menu.isOpen ? 'max-[700px]:flex' : 'max-[700px]:hidden'}`} aria-label="Navigation principale">
        {navigationLinks.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} onClick={menu.close} className={({ isActive }) => `relative py-3 text-xs font-medium text-slate-400 transition-colors hover:text-white max-[700px]:border-b max-[700px]:border-white/5 ${isActive ? 'text-lime-200' : ''}`}>
            {label}
          </NavLink>
        ))}
      </nav>
      <a className="group inline-flex items-center gap-3 rounded-full border border-lime-200/30 bg-lime-200/10 px-4 py-2.5 text-xs font-semibold text-lime-100 transition hover:bg-lime-200 hover:text-[#080a10] max-[700px]:hidden" href="mailto:anassemghouni774@gmail.com">Me contacter <Arrow diagonal /></a>
      </div>
    </header>
  )
}
