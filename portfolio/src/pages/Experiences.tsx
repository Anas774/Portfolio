import { PageIntro } from '../components/PageIntro'
import { experiences } from '../data/portfolio'

export function Experiences() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 max-[620px]:px-5 max-[620px]:py-16">
      <PageIntro number="04" eyebrow="Sur le terrain" title="Apprendre en" accent="faisant." description="Du développement en collectivité à l’animation et à la logistique, chaque expérience m’a appris une nouvelle façon de travailler." />
      <div className="border-t border-white/10">
        {experiences.map((experience) => (
          <article className="grid min-h-[155px] grid-cols-[44px_210px_minmax(0,1fr)] items-start gap-6 border-b border-white/[.08] px-4 py-7 transition-colors hover:bg-white/[.02] max-[800px]:grid-cols-[36px_180px_minmax(0,1fr)] max-[700px]:grid-cols-[24px_minmax(0,1fr)] max-[700px]:gap-x-3 max-[700px]:gap-y-3 max-[700px]:px-3 max-[620px]:min-h-0 max-[620px]:py-5" key={experience.number}>
            <span className="col-start-1 row-start-1 pt-1 font-mono text-xs text-slate-600">{experience.number}</span>
            <div className="col-start-2 row-start-1 pt-1 text-sm font-medium text-slate-300 max-[700px]:col-start-2"><span className="block">{experience.period}</span><small className="mt-2 block font-mono text-[10px] text-slate-500">{experience.duration}</small></div>
            <div className="col-start-3 row-start-1 max-[700px]:col-start-2 max-[700px]:row-start-2"><span className="font-mono text-[10px] uppercase tracking-[.13em] text-lime-200">{experience.company}</span><h2 className="mt-2 mb-0 text-xl font-semibold tracking-tight text-white">{experience.title}</h2><div className="mt-4 flex flex-wrap gap-2">{experience.details.map((detail) => <span className="rounded-md border border-white/[.08] bg-white/[.03] px-2.5 py-1.5 font-mono text-[10px] text-slate-400" key={detail}>{detail}</span>)}</div></div>
          </article>
        ))}
      </div>
      <div className="mt-7 flex items-center justify-end gap-3 text-sm text-slate-500 max-[620px]:items-start max-[620px]:justify-start"><span className="text-lg text-lime-200">✳</span><p className="m-0">Des contextes différents, un fil rouge : rester impliqué, apprendre vite et contribuer à l’équipe.</p></div>
    </main>
  )
}
