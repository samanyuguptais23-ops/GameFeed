export default function FullscreenGame({ game, colors, onBack }) {
  if (!game) return null

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000' }}>
      <iframe src={game.src} title={`${game.title} fullscreen`} scrolling="no" style={{ border: 'none', width: '100vw', height: '100vh', display: 'block' }} />
      <button type="button" onClick={onBack} style={{ position: 'absolute', top: 12, left: 12, border: `1px solid ${colors.border}`, borderRadius: 999, width: 34, height: 34, background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: 20 }}>
        ←
      </button>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '10px 12px', background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: 12 }}>
        <strong>{game.title}</strong> · {game.developer}
      </div>
    </div>
  )
}
