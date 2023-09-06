import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizForm() {
  //////////////////// States et hooks

  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [quiz, setQuiz] = useState({
    title: '',
    theme: '',
    isPrivate: false,
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

  //////////////////// fonctions formulaire

  const handleTitleThemeChange = (e) => {
    const { name, value } = e.target;
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  // Gère le changement de saisie dans les champs de réponse de la question en cours d'édition
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

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      [name]: checked,
    }));
  }

  const handleAddQuestion = () => {
    if (currentQuestion.question.trim() !== '') {

      const shuffledAnswers = shuffleAnswers(currentQuestion.answers);

      setQuiz((prevQuiz) => ({
        ...prevQuiz,
        content: [...prevQuiz.content, { ...currentQuestion, answers: shuffledAnswers }],
      }));

      // Réinitialise la question en cours d'édition
      setCurrentQuestion({
        question: '',
        answers: [
          { id: 1, text: '', correct: true },
          { id: 2, text: '', correct: false },
          { id: 3, text: '', correct: false },
          { id: 4, text: '', correct: false },
        ],
      });
      setMessage('Question enregistrée avec succès');
      setTimeout(() => {
        setMessage('');
      }, 2000)
    }
    else{
      setMessage('veuillez remplir tout les champs');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Recap', { state: { quiz } })
  };
  
  //////////////////// fonctions annexes 

  const shuffleAnswers = (answers) => {
    const shuffledAnswers = [...answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }
    return shuffledAnswers;
  };

  const handleNextStep = () => {
    if (quiz.title === '' || quiz.theme === '') {
      setMessage('Veuillez remplir le titre et le thème.');
      return;
    }
    setCurrentStep(currentStep + 1);
    setMessage('');
  };

  // Rendu du formulaire
  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <div>
          <p className='message'>{message}</p>
          <div className='title column'>
            <label>Titre du quiz:</label>
            <input
              type="text"
              name="title"
              defaultValue={quiz.title}
              onChange={handleTitleThemeChange}
            />
          </div>
          <div className='theme column'>
            <label>Thème:</label>
            <input
              type="text"
              name="theme"
              defaultValue={quiz.theme}
              onChange={handleTitleThemeChange}
            />
          </div>
          <div className='visibility column'>
            <label>Si tu coches cette case tu sera le seul a pouvoir voir le quizz que tu vas crée</label>
            <input
              type="checkbox"
              name="isPrivate"
              defaultChecked={quiz.isPrivate}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className='buttonContainer'>
            <button className='registerButton' type="button" onClick={handleNextStep}>
              Suivant
            </button>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div>
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
          {message && <p className={message.includes('succès') ? 'success' : 'message'}>{message}</p>}
          <div className='buttonContainer'>
            <button className='registerButton' type="button" onClick={handleAddQuestion}>
              Ajouter la question
            </button>
            <button className='registerButton' type="submit">Voir le récap</button>
          </div>
        </div>
      )}
    </form>
  );
}
export default QuizForm;
