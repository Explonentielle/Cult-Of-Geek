import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CircularProgressBar from '../components/CircularProgressBar';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const length = location.state ? location.state.length : 'Erreur pendant le chargement du récapitulatif';
  const score = location.state ? location.state.newScore : 'Erreur pendant le chargement du récapitulatif';
  const rate = Math.round((score / length) * 100)

  const handleRetour = () => {
    navigate(-2); 
  };

  return (
    <div className={rate >= 50 ? 'resultWinContainer' : 'resultLoseContainer'}>
      <p>{`${score} bonne réponse / ${length} questions`}</p>
      <CircularProgressBar percentage={rate} />
      <button className='returnBtn' onClick={handleRetour}>
        <FaArrowLeft /> 
      </button>
    </div>
  )
}

export default Result

