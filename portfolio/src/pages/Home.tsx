import { Link } from 'react-router-dom'
import { Arrow } from '../components/Arrow'
import { Eyebrow } from '../components/Eyebrow'

export function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-copy">
          <Eyebrow>Étudiant · Développeur</Eyebrow>
          <h1>Je transforme<br />les idées en <span className="serif-accent">solutions.</span></h1>
          <p className="hero-lede">Bonjour, moi c’est Anas. Je suis étudiant en informatique, attiré par le développement et la création d’outils utiles.</p>
          <p className="hero-note">Curieux de nature, j’aime apprendre en faisant et donner vie à des projets concrets.</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/projets">Découvrir mes projets <Arrow /></Link>
            <Link className="text-link" to="/contact">Parlons de votre projet <Arrow diagonal /></Link>
          </div>
          <div className="hero-meta"><span>Basé en France</span><i /> <span>Ouvert aux opportunités</span></div>
        </div>
        <div className="hero-art" aria-label="Monogramme AS dans un cercle graphique" role="img">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-stamp">CRÉER · APPRENDRE · PARTAGER ·</div>
          <div className="art-card"><span>AS</span><small>2026</small></div>
          <div className="art-spark spark-one">✳</div><div className="art-spark spark-two">✳</div>
          <div className="art-caption"><span className="caption-line" />Toujours en mouvement</div>
        </div>
      </section>

      <section className="intro-strip">
        <span className="section-index">01 / EN QUELQUES MOTS</span>
        <p>Un pied dans le code, l’autre dans le concret. J’explore, je construis et je progresse à chaque projet.</p>
        <Link to="/experiences" className="round-link" aria-label="Voir mes expériences"><Arrow diagonal /></Link>
      </section>

      <section className="home-grid section-block">
        <div className="section-heading">
          <Eyebrow>Mon univers</Eyebrow>
          <h2>Ce que j’apporte<br />à la <span className="serif-accent">table.</span></h2>
        </div>
        <div className="feature-list">
          <Link to="/competences" className="feature-row"><span className="feature-number">01</span><span><strong>Une base technique polyvalente</strong><small>Du développement web aux bases de données.</small></span><Arrow diagonal /></Link>
          <Link to="/experiences" className="feature-row"><span className="feature-number">02</span><span><strong>L’envie de faire équipe</strong><small>Écouter, partager et avancer ensemble.</small></span><Arrow diagonal /></Link>
          <Link to="/projets" className="feature-row"><span className="feature-number">03</span><span><strong>La curiosité en pratique</strong><small>Apprendre de nouvelles choses, projet après projet.</small></span><Arrow diagonal /></Link>
        </div>
      </section>

      <section className="home-cta">
        <span className="cta-star">✳</span>
        <div><Eyebrow>La suite s’écrit ensemble</Eyebrow><h2>Une idée à faire<br /><span className="serif-accent">grandir ?</span></h2></div>
        <Link className="button button-cream" to="/contact">Entrons en contact <Arrow diagonal /></Link>
      </section>
    </main>
  )
}
