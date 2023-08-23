import React, { useEffect, useRef, useState } from 'react'
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
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(content)

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

          if (questionIndex < length -1) {
            setQuestionIndex(questionIndex + 1);
          } else {
            navigate(`/Result`, { state: { newScore, length } });
          }
          setScore(newScore);
        }, 300);
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
      <h2>Quizz {theme}</h2>
      <p>question n° {questionIndex + 1} :</p>
      <p>{content[questionIndex].question}</p>

      <div className='answersContainer' >
        {answersList}
      </div>
      <div className='scoreContainer'>
      </div>
    </div>
  )
}

export default Quizz