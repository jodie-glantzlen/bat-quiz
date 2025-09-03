import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { InputChangeEvent, PlayerProps } from "../../../types";

function Start({ player, setPlayer }: PlayerProps) {

  const navigate = useNavigate();

  const handleInputChange = (e: InputChangeEvent) : void => {
    setPlayer({...player, name: e.target.value})
  }

  const handleClick = () : void => {
    console.log("player before navigate: ", player)
    navigate("/game")
  }

  return (
    <div className="container">
      <h1>🦇 Guess the Bat Species 🦇</h1>
      <div>Enter your name:</div>
      <TextField
        value={player.name}
        onChange={handleInputChange}
      />
      <div className="buttonWrapper">
        <Button
        variant="contained"
        disabled={!player.name}
        onClick={handleClick}
      >
        Start
      </Button>
      </div>
    </div>
  )
}

export default Start