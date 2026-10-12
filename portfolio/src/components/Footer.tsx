import { Arrow } from './Arrow'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-4 px-6 text-[11px] text-slate-500 max-[620px]:min-h-[78px] max-[620px]:px-5 max-[620px]:text-[10px]">
      <span>© 2026 Anas Semghouni</span>
      <span className="max-[620px]:hidden">Conçu avec soin <span className="text-lime-300">✳</span></span>
      <a className="group text-slate-300 transition hover:text-lime-200" href="mailto:anassemghouni774@gmail.com">Disponible pour échanger <Arrow diagonal /></a>
      </div>
    </footer>
  )
}
