const navItems = [
  { key: 'feed', label: 'Home', icon: '🏠' },
  { key: 'discover', label: 'Discover', icon: '🧭' },
  { key: 'upload', label: 'Upload', icon: '+' },
  { key: 'profile', label: 'Profile', icon: '👤' },
]

export default function BottomNav({ currentScreen, onChangeScreen, colors }) {
  return (
    <nav style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 64, borderTop: `1px solid ${colors.border}`, background: colors.card, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      {navItems.map((item) => {
        const active = currentScreen === item.key
        const upload = item.key === 'upload'
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChangeScreen(item.key)}
            style={{
              border: 'none',
              background: upload ? colors.accent : 'transparent',
              color: upload ? '#fff' : active ? colors.accent : colors.muted,
              borderRadius: upload ? 999 : 0,
              width: upload ? 44 : 'auto',
              height: upload ? 44 : 'auto',
              marginTop: upload ? -14 : 0,
              fontSize: upload ? 24 : 12,
              fontWeight: 600,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <span>{item.icon}</span>
            {!upload && <span>{item.label}</span>}
          </button>
        )
      })}
    </nav>
  )
}
