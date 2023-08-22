import React from 'react'

const Card = ({ title, action, className }) => {

  return (
      <div onClick={action} className={className}>
        <p>{title}</p>
      </div>
  );
};
export default Card