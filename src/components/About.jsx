import { motion } from 'framer-motion'
import { SKILLS, ABOUT_FACTS } from '../data'

/* A rotating 3D cylinder of skills, paired with a layered depth stack. */
export default function About() {
  const step = 360 / SKILLS.length

  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            A designer who <span className="gradient-text">ships</span>
          </h2>
          <p className="section-lead">
            I sit between design and engineering — sketching in Figma in the
            morning, pushing components in the afternoon. The result is work that
            survives contact with a real codebase.
          </p>

          <dl className="about-facts">
            {ABOUT_FACTS.map((f) => (
              <div className="about-fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="depth-stack" aria-hidden="true">
            <span className="depth-layer depth-1" />
            <span className="depth-layer depth-2" />
            <span className="depth-layer depth-3" />
            <span className="depth-caption">layers, not screens</span>
          </div>
        </motion.div>

        <motion.div
          className="ring-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ring-stage">
            <div className="ring3d">
              {SKILLS.map((s, i) => (
                <span
                  className="ring-chip"
                  key={s}
                  style={{ '--a': `${i * step}deg`, '--i': i }}
                >
                  {s}
                </span>
              ))}
            </div>
            <span className="ring-shadow" aria-hidden="true" />
          </div>
          <p className="ring-hint">Hover to pause</p>
        </motion.div>
      </div>
    </section>
  )
}
