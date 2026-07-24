import { motion } from 'framer-motion'
import { PROJECTS } from '../data'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">
            A few things I’m <span className="gradient-text">proud of</span>
          </h2>
        </div>

        <div className="work-grid">
          {PROJECTS.map((p, i) => (
            <motion.article
              className="work-card"
              key={p.id}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              data-hover
            >
              <div className="work-visual" style={{ background: p.gradient }}>
                <div className="work-visual-grain" />
                <span className="work-year">{p.year}</span>
                <span className="work-glyph">{p.name[0]}</span>
              </div>
              <div className="work-body">
                <div className="work-top">
                  <h3 className="work-name">{p.name}</h3>
                  <span className="work-arrow" aria-hidden="true">↗</span>
                </div>
                <p className="work-tag">{p.tag}</p>
                <p className="work-blurb">{p.blurb}</p>
                <ul className="work-metrics">
                  {p.metrics.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
