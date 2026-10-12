import { PageIntro } from '../components/PageIntro'
import { Arrow } from '../components/Arrow'

export function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 max-[620px]:px-5 max-[620px]:py-16">
      <PageIntro number="03" eyebrow="Du concret, bientôt" title="Des idées" accent="en mouvement." description="Les projets arrivent bientôt. Je partagerai ici le besoin de départ, la solution imaginée et ce que chaque réalisation m’a appris." />
      <section className="grid grid-cols-[1.1fr_.9fr] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1018] max-[800px]:grid-cols-1">
        <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden border-r border-white/[.07] bg-[radial-gradient(ellipse_at_center,_#8b5cf620,_transparent_55%)] max-[800px]:min-h-[260px] max-[800px]:border-r-0 max-[800px]:border-b">
          <div className="absolute size-[245px] rounded-full border border-violet-300/10" /><div className="absolute size-[180px] rounded-full border border-dashed border-lime-200/20" />
          <div className="relative grid size-24 place-items-center rounded-2xl border border-lime-200/25 bg-[#111720] text-4xl text-lime-200 shadow-[0_0_70px_#bef26416]">✳</div>
          <span className="absolute top-[19%] left-[20%] font-mono text-[9px] uppercase tracking-[.18em] text-slate-500">Idée</span><span className="absolute top-[35%] right-[15%] font-mono text-[9px] uppercase tracking-[.18em] text-violet-200/60">Prototype</span><span className="absolute bottom-[18%] left-[34%] font-mono text-[9px] uppercase tracking-[.18em] text-lime-200/60">Réalisation</span>
        </div>
        <div className="flex flex-col justify-center p-10 max-[620px]:p-7"><span className="font-mono text-[10px] uppercase tracking-[.16em] text-lime-200">Bientôt dans cette section</span><h2 className="mt-5 mb-3 text-3xl font-semibold leading-tight tracking-[-.045em] text-white">La prochaine<br />histoire commence ici.</h2><p className="mb-7 max-w-sm text-sm leading-6 text-slate-400">Je prépare les fiches de mes projets avec le besoin de départ, les solutions et les apprentissages associés.</p><a className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-slate-200 transition hover:text-lime-200" href="mailto:anassemghouni774@gmail.com?subject=Portfolio%20-%20Projets">Demander les projets par mail <Arrow diagonal /></a></div>
      </section>
    </main>
  )
}
