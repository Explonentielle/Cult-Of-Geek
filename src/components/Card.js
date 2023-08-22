import React from 'react'
import Button from './Button';

const Card = ({ title, content, image, className }) => {
  return (
    <div className={className}>
      <img src={image} alt="Card image" />
      <h2>{title}</h2>
      <p>{content}</p>
      <Button/>
    </div>
  );
};

export default Card