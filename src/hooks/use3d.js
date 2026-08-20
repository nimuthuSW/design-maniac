import { useCallback, useEffect, useRef, useState } from 'react'

/* Shared 3D interaction primitives. Everything degrades to a no-op on coarse
   pointers and whenever the visitor asks for reduced motion. */

function wants3d() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  return reduced
}

/* Pointer-tracked card tilt. Writes CSS custom properties the stylesheet reads,
   so React never re-renders while the pointer moves. */
export function useTilt({ max = 11, scale = 1.02, depth = 26 } = {}) {
  const ref = useRef(null)
  const raf = useRef(0)

  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el || !wants3d()) return
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        el.style.setProperty('--rx', `${(0.5 - py) * 2 * max}deg`)
        el.style.setProperty('--ry', `${(px - 0.5) * 2 * max}deg`)
        el.style.setProperty('--mx', `${px * 100}%`)
        el.style.setProperty('--my', `${py * 100}%`)
        el.style.setProperty('--tz', `${depth}px`)
        el.style.setProperty('--tilt-scale', scale)
        el.style.setProperty('--glare', '1')
      })
    },
    [max, scale, depth],
  )

  const onPointerLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(raf.current)
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--tz', '0px')
    el.style.setProperty('--tilt-scale', '1')
    el.style.setProperty('--glare', '0')
  }, [])

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  return { ref, onPointerMove, onPointerLeave }
}

/* Slow, lerped rotation of a 3D stage driven by the pointer anywhere on screen. */
export function useSceneParallax({ max = 16 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!wants3d()) return
    const el = ref.current
    if (!el) return

    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let raf = 0

    const onMove = (e) => {
      target.y = (e.clientX / window.innerWidth - 0.5) * 2 * max
      target.x = (0.5 - e.clientY / window.innerHeight) * 2 * max
    }

    const loop = () => {
      current.x += (target.x - current.x) * 0.06
      current.y += (target.y - current.y) * 0.06
      el.style.setProperty('--sx', `${current.x.toFixed(2)}deg`)
      el.style.setProperty('--sy', `${current.y.toFixed(2)}deg`)
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [max])

  return ref
}

/* Magnetic element: drifts toward the pointer and tips slightly in 3D. */
export function useMagnetic({ strength = 0.35, radius = 90 } = {}) {
  const ref = useRef(null)
  const raf = useRef(0)

  useEffect(() => {
    if (!wants3d()) return
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      const near = dist < Math.max(r.width, r.height) / 2 + radius

      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        el.style.setProperty('--mag-x', near ? `${dx * strength}px` : '0px')
        el.style.setProperty('--mag-y', near ? `${dy * strength}px` : '0px')
        el.style.setProperty('--mag-rx', near ? `${(-dy / r.height) * 18}deg` : '0deg')
        el.style.setProperty('--mag-ry', near ? `${(dx / r.width) * 18}deg` : '0deg')
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [strength, radius])

  return ref
}
