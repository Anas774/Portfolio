import { Link } from 'react-router-dom'
import { Arrow } from '../components/Arrow'
import { Eyebrow } from '../components/Eyebrow'

export function NotFound() {
  return (
    <main className="inner-page not-found">
      <Eyebrow>Oups, mauvaise direction</Eyebrow>
      <h1>Cette page a pris<br /><span className="serif-accent">un autre chemin.</span></h1>
      <Link className="button button-dark" to="/">Retour à l’accueil <Arrow /></Link>
    </main>
  )
}
