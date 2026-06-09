import { useEffect, useRef } from 'react'

const avatarColors = ['#e8420a', '#2870ff', '#18a058', '#a93dd4', '#ff9f1c']

export default function GameCard({ game, colors, isLoaded, onLoad, activeGameId, onVisibilityChange, onOpenProfile, onOpenFullscreen }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const node = cardRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isLoaded && entry.intersectionRatio > 0.2) onLoad(game.id)
          if (entry.intersectionRatio > 0.6) onVisibilityChange(game.id)
        }
      },
      { threshold: [0.2, 0.6] },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [game.id, isLoaded, onLoad, onVisibilityChange])

  const avatarColor = avatarColors[(game.id - 1) % avatarColors.length]

  return (
    <article ref={cardRef} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 12, margin: '12px 12px 16px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12 }}>
        <button type="button" onClick={() => onOpenProfile(game.developer)} style={{ border: 'none', padding: 0, background: 'transparent', display: 'flex', alignItems: 'center', gap: 10, color: colors.text }}>
          <div style={{ width: 38, height: 38, borderRadius: 999, background: avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
            {game.devInitial}
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{game.developer}</div>
            {game.isNewCreator && <span style={{ display: 'inline-block', marginTop: 3, borderRadius: 999, padding: '2px 7px', fontSize: 10, background: colors.success, color: '#fff' }}>New Creator</span>}
          </div>
        </button>
        <span style={{ border: `1px solid ${colors.border}`, borderRadius: 999, padding: '4px 10px', fontSize: 12, color: colors.muted }}>{game.genre}</span>
      </div>

      <div style={{ width: '100%', height: 350, overflow: 'hidden', position: 'relative', background: '#020205' }}>
        {isLoaded ? (
          <iframe
            src={game.src}
            title={game.title}
            scrolling="no"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 960,
              height: 600,
              border: 'none',
              transform: 'scale(0.38)',
              transformOrigin: 'top left',
              pointerEvents: activeGameId === game.id ? 'auto' : 'none',
            }}
          />
        ) : (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.muted }}>Loading when visible...</div>
        )}

        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 36, background: 'rgba(6,6,10,0.75)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', color: '#fff' }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{game.title}</span>
          <button type="button" onClick={() => onOpenFullscreen(game)} style={{ border: 'none', background: 'transparent', color: '#fff', fontSize: 17 }}>⤢</button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px 12px', color: colors.muted, fontSize: 14 }}>
        <span>♡ {game.likes}</span>
        <span>💬 {game.comments}</span>
        <span>↗ Share</span>
        <span>🔖</span>
      </div>
      <p style={{ margin: '0 12px 12px', fontSize: 13, color: colors.muted }}>{game.description}</p>
    </article>
  )
}
