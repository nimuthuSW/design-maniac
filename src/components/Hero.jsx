import { motion } from 'framer-motion'
import { STATS } from '../data'

const line = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const word = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

function Words({ text }) {
  return (
    <span className="line">
      {text.split(' ').map((w, i) => (
        <span className="word-mask" key={i}>
          <motion.span className="word" variants={word}>
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Product & Interface Designer — available for 2026
        </motion.p>

        <motion.h1
          className="hero-title"
          variants={line}
          initial="hidden"
          animate="show"
        >
          <Words text="Designing interfaces" />
          <Words text="people actually" />
          <span className="line">
            <span className="word-mask">
              <motion.span className="word gradient-text" variants={word}>
                feel.
              </motion.span>
            </span>
          </span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          I turn fuzzy problems into clear, kinetic products — obsessing over
          type, motion, and the tiny details that make software feel alive.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
        >
          <a className="btn" href="#work">
            View selected work <span aria-hidden="true">↓</span>
          </a>
          <a className="btn btn-ghost" href="#contact">
            Start a project
          </a>
        </motion.div>

        <motion.dl
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat-value">{s.value}</dt>
              <dd className="stat-label">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <span className="scroll-line" />
      </div>
    </section>
  )
}
