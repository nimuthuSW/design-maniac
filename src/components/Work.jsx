import { motion } from 'framer-motion'
import { PROJECTS } from '../data'
import { useTilt } from '../hooks/use3d'

const reveal = {
  hidden: { opacity: 0, y: 60, rotateX: -18, z: -120 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    z: 0,
    transition: { duration: 0.9, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

function WorkCard({ project, index }) {
  const tilt = useTilt({ max: 9, scale: 1.015, depth: 34 })

  return (
    <motion.div
      className="work-slot"
      custom={index}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      <article className="work-card" {...tilt} data-hover>
        <span className="card-glare" aria-hidden="true" />
        <div className="work-visual" style={{ background: project.gradient }}>
          <div className="work-visual-grain" />
          <span className="work-year">{project.year}</span>
          <span className="work-glyph">{project.name[0]}</span>
          <span className="work-visual-sheen" aria-hidden="true" />
        </div>
        <div className="work-body">
          <div className="work-top">
            <h3 className="work-name">{project.name}</h3>
            <span className="work-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <p className="work-tag">{project.tag}</p>
          <p className="work-blurb">{project.blurb}</p>
          <ul className="work-metrics">
            {project.metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </article>
    </motion.div>
  )
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
            <WorkCard project={p} index={i} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
