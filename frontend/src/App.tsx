import './App.css'
import { Route, Routes } from 'react-router-dom'
import Start from './components/Start'
import Game from './components/Game'
import Finish from './components/Finish'
// import type { Player } from '../../types'
// import { useState } from 'react'
import { PlayerProvider } from './context/PlayerContext'

function App() {
  //const [player, setPlayer] = useState<Player>({ name: '', score: 0 })
  // TODO: do I want to use React Context instead? overkill?

  return (
    <PlayerProvider>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/game"
          element={<Game />}
        />
        <Route
          path="/finish"
          element={<Finish />}
        />
      </Routes>
    </PlayerProvider>
  )
}

export default App
