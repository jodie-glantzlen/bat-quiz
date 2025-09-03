import { useEffect, useState } from "react";
import type {Player} from "../../../types"

function Finish() {

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

  useEffect(() => {
    getScores()
  }, [])

  return (
    <>
      <h1>Well played!</h1>
      {
        leaderboard.map(player => (
          <p>{player.name}: {player.score}</p>
        ))
      }
    </>
  )
}

export default Finish