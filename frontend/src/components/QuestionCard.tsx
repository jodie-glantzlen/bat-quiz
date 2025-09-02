import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import type { InputChangeEvent, QuestionCardProps } from "../../types";

function QuestionCard({ question, selectedOption, onSelect }: QuestionCardProps) {

  const handleChange = (e: InputChangeEvent) => {
    onSelect(e.target.value)
  }

  return (
    <div>
      <img src={question.image} alt={`very cute ${question.answer} bat`} />
      <FormControl>
        <RadioGroup name="options-group" value={selectedOption ?? null} onChange={handleChange}>
          {question.options.map((o) => (
            <FormControlLabel key={o} value={o} control={<Radio />} label={o} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default QuestionCard;