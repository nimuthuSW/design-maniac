import { useEffect, useRef, useState } from 'react'

// A soft gradient glow that trails the pointer. Hidden on touch / reduced-motion.
export default function Cursor() {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    let raf = 0
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const target = { ...pos }

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.14
      pos.y += (target.y - pos.y) * 0.14
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
