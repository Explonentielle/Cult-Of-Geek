import React from 'react'
import Button from './Button';

const Card = ({ title, image, className }) => {
  return (
    <div className={className}>
      <img src={image} alt="Card image" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card