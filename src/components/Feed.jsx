import { useState } from 'react'
import GameCard from './GameCard'
import FeedHeader from './FeedHeader'

export default function Feed({ colors, isLight, onToggleTheme, games, loadedMap, onLoadGame, onOpenProfile, onOpenFullscreen }) {
  const [activeTab, setActiveTab] = useState('Trending')
  const [activeGameId, setActiveGameId] = useState(games[0]?.id)

  return (
    <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 80, background: colors.bg }}>
      <FeedHeader colors={colors} activeTab={activeTab} onTabChange={setActiveTab} onToggleTheme={onToggleTheme} isLight={isLight} />
      {games.map((game) => (
        <GameCard
          key={`${activeTab}-${game.id}`}
          game={game}
          colors={colors}
          isLoaded={Boolean(loadedMap[game.id])}
          onLoad={onLoadGame}
          activeGameId={activeGameId}
          onVisibilityChange={setActiveGameId}
          onOpenProfile={onOpenProfile}
          onOpenFullscreen={onOpenFullscreen}
        />
      ))}
    </div>
  )
}
