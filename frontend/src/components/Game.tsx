import { useState } from 'react';
import questions from '../data/questions.json'
import QuestionCard from './QuestionCard'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Game() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const currentQuestion = questions[currentQuestionIndex]

  const navigate = useNavigate()

  const handleContinue = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      navigate("/finish")
    }
  }

  return (
    <div className='game-container'>
      <h1>Question {currentQuestionIndex + 1}/{questions.length}</h1>
      <QuestionCard question={currentQuestion}/>
      <Button onClick={handleContinue}>Continue</Button>
    </div>
  )
}

export default Game