import React from 'react'
import { useLocation } from 'react-router-dom';
import CircularProgressBar from '../components/CircularProgressBar';

const Result = () => {
  const location = useLocation();
  const length = location.state ? location.state.length : 'Erreur pendant le chargement du récapitulatif';
  const score = location.state ? location.state.newScore : 'Erreur pendant le chargement du récapitulatif';
  const rate = Math.round((score / length) * 100)
  return (
      <div className={rate >= 50 ? 'resultWinContainer': 'resultLoseContainer'}>
        <p>{`${score} bonne réponse / ${length} questions`}</p>
        <CircularProgressBar percentage={rate} />
      </div>
  )
}

export default Result

