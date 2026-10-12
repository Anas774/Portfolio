import { PageIntro } from '../components/PageIntro'
import { skills } from '../data/portfolio'

export function Skills() {
  return (
    <main className="inner-page">
      <PageIntro number="02" eyebrow="Ce que je sais faire" title="Des outils pour" accent="construire." description="Des langages aux méthodes de conception, voici les outils et les domaines que j’explore au quotidien." />
      <div className="skills-grid">
        {skills.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-top"><span className="skill-index">0{index + 1}</span><span className="skill-arrow">↗</span></div>
            <h2>{group.title}</h2><p>{group.note}</p>
            <div className="tag-list">{group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="skills-note"><span className="note-mark">✳</span><p>Je continue d’élargir ma boîte à outils au fil de mes projets et de mes expériences.</p></div>
    </main>
  )
}
