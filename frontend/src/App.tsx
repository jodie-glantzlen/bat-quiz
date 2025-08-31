import { useState } from 'react';
import './App.css'
import { Button } from '@mui/material'

function App() {
  const [msg, setMsg] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:4000/hello");
      const data = await res.json();
      setMsg(data.message);

    } catch (e) {
      console.error("Error fetching from backend:", e);
      setMsg("Something went wrong!");
    }
  };
  
  return (
    <div>
      <Button variant='contained' onClick={handleClick}>Hallo MUI button!</Button>
      <div>{msg}</div>
    </div>
  )
}

export default App
