import { useEffect, useState } from "react";
import type { Player, PlayerProps } from "../../../types";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getScores } from "../api/api";
import "../styles/Finish.css";

function Finish({ player, setPlayer }: PlayerProps) {

  const [leaderboard, setLeaderboard] = useState<Player[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getScores().then(setLeaderboard);
  }, []);

  const handleClick = (): void => {
    setPlayer({ name: "", score: 0 });
    navigate("/");
  };

  return (
    <div className="finish-container">
      <h1>Well played, {player.name}!</h1>
      <h3>Your score: {player.score}</h3>
      <div className="leaderboard">
        <ol>
          {
            leaderboard.map(player => (
              <li key={player.name}>
                <span className="name">{player.name}</span>
                <span className="score">{player.score}</span>
              </li>
            ))
          }
        </ol>
      </div>
      <Button onClick={handleClick}>New Game</Button>
    </div>
  );
}

export default Finish;