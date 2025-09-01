import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <h1>I'm the Start screen!</h1>
      <Link to="/game">Go to Game</Link>
    </div>
    
  )
}

export default Start