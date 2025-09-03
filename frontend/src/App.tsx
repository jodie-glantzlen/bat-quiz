import './App.css'
import {Route, Routes} from 'react-router-dom'
import Start from './components/Start';
import Game from './components/Game';
import Finish from './components/Finish';
import './styles/global.css';
import type { Player } from '../types';
import { useState } from 'react';

function App() {
  const [player, setPlayer] = useState<Player>({name: "", score: 0})
  // TODO: do I want to use React Context instead? overkill?

  return (
    <Routes>
      <Route path='/' element={<Start player={player} setPlayer={setPlayer} />}/>
      <Route path='/game' element={<Game player={player} setPlayer={setPlayer} />}/>
      <Route path='/finish' element={<Finish />}/>
    </Routes>
  )
}

export default App
