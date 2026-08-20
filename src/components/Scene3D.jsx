import { useSceneParallax } from '../hooks/use3d'

const FACES = ['front', 'back', 'right', 'left', 'top', 'bottom']

/* The hero centrepiece: a rotating glass cube, orbiting rings and two floating
   UI panes, all living in the same 3D stage that tips with the pointer. */
export default function Scene3D() {
  const stage = useSceneParallax({ max: 15 })

  return (
    <div className="scene" aria-hidden="true">
      <span className="scene-glow" />

      <div className="scene-stage" ref={stage}>
        <div className="cube">
          {FACES.map((f) => (
            <span key={f} className={`cube-face cube-${f}`} />
          ))}
        </div>

        <div className="orbit orbit-a">
          <span className="orbit-dot" />
        </div>
        <div className="orbit orbit-b">
          <span className="orbit-dot" />
        </div>
        <div className="orbit orbit-c">
          <span className="orbit-dot" />
        </div>

        <div className="pane pane-1">
          <span className="pane-bar" />
          <span className="pane-line" />
          <span className="pane-line short" />
          <span className="pane-pill" />
        </div>

        <div className="pane pane-2">
          <span className="pane-swatch" />
          <span className="pane-line" />
          <span className="pane-line short" />
        </div>

        <span className="shard shard-1" />
        <span className="shard shard-2" />
        <span className="shard shard-3" />
      </div>
    </div>
  )
}
