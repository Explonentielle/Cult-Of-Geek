import React, { useState } from 'react';

const AddQuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);

  const handleAddQuestion = () => {
    const newQuestion = {
      question,
      answers: answers.map((text, index) => ({
        id: index + 1,
        text,
        correct: index === 0, // La première réponse est la correcte par défaut.
      })),
    };

    // Appeler la fonction de rappel pour ajouter la nouvelle question.
    onAddQuestion(newQuestion);

    // Réinitialiser le formulaire après l'ajout.
    setQuestion('');
    setAnswers(['', '', '', '']);
  };

  return (
    <div>
      <h2>Ajouter une nouvelle question</h2>
      <label>Question :</label>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />

      <label>Réponses :</label>
      {answers.map((text, index) => (
        <div key={index}>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              const newAnswers = [...answers];
              newAnswers[index] = e.target.value;
              setAnswers(newAnswers);
            }}
          />
          {index === 0 && <span> (Correcte)</span>}
          <br />
        </div>
      ))}

      <button onClick={handleAddQuestion}>Ajouter</button>
    </div>
  );
};

export default AddQuestionForm;