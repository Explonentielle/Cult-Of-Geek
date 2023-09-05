import React from 'react';
import { useNavigate } from 'react-router-dom';

// Le composant Button accepte plusieurs propriétés (props) :
// - label: Le texte à afficher sur le bouton.
// - link: L'URL vers laquelle naviguer lorsque le bouton est cliqué.
// - color: La couleur de fond du bouton.
// - className: Les classes CSS supplémentaires à appliquer au bouton.
// - width: La largeur du bouton.

const Button = ({ label, link, color, className, width }) => {
  // Utilise le hook useNavigate pour obtenir la fonction de navigation.
  const navigate = useNavigate();

  // Cette fonction est appelée lorsque le bouton est cliqué.
  const handleButtonClick = () => {
    // Utilise la fonction navigate pour naviguer vers l'URL spécifiée.
    navigate(link);
  };

  return (
    // Rendu du bouton avec des attributs de style et des classes CSS personnalisées.
    <button onClick={handleButtonClick} className={className} style={{ backgroundColor: color, width: width }}>
      {label}
    </button>
  );
};

export default Button;
