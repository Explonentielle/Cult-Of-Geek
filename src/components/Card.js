import React from 'react';

// Le composant Card accepte plusieurs propriétés (props) :
// - title: Le texte à afficher sur la carte.
// - action: La fonction à exécuter lorsque la carte est cliquée.
// - className: Les classes CSS supplémentaires à appliquer à la carte.

const Card = ({ title, action, className }) => {

  return (
    // La carte est rendue sous forme d'un élément div cliquable.
    // Lorsque la carte est cliquée, la fonction "action" est exécutée.
    <div onClick={action} className={className}>
      <p>{title}</p> {/* Le titre de la carte est affiché à l'intérieur de la balise <p>. */}
    </div>
  );
};

export default Card; // Exporte le composant Card pour pouvoir l'utiliser ailleurs dans l'application.
