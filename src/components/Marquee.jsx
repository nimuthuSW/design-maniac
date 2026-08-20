import { SKILLS } from '../data'

/* Two counter-scrolling bands sitting at different depths on a tilted plane. */
export default function Marquee() {
  const row = [...SKILLS, ...SKILLS]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-stage">
        <div className="marquee-band marquee-band--front">
          <div className="marquee-track">
            {row.map((s, i) => (
              <span className="marquee-item" key={i}>
                {s}
                <span className="marquee-dot">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-band marquee-band--back">
          <div className="marquee-track marquee-track--reverse">
            {row.map((s, i) => (
              <span className="marquee-item" key={i}>
                {s}
                <span className="marquee-dot">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
