import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './theme-context'

const themes = {
  dark: { bg: '#0a0a0f', card: '#111118', border: '#1e1e2e', accent: '#e8420a', text: '#e8e8f0', muted: '#6b6b8a', success: '#18a058' },
  light: { bg: '#faf7f2', card: '#ffffff', border: '#e5ddd0', accent: '#e8420a', text: '#1a1208', muted: '#9a8f7e', success: '#18a058' },
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('gamefeed-theme') || 'dark')

  useEffect(() => {
    localStorage.setItem('gamefeed-theme', theme)
  }, [theme])

  const value = useMemo(() => ({ theme, colors: themes[theme], isLight: theme === 'light', toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')) }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
