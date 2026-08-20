import { useTheme } from './hooks/useTheme'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Work from './components/Work'
import Showcase from './components/Showcase'
import Principles from './components/Principles'
import Footer from './components/Footer'
import './styles/App.css'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>
      <div className="bg-noise" aria-hidden="true" />

      <Nav theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Showcase />
        <Principles />
      </main>

      <Footer />
    </>
  )
}
