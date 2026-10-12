import { Link } from 'react-router-dom'
import { Arrow } from '../components/Arrow'
import { Eyebrow } from '../components/Eyebrow'

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[65vh] max-w-7xl flex-col items-start justify-center px-6 py-20 max-[620px]:px-5">
      <Eyebrow>Oups, mauvaise direction</Eyebrow>
      <h1 className="mt-7 mb-8 text-6xl font-semibold leading-none tracking-[-.06em] text-white max-[620px]:text-5xl">Cette page a pris<br /><span className="text-lime-200">un autre chemin.</span></h1>
      <Link className="group inline-flex min-h-[50px] items-center gap-4 rounded-xl bg-lime-300 px-5 text-sm font-semibold text-[#10130c] transition hover:bg-lime-200" to="/">Retour à l’accueil <Arrow /></Link>
    </main>
  )
}
