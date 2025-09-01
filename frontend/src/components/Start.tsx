import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { InputEvent } from "../../types";

function Start() {
  const [name, setName] = useState<string>("")

  const navigate = useNavigate();

  const handleInputChange = (e: InputEvent) : void => {
    setName(e.target.value)
  }

  const handleClick = () : void => {
    navigate("/game")
  }

  return (
    <div className="container">
      <h1>🦇 Guess the Bat Species 🦇</h1>
      <div>Enter your name:</div>
      <TextField
        value={name}
        onChange={handleInputChange}
      />
      <div className="buttonWrapper">
        <Button
        variant="contained"
        disabled={!name}
        onClick={handleClick}
      >
        Start
      </Button>
      </div>
    </div>
  )
}

export default Start