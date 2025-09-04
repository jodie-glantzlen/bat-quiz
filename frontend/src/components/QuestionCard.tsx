import type { QuestionCardProps } from "../../../types";
import "../styles/Game.css"

function QuestionCard({ question, selectedOption, onSelect }: QuestionCardProps) {

  const handleClick = (option: string): void => {
    if (!selectedOption) {
      onSelect(option);
    }
  };

  const getOptionClass = (option: string): string => {
    if (!selectedOption) return "option";
    if (option === question.answer) return "option correct";
    if (option === selectedOption && option !== question.answer) return "option wrong";
    return "option";
  };

  return (
    <div className="question-card">
      <img src={question.image} alt={`very cute ${question.answer} bat`} />
      <div className="options-container">
        {question.options.map((o) => (
          <div
            key={o}
            className={getOptionClass(o)}
            onClick={() => handleClick(o)}
          >
            {o}
          </div>
        ))}
      </div>
      {
        selectedOption && (
          <div className="feedback">
            {
              selectedOption === question.answer ? "Correct" : "Wrong"
            }
          </div>
        )
      }
    </div>
  );
}

export default QuestionCard;