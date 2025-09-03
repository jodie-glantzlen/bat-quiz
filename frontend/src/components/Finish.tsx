import { useEffect, useState } from "react";
import type {Player, PlayerProps} from "../../../types"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getScores } from "../api/api";

function Finish({ player, setPlayer }: PlayerProps) {

  const [leaderboard, setLeaderboard] = useState<Player[]>([])

  const navigate = useNavigate();

  useEffect(() => {
    getScores().then(setLeaderboard)
  }, [])

  const handleClick = () => {
    setPlayer({ name: "", score: 0 })
    navigate("/")
  }

  return (
    <>
      <h1>Well played, {player.name}!</h1>
      <h1>Your score: {player.score}</h1>
      {
        leaderboard.map(player => (
          <p>{player.name}: {player.score}</p>
        ))
      }
      <Button onClick={handleClick}>New Game</Button>
    </>
  )
}

export default Finish