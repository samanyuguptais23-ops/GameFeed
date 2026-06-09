import { genres } from '../data/games'

const boxColors = ['#3b2549', '#27404d', '#522f25', '#2e4a2f', '#3a365c']

export default function DiscoverScreen({ colors, games, onOpenFullscreen }) {
  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: 12, paddingBottom: 80, background: colors.bg }}>
      <div style={{ border: `1px solid ${colors.border}`, borderRadius: 12, background: colors.card, display: 'flex', alignItems: 'center', padding: '10px 12px', color: colors.muted }}>
        <span style={{ marginRight: 8 }}>🔎</span>
        <span>Search games, tags, developers...</span>
      </div>

      <div style={{ margin: '12px 0', overflowX: 'auto', display: 'flex', gap: 8, paddingBottom: 2 }}>
        {genres.map((genre) => (
          <span key={genre} style={{ border: `1px solid ${colors.border}`, borderRadius: 999, padding: '6px 10px', color: colors.muted, whiteSpace: 'nowrap', fontSize: 12 }}>
            {genre}
          </span>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {games.map((game) => (
          <button key={game.id} type="button" onClick={() => onOpenFullscreen(game)} style={{ border: `1px solid ${colors.border}`, borderRadius: 12, background: colors.card, padding: 8, textAlign: 'left', color: colors.text }}>
            <div style={{ height: 120, borderRadius: 10, background: boxColors[(game.id - 1) % boxColors.length], position: 'relative', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', left: 8, bottom: 8, fontSize: 12, color: '#fff', fontWeight: 600 }}>{game.title}</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>{game.title}</div>
            <div style={{ fontSize: 12, color: colors.muted }}>{game.developer}</div>
            <div style={{ fontSize: 11, color: colors.muted }}>{game.genre}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
