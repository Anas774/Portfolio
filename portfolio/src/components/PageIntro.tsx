import { Eyebrow } from './Eyebrow'

type PageIntroProps = {
  number: string
  eyebrow: string
  title: string
  accent: string
  description: string
}

export function PageIntro({ number, eyebrow, title, accent, description }: PageIntroProps) {
  return (
    <div className="mx-auto mb-14 max-w-7xl max-[620px]:mb-10">
      <div className="mb-7 flex items-center justify-between"><Eyebrow>{eyebrow}</Eyebrow><span className="font-mono text-xs text-slate-600"><span className="text-lime-200">{number}</span> / 05</span></div>
      <h1 className="mb-5 text-[clamp(3rem,7vw,6rem)] font-semibold leading-[.96] tracking-[-.065em] text-white max-[620px]:text-[clamp(2.8rem,12vw,4.5rem)]">{title}<br /><span className="bg-gradient-to-r from-lime-200 to-violet-300 bg-clip-text text-transparent">{accent}</span></h1>
      <p className="m-0 max-w-2xl text-base leading-7 text-slate-400">{description}</p>
    </div>
  )
}
