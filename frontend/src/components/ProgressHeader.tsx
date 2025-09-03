import type { ProgressHeaderProps } from "../../../types"
import "../styles/Game.css"

function ProgressHeader({ currentQuestion, totalQuestions, score }: ProgressHeaderProps) {
  return (
    <div className="progress-header">
      <h3>Question {currentQuestion}/{totalQuestions}</h3>
      <h3>Score: {score}/{totalQuestions}</h3>
    </div>
  )
}

export default ProgressHeader