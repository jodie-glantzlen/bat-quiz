import { useState } from "react";
import questions from "../data/questions.json";
import QuestionCard from "./QuestionCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { PlayerProps } from "../../../types";
import { postPlayer } from "../api/api";
import ProgressHeader from "./ProgressHeader";
import "../styles/Game.css";

function Game({ player, setPlayer }: PlayerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const navigate = useNavigate();

  const handleAnswerSelection = (answer: string): void => {
    setSelectedOption(answer);
    if (answer === currentQuestion.answer) {
      setPlayer((prev) => ({
        ...prev,
        score: prev.score + 1,
      }));
    }
  };

  const handleContinue = async (): Promise<void> => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      await postPlayer(player);
      navigate("/finish");
    }
  };

  return (
    <div className="game-container">
      <ProgressHeader
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        score={player.score}
      />
      <div className="question-card-container">
        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelect={handleAnswerSelection}
        />
        {selectedOption && <Button onClick={handleContinue}>Continue</Button>}
      </div>
    </div>
  );
}

export default Game;
