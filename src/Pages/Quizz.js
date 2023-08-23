import React, { useEffect, useRef, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Card from '../components/Card';


const Quizz = () => {
  const location = useLocation();
  const content = location.state ? location.state.content : 'Erreur pendant le chargement du quizz';
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('');
  const { theme } = useParams()
  


  const answerHandleClick = (value, index) => {
    const allAnswers = document.querySelectorAll('.answers');
    allAnswers.forEach((answer, i) => {
      if (i === index) {
        let newScore = score;
        let newMessage = message;

        if (value) {
          if (questionIndex < content.length) {
            newScore++
            answer.classList.add('true-answer')
          }
        }
        else {
          answer.classList.add('false-answer');
        }

        setTimeout(() => {
          answer.classList.remove('true-answer', 'false-answer');

          if (questionIndex < content.length -1) {
            setQuestionIndex(questionIndex + 1);
          } else {
            newMessage = `Vous avez obtenu un score de ${newScore}`;
            setMessage(newMessage);
          }
          setScore(newScore);
        }, 100);
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
      <h2>mon Quizz theme {theme}</h2>
      <p>question n° {questionIndex + 1} :</p>
      <p>{content[questionIndex].question}</p>

      <div className='answersContainer' >
        {answersList}
      </div>
      <div className='scoreContainer'>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Quizz