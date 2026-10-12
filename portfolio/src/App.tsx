import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Contact } from './pages/Contact'
import { Experiences } from './pages/Experiences'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'
import './styles/App.css'

export default function App() {
  return (
    <div className="portfolio-shell min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
