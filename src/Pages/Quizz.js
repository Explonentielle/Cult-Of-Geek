import React, { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const Quizz = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { theme } = useParams()
  const content = location.state ? location.state.content : 'Erreur pendant le chargement du quizz';
  const length = content.length
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)

  const answerHandleClick = (value, index) => {
    const allAnswers = document.querySelectorAll('.answers');
    allAnswers.forEach((answer, i) => {
      if (i === index) {
        let newScore = score;

        if (value) {
          if (questionIndex < length) {
            newScore++
            answer.classList.add('true-answer')
          }
        }
        else {
          answer.classList.add('false-answer');
        }

        setTimeout(() => {
          answer.classList.remove('true-answer', 'false-answer');

          if (questionIndex < length - 1) {
            setQuestionIndex(questionIndex + 1);
          } else {
            navigate(`/Result`, { state: { newScore, length } });
          }
          setScore(newScore);
        }, 200);
      }
    });
  };

  const answersList = content[questionIndex].answers.map((item, index) => {
    return (
      <Card
        key={index + Date.now}
        action={() => answerHandleClick(item.correct, index)}
        title={item.text}
        className={`answers answers${index}`}
      />
    )
  })

  return (
    <div className="Container">
      <h3 className='quizzTitle'>Quizz {theme}</h3>
      <p className='questionIndex'>question n° {questionIndex + 1} :</p>
      <p p className='questionIndex'>{content[questionIndex].question}</p>
      <div className='answersContainer' >
        {answersList}
      </div>
      <div className='scoreContainer'>
      </div>
    </div>
  )
}

export default Quizz