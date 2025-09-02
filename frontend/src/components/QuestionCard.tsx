import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import type { InputChangeEvent, QuestionCardProps } from "../../types";

function QuestionCard({ question, selectedOption, onSelect }: QuestionCardProps) {

  const handleChange = (e: InputChangeEvent): void => {
    onSelect(e.target.value)
  }

  return (
    <div>
      <img src={question.image} alt={`very cute ${question.answer} bat`} />
      <FormControl>
        <RadioGroup name="options-group" value={selectedOption ?? null} onChange={handleChange}>
          {
            question.options.map((o) => {
              const isCorrect = o === question.answer
              const isSelected = o === selectedOption
              let style = {};
              if (selectedOption) {
                if (isCorrect) {
                  style = { color: "green", fontWeight: "bold" };
                } else if (isSelected && !isCorrect) {
                  style = { color: "red", fontWeight: "bold" }
                }
              }
              return (
                <FormControlLabel
                  key={o}
                  value={o}
                  control={<Radio />}
                  label={o}
                  style={style}
                />
              );
            })
          }
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default QuestionCard;