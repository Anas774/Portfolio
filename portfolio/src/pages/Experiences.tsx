import { PageIntro } from '../components/PageIntro'
import { experiences } from '../data/portfolio'

export function Experiences() {
  return (
    <main className="inner-page">
      <PageIntro number="04" eyebrow="Sur le terrain" title="Apprendre en" accent="faisant." description="Du développement en collectivité à l’animation et à la logistique, chaque expérience m’a appris une nouvelle façon de travailler." />
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.number}>
            <div className="experience-date"><span>{experience.period}</span><small>{experience.duration}</small></div>
            <div className="experience-main"><span className="experience-company">{experience.company}</span><h2>{experience.title}</h2><div className="tag-list">{experience.details.map((detail) => <span className="skill-tag" key={detail}>{detail}</span>)}</div></div>
            <span className="experience-index">{experience.number}</span>
          </article>
        ))}
      </div>
      <div className="experience-footnote"><span className="note-mark">✳</span><p>Des contextes différents, un fil rouge : rester impliqué, apprendre vite et contribuer à l’équipe.</p></div>
    </main>
  )
}
