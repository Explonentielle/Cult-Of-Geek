import React, { useState } from 'react';
import axios from 'axios'

function QuizForm() {
  const [message, setMessage] = useState('');
  const [quiz, setQuiz] = useState({
    title: '',
    theme: '',
    content: [],
  });

  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    answers: [
      { id: 1, text: '', correct: true },
      { id: 2, text: '', correct: false },
      { id: 3, text: '', correct: false },
      { id: 4, text: '', correct: false },
    ],
  });

  const shuffleAnswers = (answers) => {
    const shuffledAnswers = [...answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }
    return shuffledAnswers;
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleAnswerChange = (e, index) => {
    const { value } = e.target;
    setCurrentQuestion((prevQuestion) => {
      const updatedAnswers = [...prevQuestion.answers];
      updatedAnswers[index].text = value;
      return {
        ...prevQuestion,
        answers: updatedAnswers,
      };
    });
  };

  const handleAddQuestion = () => {
    if (currentQuestion.question.trim() !== '') {

      const shuffledAnswers = shuffleAnswers(currentQuestion.answers);

      setQuiz((prevQuiz) => ({
        ...prevQuiz,
        content: [...prevQuiz.content, { ...currentQuestion, answers: shuffledAnswers }],
      }));

      setCurrentQuestion({
        question: '',
        answers: [
          { id: 1, text: '', correct: true },
          { id: 2, text: '', correct: false },
          { id: 3, text: '', correct: false },
          { id: 4, text: '', correct: false },
        ],
      });
      setMessage('Question enregistrée');
      setTimeout(() => {
        setMessage('');
      }, 2000)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5500/api/Quizz/create', quiz);
      console.log(response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Une erreur s\'est produite.');
      }
    }
    console.log(quiz)
  };

  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <div className='title column'>
        <label>Titre du quiz:</label>
        <input
          type="text"
          name="title"
          value={quiz.title}
          onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
        />
      </div>
      <div className='theme column'>
        <label>Thème:</label>
        <input
          type="text"
          name="theme"
          value={quiz.theme}
          onChange={(e) => setQuiz({ ...quiz, theme: e.target.value })}
        />
      </div>
      <div className='question column'>
        <label>Question:</label>
        <input
          type="text"
          name="question"
          value={currentQuestion.question}
          onChange={handleInputChange}
        />
      </div>
      <div className='response column'>
        <label>Réponses:</label>
        {currentQuestion.answers.map((answer, index) => (
          <div key={answer.id}>
            <input
              type="text"
              name={`answer${answer.id}`}
              value={answer.text}
              onChange={(e) => handleAnswerChange(e, index)}
            />
            {index === 0 && (
              <p className='true'>Réponse exacte</p>
            )}
          </div>
        ))}
      </div>
      {message && <p className={message.includes('succès') ? 'success' : ''}>{message}</p>}
      <div className='buttonContainer'>
        <button className='registerButton' type="button" onClick={handleAddQuestion}>
          Ajouter une question
        </button>
        <button className='registerButton' type="submit">Terminer le quiz</button>
      </div>
    </form>
  );
}

export default QuizForm;