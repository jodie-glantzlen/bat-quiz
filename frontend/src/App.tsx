import './App.css'
import { Route, Routes } from 'react-router-dom'
import Start from './components/Start'
import Game from './components/Game'
import Finish from './components/Finish'
import { PlayerProvider } from './context/PlayerContext'

function App() {
  
  return (
    <PlayerProvider>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </PlayerProvider>
  )
}

export default App
