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
    <div className="page-intro">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="page-title-row"><h1>{title}<br /><span className="serif-accent">{accent}</span></h1><span className="page-number">{number} <span>/ 05</span></span></div>
      <p>{description}</p>
    </div>
  )
}
