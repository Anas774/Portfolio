import { Link } from 'react-router-dom'
import { Arrow } from '../components/Arrow'
import { Eyebrow } from '../components/Eyebrow'

export function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute -top-48 right-[-12%] -z-10 size-[620px] rounded-full bg-violet-500/10 blur-[130px]" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-[-280px] left-[-12%] -z-10 size-[520px] rounded-full bg-lime-300/[.07] blur-[130px]" />
        <div className="mx-auto grid min-h-[660px] max-w-7xl grid-cols-[1.1fr_.9fr] items-center gap-14 px-6 py-20 max-[900px]:min-h-[unset] max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[900px]:py-16 max-[620px]:gap-10 max-[620px]:px-5 max-[620px]:py-12">
        <div className="relative z-10">
          <Eyebrow>Étudiant en informatique <span className="text-slate-600">/</span> Développeur</Eyebrow>
          <h1 className="mt-8 mb-6 text-[clamp(3.5rem,8vw,7.4rem)] font-semibold leading-[.91] tracking-[-.075em] text-white max-[620px]:mt-6 max-[620px]:text-[clamp(3.4rem,15vw,5.4rem)]">Bonjour,<br />moi c’est<br /><span className="bg-gradient-to-r from-lime-200 via-lime-300 to-violet-300 bg-clip-text text-transparent">Anas.</span></h1>
          <p className="max-w-[570px] text-lg leading-8 text-slate-400 max-[620px]:text-base max-[620px]:leading-7">Je suis étudiant en informatique et développeur curieux. J’aime apprendre en construisant des outils utiles et des expériences web soignées.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="group inline-flex min-h-[52px] items-center gap-5 rounded-xl bg-lime-300 px-5 text-sm font-semibold text-[#10130c] shadow-[0_0_35px_#bef26420] transition hover:-translate-y-0.5 hover:bg-lime-200" to="/projets">Voir mes projets <Arrow /></Link>
            <Link className="group inline-flex min-h-[52px] items-center gap-5 rounded-xl border border-white/15 bg-white/[.03] px-5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/[.07]" to="/contact">Me contacter <Arrow diagonal /></Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-slate-500"><span>Java</span><span className="text-lime-300">/</span><span>React</span><span className="text-lime-300">/</span><span>Python</span><span className="text-lime-300">/</span><span>SQL</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[470px] max-[900px]:max-w-[540px]">
          <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-lime-300/10 via-violet-400/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d111b]/90 shadow-[0_30px_100px_#0008]">
            <div className="flex h-12 items-center justify-between border-b border-white/[.07] px-5"><div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-[#ff6e67]/80" /><span className="size-2.5 rounded-full bg-[#f6c85f]/80" /><span className="size-2.5 rounded-full bg-lime-300/80" /></div><span className="font-mono text-[10px] text-slate-500">anas.tsx</span><span className="w-8" /></div>
            <div className="space-y-4 px-6 py-7 font-mono text-[12px] leading-6 max-[620px]:px-4 max-[620px]:text-[10px]">
              <p className="m-0 text-slate-500"><span className="text-violet-300">const</span> <span className="text-sky-200">developer</span> = {'{'}</p>
              <p className="m-0 pl-5"><span className="text-lime-200">name</span>: <span className="text-amber-200">"Anas Semghouni"</span>,</p>
              <p className="m-0 pl-5"><span className="text-lime-200">focus</span>: <span className="text-amber-200">"Software"</span>,</p>
              <p className="m-0 pl-5"><span className="text-lime-200">curiosity</span>: [</p>
              <p className="m-0 pl-10 text-amber-200">"clean code", "new ideas",</p>
              <p className="m-0 pl-10 text-amber-200">"building useful things"</p>
              <p className="m-0 pl-5">],</p>
              <p className="m-0 text-slate-500">{'}'}</p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/[.07] pt-5 text-[10px] text-slate-500"><span className="size-1.5 animate-pulse rounded-full bg-lime-300" />Toujours en train d’apprendre<span className="ml-auto text-lime-200">●</span></div>
            </div>
          </div>
          <div className="absolute -right-5 -bottom-5 rounded-xl border border-violet-300/20 bg-[#151324] px-4 py-3 shadow-xl max-[620px]:right-[-8px]"><span className="block font-mono text-[9px] uppercase tracking-[.14em] text-slate-500">En ce moment</span><span className="mt-1 block text-xs font-medium text-violet-200">J’apprends, je construis ✳</span></div>
        </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_2fr_auto] items-center gap-10 px-6 py-9 max-[700px]:grid-cols-[1fr_auto] max-[700px]:gap-5 max-[620px]:px-5">
          <span className="font-mono text-[10px] uppercase tracking-[.17em] text-lime-200">01 <span className="text-slate-600">/ À propos</span></span>
          <p className="m-0 max-w-2xl text-lg leading-8 text-slate-300 max-[700px]:col-start-1 max-[700px]:text-base">Un pied dans le code, l’autre dans le concret. J’explore, je construis et je progresse à chaque projet.</p>
          <Link to="/experiences" className="group col-start-3 row-span-2 grid size-11 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:border-lime-200/50 hover:bg-lime-200/10 hover:text-lime-200 max-[700px]:col-start-2 max-[700px]:row-start-1" aria-label="Voir mes expériences"><Arrow diagonal /></Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-[.8fr_1.2fr] gap-20 px-6 py-28 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[620px]:px-5 max-[620px]:py-20">
        <div>
          <Eyebrow>Ma façon d’avancer</Eyebrow>
          <h2 className="mt-5 mb-0 max-w-lg text-5xl font-semibold leading-[1.03] tracking-[-.06em] text-white max-[620px]:text-4xl">Apprendre en faisant.<br /><span className="text-lime-200">Construire avec soin.</span></h2>
        </div>
        <div className="grid gap-3">
          <Link to="/competences" className="group flex items-center gap-5 rounded-xl border border-white/[.08] bg-white/[.025] p-5 transition hover:border-lime-200/25 hover:bg-white/[.045]"><span className="font-mono text-xs text-lime-200">01</span><span className="min-w-0 flex-1"><strong className="block text-sm font-semibold text-slate-100">Une base technique polyvalente</strong><small className="mt-1 block text-xs text-slate-500">Du développement web aux bases de données.</small></span><span className="text-slate-500 group-hover:text-lime-200"><Arrow diagonal /></span></Link>
          <Link to="/experiences" className="group flex items-center gap-5 rounded-xl border border-white/[.08] bg-white/[.025] p-5 transition hover:border-lime-200/25 hover:bg-white/[.045]"><span className="font-mono text-xs text-lime-200">02</span><span className="min-w-0 flex-1"><strong className="block text-sm font-semibold text-slate-100">L’envie de faire équipe</strong><small className="mt-1 block text-xs text-slate-500">Écouter, partager et avancer ensemble.</small></span><span className="text-slate-500 group-hover:text-lime-200"><Arrow diagonal /></span></Link>
          <Link to="/projets" className="group flex items-center gap-5 rounded-xl border border-white/[.08] bg-white/[.025] p-5 transition hover:border-lime-200/25 hover:bg-white/[.045]"><span className="font-mono text-xs text-lime-200">03</span><span className="min-w-0 flex-1"><strong className="block text-sm font-semibold text-slate-100">La curiosité en pratique</strong><small className="mt-1 block text-xs text-slate-500">Apprendre de nouvelles choses, projet après projet.</small></span><span className="text-slate-500 group-hover:text-lime-200"><Arrow diagonal /></span></Link>
        </div>
      </section>

      <section className="mx-auto mb-24 w-[calc(100%-3rem)] max-w-7xl overflow-hidden rounded-2xl border border-lime-200/10 bg-gradient-to-br from-[#131a18] via-[#10131d] to-[#171125] px-10 py-12 max-[620px]:mb-16 max-[620px]:w-[calc(100%-2.5rem)] max-[620px]:px-6 max-[620px]:py-9">
        <div className="flex items-end justify-between gap-8 max-[700px]:flex-col max-[700px]:items-start">
          <div><Eyebrow>La suite s’écrit ensemble</Eyebrow><h2 className="mt-5 mb-0 text-4xl font-semibold tracking-[-.055em] text-white max-[620px]:text-3xl">Une idée à faire <span className="text-lime-200">grandir ?</span></h2></div>
          <Link className="group inline-flex min-h-[50px] items-center gap-4 rounded-xl border border-lime-200/30 bg-lime-200/10 px-5 text-sm font-semibold text-lime-100 transition hover:bg-lime-200 hover:text-[#080a10]" to="/contact">Entrons en contact <Arrow diagonal /></Link>
        </div>
      </section>
    </main>
  )
}
