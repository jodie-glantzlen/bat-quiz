type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

type Player = {
  name: string;
  score: number;
}

type Question = {
  image: string;
  options: string[];
  answer: string;
}

// Props
type PlayerProps = {
  player: Player;
  setPlayer: Function
}

type QuestionCardProps = {
  question: Question;
  selectedOption: string | null;
  onSelect: Function
}


export type {InputChangeEvent, Player, PlayerProps, Question, QuestionCardProps}