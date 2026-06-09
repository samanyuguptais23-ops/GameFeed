import { developerProfiles } from '../data/games'

const thumbColors = ['#5c2f66', '#256a6f', '#6c5231', '#2f5f37', '#3a3f77']

export default function ProfileScreen({ colors, developer, games, onOpenFullscreen }) {
  const profile = developerProfiles[developer] || { handle: '@creator', followers: '2.4K', bio: 'Indie creator building games for touch screens.', banner: 'linear-gradient(120deg, #3e2a1d, #20150f)' }
  const devGames = games.filter((game) => game.developer === developer)

  return (
    <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 80, background: colors.bg }}>
      <div style={{ height: 120, background: profile.banner }} />
      <div style={{ padding: '0 12px 12px' }}>
        <div style={{ width: 74, height: 74, borderRadius: 999, background: colors.card, border: `3px solid ${colors.bg}`, marginTop: -36, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.text, fontWeight: 700, fontSize: 28 }}>
          {(developer || 'c').charAt(0).toUpperCase()}
        </div>

        <h2 style={{ margin: '8px 0 2px', color: colors.text, textTransform: 'capitalize' }}>{developer || 'Creator'}</h2>
        <div style={{ color: colors.muted, fontSize: 13 }}>{profile.handle}</div>
        <div style={{ color: colors.muted, fontSize: 12, marginTop: 6 }}>{profile.followers} followers · {devGames.length} games</div>
        <p style={{ color: colors.muted, fontSize: 13, margin: '8px 0 12px' }}>{profile.bio}</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
          <button type="button" style={{ border: `1px solid ${colors.border}`, borderRadius: 12, background: colors.accent, color: '#fff', padding: '10px 0', fontWeight: 600 }}>Follow</button>
          <button type="button" style={{ border: `1px solid ${colors.border}`, borderRadius: 12, background: colors.card, color: colors.text, padding: '10px 0', fontWeight: 600 }}>Portfolio</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {devGames.map((game) => (
            <button key={game.id} type="button" onClick={() => onOpenFullscreen(game)} style={{ border: `1px solid ${colors.border}`, borderRadius: 12, background: colors.card, padding: 8, color: colors.text, textAlign: 'left' }}>
              <div style={{ height: 108, borderRadius: 10, background: thumbColors[(game.id - 1) % thumbColors.length], position: 'relative' }}>
                <span style={{ position: 'absolute', left: 8, bottom: 8, color: '#fff', fontSize: 12 }}>{game.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
