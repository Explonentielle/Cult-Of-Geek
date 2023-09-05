import React from 'react';
import { useLocation } from 'react-router-dom'; // Importe le hook useLocation de React Router pour accéder à la location courante.
import { useNavigate } from 'react-router-dom'; // Importe le hook useNavigate de React Router pour gérer la navigation.
import { FaArrowLeft } from 'react-icons/fa'; // Importe une icône de flèche depuis React Icons.
import CircularProgressBar from '../components/CircularProgressBar'; // Importe un composant de barre de progression circulaire.

const Result = () => {
  const location = useLocation(); // Obtient les données de location actuelles (probablement passées depuis la page précédente).
  const navigate = useNavigate(); // Obtient la fonction de navigation depuis React Router.
  const length = location.state ? location.state.length : 'Erreur pendant le chargement du récapitulatif'; // Obtient la longueur (nombre de questions) depuis les données de location, ou affiche un message d'erreur.
  const score = location.state ? location.state.newScore : 'Erreur pendant le chargement du récapitulatif'; // Obtient le score depuis les données de location, ou affiche un message d'erreur.
  const rate = Math.round((score / length) * 100); // Calcule le pourcentage de bonnes réponses.

  // Cette fonction est appelée lorsque l'utilisateur clique sur le bouton de retour.
  const handleRetour = () => {
    navigate(-2); // Navigue vers la page précédente (-2 signifie deux étapes en arrière).
  };

  return (
    <div className={rate >= 50 ? 'resultWinContainer' : 'resultLoseContainer'}>
      {/* Affiche le score et le nombre de questions */}
      <p>{`${score} bonne réponse / ${length} questions`}</p>
      {/* Affiche une barre de progression circulaire avec le pourcentage de bonnes réponses */}
      <CircularProgressBar percentage={rate} />
      {/* Bouton de retour avec une icône de flèche */}
      <button className='returnBtn' onClick={handleRetour}>
        <FaArrowLeft />
      </button>
    </div>
  );
}

export default Result;
