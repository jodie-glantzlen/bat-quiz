type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

type Player = {
  name: string
  score: number
}

type Question = {
  image: string
  options: string[]
  answer: string
}

// Props
type QuestionCardProps = {
  question: Question
  selectedOption: string | null
  onSelect: (value: string) => void
}

type ProgressHeaderProps = {
  currentQuestion: number
  totalQuestions: number
  score: number
}

// React Context
type PlayerContextType = {
  player: Player
  setPlayer: (player: Player) => void
}

export type {
  InputChangeEvent,
  Player,
  Question,
  QuestionCardProps,
  ProgressHeaderProps,
  PlayerContextType,
}
