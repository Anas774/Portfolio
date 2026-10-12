import { PageIntro } from '../components/PageIntro'
import { Arrow } from '../components/Arrow'

export function Contact() {
  return (
    <main className="inner-page contact-page">
      <PageIntro number="05" eyebrow="À votre tour" title="Faisons" accent="connaissance." description="Une opportunité, une collaboration ou simplement envie d’échanger ? Je serai ravi d’en discuter." />
      <section className="contact-panel">
        <div className="contact-main"><span className="contact-overline">LE MEILLEUR MOYEN DE ME JOINDRE</span><a className="email-link" href="mailto:anassemghouni774@gmail.com">anassemghouni774<br className="email-break" />@gmail.com <Arrow diagonal /></a><p>Je réponds avec plaisir aux messages autour du développement, des stages et de nouvelles idées.</p></div>
        <div className="contact-side"><span className="contact-overline">RETROUVEZ-MOI AUSSI</span><a href="https://www.linkedin.com/in/anassemghouni" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://github.com/Anas774" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><div className="cv-note"><span>CV</span><p>Disponible bientôt</p></div></div>
      </section>
      <div className="contact-signoff"><span className="note-mark">✳</span><span>Au plaisir de vous lire.</span></div>
    </main>
  )
}
