import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import type { InputChangeEvent } from '../../../types'
import '../styles/Start.css'
import { usePlayer } from '../context/PlayerContext'

function Start() {
  const navigate = useNavigate()
  const { player, setPlayer } = usePlayer()

  const handleInputChange = (e: InputChangeEvent): void => {
    setPlayer({ ...player, name: e.target.value })
  }

  const handleClick = (): void => {
    console.log('player before navigate: ', player)
    navigate('/game')
  }

  return (
    <div className="start-container">
      <h1>🦇 Guess the Bat Species 🦇</h1>
      <h3>Enter your name:</h3>
      <TextField value={player.name} onChange={handleInputChange} />
      <Button
        variant="contained"
        disabled={!player.name}
        onClick={handleClick}
        className="start-button"
      >
        Start
      </Button>
    </div>
  )
}

export default Start
