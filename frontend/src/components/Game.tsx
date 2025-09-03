import { useState } from 'react';
import questions from '../data/questions.json'
import QuestionCard from './QuestionCard'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { PlayerProps } from '../../../types';
import { postPlayer } from '../api/api';

function Game({ player, setPlayer }: PlayerProps) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const currentQuestion = questions[currentQuestionIndex]

  const navigate = useNavigate()

  const handleAnswerSelection = (answer: string): void => {
    setSelectedOption(answer)
    if (answer === currentQuestion.answer) {
      setPlayer((prev) => ({
        ...prev,
        score: prev.score + 1
      }))
    }
  }

  const handleContinue = async (): Promise<void> => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedOption(null)
    } else {
      await postPlayer(player)
      navigate("/finish")
    }
  }

  return (
    <div className='game-container'>
      <h1>Question {currentQuestionIndex + 1}/{questions.length}</h1>
      <h1>Score: {player.score}/{questions.length}</h1>
      <QuestionCard question={currentQuestion} selectedOption={selectedOption} onSelect={handleAnswerSelection} />
      <Button onClick={handleContinue} disabled={!selectedOption}>Continue</Button>
    </div>
  )
}

export default Game