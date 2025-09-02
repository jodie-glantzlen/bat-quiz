import type { QuestionCardProps } from "../../types"

function QuestionCard({question}: QuestionCardProps) {
  return (
    <div>
      <h1>I'm the question card!</h1>
      <img src={question.image} alt="very cute bat"/>
      {
        question.options.map((o) => (
          <ul>
            <li>{o}</li>
          </ul>
          
        ))
      }
    </div>
    
  )
}

export default QuestionCard