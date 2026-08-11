import { useEffect, useState } from 'react'

const LINKS = [
  {href: '#about', label: 'About'},
  { href: '#work', label: 'Work' },
  { href: '#showcase', label: 'Playground' },
  { href: '#principles', label: 'Principles' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Design Maniac — home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">Design<em>Maniac</em></span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title="Toggle theme"
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb">
                {theme === 'dark' ? '🌙' : '☀️'}
              </span>
            </span>
          </button>
          <a className="btn btn-sm" href="#contact">
            Let’s talk
          </a>
        </div>
      </div>
    </header>
  )
}
