import type { QuestionCardProps } from "../../types"

function QuestionCard({question}: QuestionCardProps) {
  return (
    <div>
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