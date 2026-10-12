import { PageIntro } from '../components/PageIntro'
import { Arrow } from '../components/Arrow'

export function Projects() {
  return (
    <main className="inner-page">
      <PageIntro number="03" eyebrow="Du concret, bientôt" title="Des idées" accent="en mouvement." description="Les projets arrivent bientôt. Je partagerai ici le besoin de départ, la solution imaginée et ce que chaque réalisation m’a appris." />
      <section className="projects-empty">
        <div className="project-visual" aria-hidden="true"><span className="visual-orbit" /><span className="visual-core">✳</span><span className="visual-label visual-label-one">IDÉE</span><span className="visual-label visual-label-two">PROTOTYPE</span><span className="visual-label visual-label-three">RÉALISATION</span></div>
        <div className="project-empty-copy"><span className="project-count">01 — À SUIVRE</span><h2>La prochaine<br />histoire commence ici.</h2><p>Je prépare les fiches projets avec leurs images et les apprentissages associés.</p><a className="text-link" href="mailto:anassemghouni774@gmail.com?subject=Portfolio%20-%20Projets">Demander les projets par mail <Arrow diagonal /></a></div>
      </section>
    </main>
  )
}
