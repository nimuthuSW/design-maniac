import { SKILLS } from '../data'

export default function Marquee() {
  const row = [...SKILLS, ...SKILLS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((s, i) => (
          <span className="marquee-item" key={i}>
            {s}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
