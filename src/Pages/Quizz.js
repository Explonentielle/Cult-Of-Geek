import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Card from '../components/Card';


const Quizz = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState(null)
  const [score, setScore] = useState(0)
  const { theme } = useParams()
  const location = useLocation();
  // const answerRef = useRef()
  let message = ""


  const nextAnswer = () => {
    if (questionIndex < content.length - 1) {
      setQuestionIndex(questionIndex + 1)
      message = ""
    }
  }

  const answerSubmit = () => {
    console.log(answers)
    if (answers) {
      setScore(score + 1)
      message = "bonne réponse"
      setAnswers(null)
    }
    else if (!answers) {
      message = "mauvaise réponse"
      setAnswers(null)
    }
  }

  const answerHandleClick = (value) => {
    setAnswers(value)

  }

  const content = location.state ? location.state.content : 'Erreur pendant le chargement du quizz';
  const answersList = content[questionIndex].answers.map((item, index) => {
    return (
      <Card

        key={index + Date.now}
        action={() => answerHandleClick(item.correct)}
        title={item.text}
        className={"answers"}
      />
    )
  })

  return (
    <div className="Container">
      <h2>mon Quizz theme {theme}</h2>
      <p>question n° {questionIndex + 1} :</p>
      <p>{content[questionIndex].question}</p>

      <div className='answersContainer' >
        {answersList}
      </div>
      <div className='submitBtnContainer'>
        <button onClick={answerSubmit} className='submitBtn'>
          valier
        </button>
        <button onClick={nextAnswer} className='submitBtn'>
          suivant
        </button>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Quizz