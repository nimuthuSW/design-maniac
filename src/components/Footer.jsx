import { useMagnetic } from '../hooks/use3d'

const SOCIALS = [
  { label: 'Email', href: 'mailto:nimuthusw4@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/nimuthuSW' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nimuthusw/' },
]

export default function Footer() {
  const magnet = useMagnetic({ strength: 0.28, radius: 110 })

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="cta-block">
          <p className="eyebrow">Contact</p>
          <h2 className="cta-title">
            Have something <span className="gradient-text">worth building?</span>
          </h2>
          <p className="cta-sub">
            I take on a couple of projects each quarter. Let’s make yours feel
            effortless.
          </p>

          <div className="magnet-area">
            <a className="btn btn-lg magnet" ref={magnet} href="mailto:nimuthusw4@gmail.com">
              nimuthusw4@gmail.com <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="footer-bar">
          <span className="footer-brand">
            Design<em>Maniac</em>
          </span>
          <nav className="footer-socials" aria-label="Social links">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </nav>
          <span className="footer-copy">
            © {new Date().getFullYear()} — Designed & built with care.
          </span>
        </div>
      </div>
    </footer>
  )
}
