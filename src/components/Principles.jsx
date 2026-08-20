import { motion } from 'framer-motion'
import { PRINCIPLES } from '../data'
import { useTilt } from '../hooks/use3d'

function Principle({ item, index }) {
  const tilt = useTilt({ max: 8, scale: 1.01, depth: 22 })

  return (
    <motion.div
      className="principle-slot"
      initial={{ opacity: 0, y: 40, rotateY: index % 2 ? 12 : -12 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="principle" {...tilt}>
        <span className="card-glare" aria-hidden="true" />
        <span className="principle-n">{item.n}</span>
        <h3 className="principle-title">{item.title}</h3>
        <p className="principle-body">{item.body}</p>
        <span className="principle-ghost" aria-hidden="true">
          {item.n}
        </span>
      </div>
    </motion.div>
  )
}

export default function Principles() {
  return (
    <section className="section" id="principles">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How I work</p>
          <h2 className="section-title">
            Four things I <span className="gradient-text">believe</span>
          </h2>
        </div>

        <div className="principles">
          {PRINCIPLES.map((p, i) => (
            <Principle item={p} index={i} key={p.n} />
          ))}
        </div>
      </div>
    </section>
  )
}
