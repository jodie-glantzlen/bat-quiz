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
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
}

type QuestionCardProps = {
  question: Question;
  selectedOption: string | null;
  onSelect: (value: string) => void;
}

type FinishProps = {
  player: Player;
}

type ProgressHeaderProps = {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

export type {InputChangeEvent, Player, PlayerProps, Question, QuestionCardProps, FinishProps, ProgressHeaderProps}