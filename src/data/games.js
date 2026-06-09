export const games = [
  { id: 1, src: '/games/game1/index.html', title: 'Pac-Man', description: 'Classic maze chase. Eat all the dots, avoid the ghosts.', developer: 'retrodev', devInitial: 'R', genre: 'Arcade', likes: 342, comments: 28, isNewCreator: false },
  { id: 2, src: '/games/game2/index.html', title: 'Flappy Bird', description: 'Tap to fly. One wrong move and its over.', developer: 'indielab', devInitial: 'I', genre: 'Action', likes: 891, comments: 64, isNewCreator: false },
  { id: 3, src: '/games/game3/index.html', title: 'Hard Sudoku', description: 'Hand-crafted hard grids. Fill every row, column, and box.', developer: 'puzzleworks', devInitial: 'P', genre: 'Puzzle', likes: 156, comments: 12, isNewCreator: true },
  { id: 4, src: '/games/game4/index.html', title: 'Tic Tac Toe', description: 'Classic two player strategy. First to three wins.', developer: 'gamecraft', devInitial: 'G', genre: 'Strategy', likes: 203, comments: 19, isNewCreator: true },
  { id: 5, src: '/games/game5/index.html', title: 'Maths Sprint', description: '60 seconds. How many can you solve?', developer: 'brainwave', devInitial: 'B', genre: 'Educational', likes: 78, comments: 7, isNewCreator: true },
]

export const genres = ['All', 'Action', 'Puzzle', 'RPG', 'Platformer', 'Horror', 'Arcade', 'Narrative', 'Experimental']

export const developerProfiles = {
  retrodev: { handle: '@retrodev', followers: '18.4K', bio: 'Pixel-perfect arcade remakes with modern controls.', banner: 'linear-gradient(120deg, #8d1f1f, #2f1212)' },
  indielab: { handle: '@indielab', followers: '29.8K', bio: 'Fast, chaotic browser games built in weekend sprints.', banner: 'linear-gradient(120deg, #8c3b14, #35180b)' },
  puzzleworks: { handle: '@puzzleworks', followers: '7.1K', bio: 'Mind-bending logic games for daily brain warmups.', banner: 'linear-gradient(120deg, #27478c, #131f39)' },
  gamecraft: { handle: '@gamecraft', followers: '9.6K', bio: 'Small strategy games with smooth mobile touch play.', banner: 'linear-gradient(120deg, #1d7a4e, #113226)' },
  brainwave: { handle: '@brainwave', followers: '4.2K', bio: 'Educational speed games for classrooms and quick drills.', banner: 'linear-gradient(120deg, #783fa6, #2d1740)' },
}
