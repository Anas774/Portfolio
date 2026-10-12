import { PageIntro } from '../components/PageIntro'
import { Arrow } from '../components/Arrow'

export function Contact() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 max-[620px]:px-5 max-[620px]:py-16">
      <PageIntro number="05" eyebrow="À votre tour" title="Faisons" accent="connaissance." description="Une opportunité, une collaboration ou simplement envie d’échanger ? Je serai ravi d’en discuter." />
      <section className="grid grid-cols-[1.35fr_.65fr] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1018] max-[800px]:grid-cols-1">
        <div className="flex flex-col justify-center border-r border-white/[.07] p-10 max-[800px]:border-r-0 max-[800px]:border-b max-[620px]:p-7"><span className="font-mono text-[10px] uppercase tracking-[.16em] text-lime-200">Le meilleur moyen de me joindre</span><a className="group my-6 inline-flex w-fit items-start gap-3 break-all font-semibold leading-tight tracking-[-.05em] text-white transition hover:text-lime-200 max-[620px]:text-[clamp(1.5rem,7vw,2.5rem)] sm:text-4xl" href="mailto:anassemghouni774@gmail.com">anassemghouni774<br />@gmail.com <span className="pt-1 text-lg text-lime-200"><Arrow diagonal /></span></a><p className="m-0 max-w-md text-sm leading-6 text-slate-400">Je réponds avec plaisir aux messages autour du développement, des stages et de nouvelles idées.</p></div>
        <div className="flex flex-col justify-center p-10 max-[620px]:p-7"><span className="mb-3 font-mono text-[10px] uppercase tracking-[.16em] text-slate-500">Retrouvez-moi aussi</span><a className="group flex justify-between border-b border-white/[.08] py-4 text-sm text-slate-200 transition hover:text-lime-200" href="https://www.linkedin.com/in/anassemghouni" target="_blank" rel="noreferrer">LinkedIn <span className="text-lime-200"><Arrow diagonal /></span></a><a className="group flex justify-between border-b border-white/[.08] py-4 text-sm text-slate-200 transition hover:text-lime-200" href="https://github.com/Anas774" target="_blank" rel="noreferrer">GitHub <span className="text-lime-200"><Arrow diagonal /></span></a><div className="mt-6 flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[.03] font-mono text-xs text-violet-200">CV</span><p className="m-0 text-xs text-slate-500">Disponible bientôt</p></div></div>
      </section>
      <div className="mt-5 flex items-center justify-end gap-3 text-sm text-slate-500"><span className="text-lime-200">✳</span><span>Au plaisir de vous lire.</span></div>
    </main>
  )
}
