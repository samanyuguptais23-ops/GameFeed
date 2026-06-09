export default function FeedHeader({ colors, activeTab, onTabChange, onToggleTheme, isLight }) {
  const tabs = ['Trending', 'Fresh', 'For You']

  return (
    <div style={{ padding: '16px 16px 10px', background: colors.bg, borderBottom: `1px solid ${colors.border}`, position: 'sticky', top: 0, zIndex: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <strong style={{ color: colors.accent, fontSize: 24 }}>GameFeed</strong>
        <button type="button" onClick={onToggleTheme} style={{ border: `1px solid ${colors.border}`, borderRadius: 999, height: 34, width: 34, background: colors.card, color: colors.text }}>
          {isLight ? '🌙' : '☀️'}
        </button>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {tabs.map((tab) => {
          const active = activeTab === tab
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              style={{
                border: 'none',
                borderBottom: active ? `2px solid ${colors.accent}` : '2px solid transparent',
                background: 'transparent',
                color: active ? colors.text : colors.muted,
                fontSize: 14,
                fontWeight: 600,
                padding: '8px 4px',
              }}
            >
              {tab}
            </button>
          )
        })}
      </div>
    </div>
  )
}
