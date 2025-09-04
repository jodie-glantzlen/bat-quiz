import { useEffect, useState } from 'react'
import type { Player } from '../../../types'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getScores } from '../api/api'
import '../styles/Finish.css'
import { usePlayer } from '../context/PlayerContext'

function Finish() {
  const [leaderboard, setLeaderboard] = useState<Player[]>([])

  const navigate = useNavigate()

  const { player, setPlayer } = usePlayer()

  const isCurrentPlayer = (playerItem: Player): boolean => {
    return playerItem.name === player.name && playerItem.score === player.score
  }

  useEffect(() => {
    getScores().then(setLeaderboard)
  }, [])

  const handleClick = (): void => {
    setPlayer({ name: '', score: 0 })
    navigate('/')
  }

  return (
    <div className="finish-container">
      <h1>Well played, {player.name}!</h1>
      <h3>Your score: {player.score}</h3>
      <div className="leaderboard">
        <ol>
          {leaderboard.map((pItem) => (
            <li
              key={pItem.name}
              className={isCurrentPlayer(pItem) ? 'current-player' : ''}
            >
              <span className="name">{pItem.name}</span>
              <span className="score">{pItem.score}</span>
            </li>
          ))}
        </ol>
      </div>
      <Button onClick={handleClick}>New Game</Button>
    </div>
  )
}

export default Finish
