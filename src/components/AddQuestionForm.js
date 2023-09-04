import React, { useState } from 'react'; // Importation des modules nécessaires
import axios from 'axios'; // Importation du module Axios pour effectuer des requêtes HTTP
import { useAuth } from '../AuthContext'; // Importation d'un hook personnalisé depuis un contexte d'authentification
import { useNavigate } from 'react-router-dom'; // Importation d'un hook de navigation depuis React Router

function QuizForm() {
  const { user, setUser } = useAuth(); // Obtient l'utilisateur actuellement authentifié à partir du contexte
  const navigate = useNavigate(); // Obtient la fonction de navigation depuis React Router

  // État pour afficher un message à l'utilisateur
  const [message, setMessage] = useState('');

  // État pour stocker les données du quiz en cours de création
  const [quiz, setQuiz] = useState({
    title: '',
    theme: '',
    content: [],
  });

  // État pour gérer la question en cours d'édition
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    answers: [
      { id: 1, text: '', correct: true },
      { id: 2, text: '', correct: false },
      { id: 3, text: '', correct: false },
      { id: 4, text: '', correct: false },
    ],
  });

  // Fonction pour mélanger les réponses d'une question dans un ordre aléatoire
  const shuffleAnswers = (answers) => {
    const shuffledAnswers = [...answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }
    return shuffledAnswers;
  };

  // Gère le changement de saisie dans les champs de la question en cours d'édition
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

  // Ajoute une question au quiz en cours de création
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

      // Affiche un message de confirmation pendant 2 secondes
      setMessage('Question enregistrée');
      setTimeout(() => {
        setMessage('');
      }, 2000)
    }
  };

  // Gère la soumission du formulaire de création de quiz
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/Recap/`, { state: { quiz } });

    // Le code ci-dessous (actuellement commenté) serait utilisé pour envoyer le quiz au serveur
    // et gérer la réponse du serveur, mais il est commenté dans votre code.

    // try {
    //   const quizResponse = await axios.post('http://localhost:5500/api/Quizz/create', quiz);
    //   console.log(quizResponse.data);
  
    //   const userId = user._id
    //   const AuthResponse = await axios.post(
    //     `http://localhost:5500/api/Auth/${userId}/add-quizz`,
    //     { quizz: quiz } 
    //   );
    //   console.log(AuthResponse.data);
  
    //   setMessage(AuthResponse.data.message);
    // } catch (error) {
    //   console.error(error);
    //   setMessage('Une erreur s\'est produite.');
    // }
  };

  // Rendu du formulaire
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
          Ajouter la question
        </button>
        <button className='registerButton' type="submit">Voir le récap</button>
      </div>
    </form>
  );
}

export default QuizForm;
