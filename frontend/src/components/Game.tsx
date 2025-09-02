import questions from '../data/questions.json'
import QuestionCard from './QuestionCard'

function Game() {
  return (
    <div className='game-container'>
    <h1>I'm the Game screen!</h1>
    {
      questions.map((q) => (
        <QuestionCard question={q}/>
      ))
    }
    </div>
  )
}

export default Game