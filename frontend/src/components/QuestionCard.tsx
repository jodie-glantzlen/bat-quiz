import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import type { InputChangeEvent, QuestionCardProps } from "../../../types";
import "../styles/Game.css"

function QuestionCard({ question, selectedOption, onSelect }: QuestionCardProps) {

  const handleChange = (e: InputChangeEvent): void => {
    if (!selectedOption) {
      onSelect(e.target.value);
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
      <FormControl>
        <div className="options-container">
          <RadioGroup name="options-group" value={selectedOption ?? null} onChange={handleChange} >
            {question.options.map((o) => (
              <FormControlLabel
                key={o}
                value={o}
                control={<Radio />}
                label={o}
                className={getOptionClass(o)}
              />
            ))}
          </RadioGroup>
        </div>
      </FormControl>
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