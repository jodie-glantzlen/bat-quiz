import './App.css'
import {Route, Routes} from 'react-router-dom'
import Start from './components/Start';
import Game from './components/Game';
import Finish from './components/Finish';
import './styles/global.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />}/>
      <Route path='/game' element={<Game />}/>
      <Route path='/finish' element={<Finish />}/>
    </Routes>
  )
}

export default App
