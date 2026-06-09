export default function UploadScreen({ colors }) {
  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: 12, paddingBottom: 80, background: colors.bg }}>
      <h2 style={{ color: colors.text, margin: '4px 0 12px' }}>Upload Game</h2>
      <div style={{ border: `2px dashed ${colors.border}`, borderRadius: 12, background: colors.card, height: 130, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: colors.muted, marginBottom: 14 }}>
        <div style={{ fontSize: 24 }}>⬆️</div>
        <div>Drop your game ZIP here</div>
      </div>

      <label style={{ color: colors.muted, fontSize: 12 }}>Game Title</label>
      <input type="text" style={{ width: '100%', margin: '6px 0 10px', borderRadius: 12, border: `1px solid ${colors.border}`, background: colors.card, color: colors.text, padding: '10px 12px' }} />

      <label style={{ color: colors.muted, fontSize: 12 }}>Description</label>
      <textarea maxLength={140} style={{ width: '100%', margin: '6px 0 2px', borderRadius: 12, border: `1px solid ${colors.border}`, background: colors.card, color: colors.text, padding: '10px 12px', minHeight: 88, resize: 'none' }} />
      <div style={{ textAlign: 'right', fontSize: 11, color: colors.muted, marginBottom: 10 }}>0 / 140</div>

      <label style={{ color: colors.muted, fontSize: 12 }}>Genre</label>
      <select style={{ width: '100%', margin: '6px 0 10px', borderRadius: 12, border: `1px solid ${colors.border}`, background: colors.card, color: colors.text, padding: '10px 12px' }}>
        <option>Action</option>
        <option>Puzzle</option>
        <option>Arcade</option>
        <option>Narrative</option>
      </select>

      <label style={{ color: colors.muted, fontSize: 12 }}>Tags</label>
      <input type="text" style={{ width: '100%', margin: '6px 0 8px', borderRadius: 12, border: `1px solid ${colors.border}`, background: colors.card, color: colors.text, padding: '10px 12px' }} />
      <div style={{ fontSize: 11, color: colors.muted, marginBottom: 12 }}>Max 50MB</div>

      <button type="button" style={{ width: '100%', border: 'none', borderRadius: 12, padding: '14px 12px', background: colors.accent, color: '#fff', fontWeight: 700, fontSize: 15 }}>
        Publish Game
      </button>
    </div>
  )
}
