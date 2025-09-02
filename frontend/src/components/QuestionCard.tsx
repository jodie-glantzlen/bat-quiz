import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import type { QuestionCardProps } from "../../types";

function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div>
      <img src={question.image} alt={`very cute ${question.answer} bat`} />
      <FormControl>
        <RadioGroup name="options-group">
          {question.options.map((o) => (
            <FormControlLabel key={o} value={o} control={<Radio />} label={o} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default QuestionCard;