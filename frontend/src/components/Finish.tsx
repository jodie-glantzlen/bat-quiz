import { useEffect, useState } from "react";
import type {FinishProps, Player} from "../../../types"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Finish({player}: FinishProps) {

  const [leaderboard, setLeaderboard] = useState<Player[]>([])

  const getScores = async (): Promise<void> => {
    try {
      const res = await fetch("http://localhost:4000/scores")
      const data = await res.json()
      setLeaderboard(data)
    } catch (e) {
      console.error("Error fetching scores: ", e)
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    getScores()
  }, [])

  const handleClick = () => {
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