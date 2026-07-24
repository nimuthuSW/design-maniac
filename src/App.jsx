import { useTheme } from './hooks/useTheme'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
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
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>

      <Nav theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <Marquee />
        <Work />
        <Showcase />
        <Principles />
      </main>

      <Footer />
    </>
  )
}
