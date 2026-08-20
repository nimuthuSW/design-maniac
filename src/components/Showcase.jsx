import { useState } from 'react'
import { motion } from 'framer-motion'

/* An interactive "playground" that demonstrates interaction-design craft:
   a live gradient mixer, a segmented control, an animated switch and meter. */

export default function Showcase() {
  const [hue, setHue] = useState(268)
  const [spread, setSpread] = useState(70)
  const [angle, setAngle] = useState(120)
  const [density, setDensity] = useState('cozy')
  const [glow, setGlow] = useState(true)
  const [flipped, setFlipped] = useState(false)

  const c1 = `hsl(${hue} 90% 62%)`
  const c2 = `hsl(${(hue + spread) % 360} 90% 60%)`
  const gradient = `linear-gradient(${angle}deg, ${c1}, ${c2})`

  const copyCss = () => {
    const css = `background: ${gradient};`
    navigator.clipboard?.writeText(css)
  }

  return (
    <section className="section showcase" id="showcase">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Playground</p>
          <h2 className="section-title">
            Design is <span className="gradient-text">interactive</span> — so is this
          </h2>
          <p className="section-lead">
            Real components, not screenshots. Poke at them.
          </p>
        </div>

        <div className="play-grid">
          {/* Gradient mixer */}
          <div className="play-card play-card--wide" data-hover>
            <div className="play-preview">
              <div
                className="play-swatch"
                style={{
                  background: gradient,
                  boxShadow: glow ? `0 20px 60px -12px ${c1}` : 'none',
                }}
              >
                <span className="play-swatch-label">{`${angle}° · ${hue}°`}</span>
              </div>
            </div>
            <div className="play-controls">
              <div className="play-row">
                <span>Hue</span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={hue}
                  onChange={(e) => setHue(+e.target.value)}
                  style={{ accentColor: c1 }}
                  aria-label="Hue"
                />
              </div>
              <div className="play-row">
                <span>Spread</span>
                <input
                  type="range"
                  min="10"
                  max="180"
                  value={spread}
                  onChange={(e) => setSpread(+e.target.value)}
                  style={{ accentColor: c2 }}
                  aria-label="Spread"
                />
              </div>
              <div className="play-row">
                <span>Angle</span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={angle}
                  onChange={(e) => setAngle(+e.target.value)}
                  aria-label="Angle"
                />
              </div>
              <div className="play-row play-row--split">
                <button className="chip" onClick={() => setGlow((g) => !g)}>
                  Glow: <strong>{glow ? 'on' : 'off'}</strong>
                </button>
                <button className="btn btn-sm" onClick={copyCss}>
                  Copy CSS
                </button>
              </div>
            </div>
          </div>

          {/* Segmented control + switch */}
          <div className="play-card" data-hover>
            <p className="play-title">Controls</p>
            <div className="segmented" role="tablist" aria-label="Density">
              {['compact', 'cozy', 'roomy'].map((d) => (
                <button
                  key={d}
                  role="tab"
                  aria-selected={density === d}
                  className={`seg ${density === d ? 'is-active' : ''}`}
                  onClick={() => setDensity(d)}
                >
                  {density === d && (
                    <motion.span
                      layoutId="seg-pill"
                      className="seg-pill"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className="seg-label">{d}</span>
                </button>
              ))}
            </div>

            <button
              className={`switch ${glow ? 'is-on' : ''}`}
              onClick={() => setGlow((g) => !g)}
              role="switch"
              aria-checked={glow}
            >
              <span className="switch-track">
                <motion.span
                  layout
                  className="switch-thumb"
                  transition={{ type: 'spring', stiffness: 700, damping: 34 }}
                />
              </span>
              <span className="switch-caption">Ambient glow</span>
            </button>
          </div>

          {/* Live meter */}
          <div className="play-card" data-hover>
            <p className="play-title">Signal</p>
            <div className="meter">
              <motion.span
                className="meter-fill"
                style={{ background: gradient }}
                animate={{ width: `${(spread / 180) * 100}%` }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              />
            </div>
            <p className="meter-value">{Math.round((spread / 180) * 100)}%</p>
            <div className="dots">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="dot"
                  style={{
                    background:
                      i < Math.round((spread / 180) * 5) ? c1 : 'var(--line-strong)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Live 3D cube painted by the mixer */}
          <div className="play-card play-card--cube" data-hover>
            <p className="play-title">Object</p>
            <div className="mini-scene">
              <div className="mini-cube" style={{ '--cube-spin': `${angle / 24}s` }}>
                {['front', 'back', 'right', 'left', 'top', 'bottom'].map((f) => (
                  <span
                    key={f}
                    className={`mini-face mini-${f}`}
                    style={{ background: gradient }}
                  />
                ))}
              </div>
              <span
                className="mini-shadow"
                style={{ background: glow ? c2 : 'transparent' }}
              />
            </div>
            <p className="play-caption">
              Faces inherit the mixer — drag a slider and watch it repaint.
            </p>
          </div>

          {/* Click-to-flip card */}
          <div className="play-card play-card--flip" data-hover>
            <p className="play-title">Flip card</p>
            <button
              className={`flip ${flipped ? 'is-flipped' : ''}`}
              onClick={() => setFlipped((f) => !f)}
              aria-pressed={flipped}
              aria-label="Flip the card"
            >
              <span className="flip-inner">
                <span className="flip-face flip-front" style={{ background: gradient }}>
                  <span className="flip-kicker">{density}</span>
                  <span className="flip-title">Tap to turn</span>
                </span>
                <span className="flip-face flip-back">
                  <span className="flip-kicker">Back side</span>
                  <span className="flip-body">
                    Real depth: two faces, one transform, zero images. Backface
                    culling does the rest.
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
