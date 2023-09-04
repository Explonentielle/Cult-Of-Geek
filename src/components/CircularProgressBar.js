import React from 'react';
import { Progress } from 'antd'; // Importe le composant Progress de la bibliothèque Ant Design.

const CircularProgressBar = ({ percentage }) => {
  let color = ""; // Initialise une variable pour stocker la couleur de la barre de progression.

  // Vérifie le pourcentage pour déterminer la couleur de la barre.
  if (percentage < 50) {
    color = "red"; // Si le pourcentage est inférieur à 50, la couleur est rouge.
  } else {
    color = "green"; // Sinon, la couleur est verte.
  }

  return (
    <div className='progessContainer'>
      {/* Rendu de la barre de progression circulaire */}
      <Progress type="circle" trailColor={'white'} percent={percentage} strokeColor={color} textStyle={'white'} />
    </div>
  );
}

export default CircularProgressBar; // Exporte le composant CircularProgressBar.
