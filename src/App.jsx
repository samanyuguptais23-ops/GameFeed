import { useContext, useMemo, useState } from 'react'
import BottomNav from './components/BottomNav'
import DiscoverScreen from './components/DiscoverScreen'
import Feed from './components/Feed'
import FullscreenGame from './components/FullscreenGame'
import ProfileScreen from './components/ProfileScreen'
import UploadScreen from './components/UploadScreen'
import { games } from './data/games'
import { ThemeContext } from './context/theme-context'

const initialLoadState = games.reduce((acc, game) => ({ ...acc, [game.id]: false }), {})

function App() {
  const { colors, isLight, toggleTheme } = useContext(ThemeContext)
  const [currentScreen, setCurrentScreen] = useState('feed')
  const [previousScreen, setPreviousScreen] = useState('feed')
  const [selectedDeveloper, setSelectedDeveloper] = useState(games[0].developer)
  const [fullscreenGame, setFullscreenGame] = useState(null)
  const [loadedMap, setLoadedMap] = useState(initialLoadState)

  const content = useMemo(() => {
    if (currentScreen === 'fullscreen') {
      return <FullscreenGame game={fullscreenGame} colors={colors} onBack={() => setCurrentScreen(previousScreen)} />
    }

    if (currentScreen === 'discover') {
      return <DiscoverScreen colors={colors} games={games} onOpenFullscreen={(game) => {
        setPreviousScreen('discover')
        setFullscreenGame(game)
        setCurrentScreen('fullscreen')
      }} />
    }

    if (currentScreen === 'upload') return <UploadScreen colors={colors} />

    if (currentScreen === 'profile') {
      return <ProfileScreen colors={colors} developer={selectedDeveloper} games={games} onOpenFullscreen={(game) => {
        setPreviousScreen('profile')
        setFullscreenGame(game)
        setCurrentScreen('fullscreen')
      }} />
    }

    return (
      <Feed
        colors={colors}
        isLight={isLight}
        onToggleTheme={toggleTheme}
        games={games}
        loadedMap={loadedMap}
        onLoadGame={(id) => setLoadedMap((prev) => (prev[id] ? prev : { ...prev, [id]: true }))}
        onOpenProfile={(developer) => {
          setSelectedDeveloper(developer)
          setCurrentScreen('profile')
        }}
        onOpenFullscreen={(game) => {
          setPreviousScreen('feed')
          setFullscreenGame(game)
          setCurrentScreen('fullscreen')
        }}
      />
    )
  }, [colors, currentScreen, fullscreenGame, isLight, loadedMap, previousScreen, selectedDeveloper, toggleTheme])

  return (
    <div style={{ width: 390, height: '100vh', margin: '0 auto', background: colors.bg, color: colors.text, borderLeft: `1px solid ${colors.border}`, borderRight: `1px solid ${colors.border}`, overflow: 'hidden', fontFamily: 'Inter, system-ui, sans-serif', position: 'relative' }}>
      {content}
      {currentScreen !== 'fullscreen' && <BottomNav currentScreen={currentScreen} onChangeScreen={setCurrentScreen} colors={colors} />}
    </div>
  )
}

export default App
