import { TechLogo } from '../components/TechLogo'
import { skills } from '../data/portfolio'

export function Skills() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,_rgba(132,204,22,0.10),_transparent_44%)] px-6 py-20 max-[620px]:px-5 max-[620px]:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center max-[620px]:mb-12">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[.28em] text-lime-200">02 <span className="mx-2 text-slate-600">/</span> Compétences</p>
          <h1 className="m-0 text-5xl font-semibold uppercase tracking-[-.055em] text-slate-100 max-[620px]:text-4xl">Tech <span className="text-lime-200">stack</span></h1>
          <div aria-hidden="true" className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400">
            Les langages, outils et méthodes que j’utilise pour concevoir et faire évoluer mes projets.
          </p>
        </header>

        <div className="space-y-12 max-[620px]:space-y-10">
          {skills.map((group, index) => (
            <section aria-labelledby={`skill-group-${index}`} className="text-center" key={group.title}>
              <div className="mb-5 flex items-center justify-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-lime-200/25" />
                <div>
                  <h2 className="m-0 text-xs font-semibold uppercase tracking-[.18em] text-slate-200" id={`skill-group-${index}`}>{group.title}</h2>
                  <p className="m-0 mt-1.5 text-[11px] text-slate-500">{group.note}</p>
                </div>
                <span aria-hidden="true" className="h-px w-8 bg-lime-200/25" />
              </div>

              <div className="flex flex-wrap justify-center gap-3 max-[620px]:gap-2.5">
                {group.items.map((item) => (
                  <div
                    className="group/tile flex h-[104px] w-[100px] flex-col items-center justify-center gap-2 rounded-xl border border-white/[.09] bg-[#0d1018]/80 px-2.5 text-center shadow-[0_8px_30px_rgba(0,0,0,.12)] transition duration-200 hover:-translate-y-1 hover:border-lime-200/35 hover:bg-[#111710] max-[620px]:h-[94px] max-[620px]:w-[88px]"
                    key={item}
                    title={item}
                  >
                    <span className="grid size-10 place-items-center transition-transform duration-200 group-hover/tile:scale-110">
                      <TechLogo name={item} />
                    </span>
                    <span className="line-clamp-2 min-h-6 w-full text-[10px] leading-3 text-slate-400 transition-colors group-hover/tile:text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mx-auto mt-14 flex max-w-xl items-center justify-center gap-3 text-center text-xs leading-5 text-slate-500 max-[620px]:mt-10">
          <span aria-hidden="true" className="text-lime-200">✳</span>
          Je continue d’élargir ma boîte à outils au fil de mes projets et de mes expériences.
        </p>
      </div>
    </main>
  )
}
