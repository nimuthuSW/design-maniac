import { motion } from 'framer-motion'
import { PRINCIPLES } from '../data'

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
            <motion.div
              className="principle"
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <span className="principle-n">{p.n}</span>
              <h3 className="principle-title">{p.title}</h3>
              <p className="principle-body">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
