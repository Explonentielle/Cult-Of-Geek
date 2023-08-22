import React from 'react'

const Card = ({ title, action, className }) => {
  console.log(className)
  return (
      <figure onClick={action} className={`${className} card`}>
        <figcaption>{title}</figcaption>
      </figure>
  );
};
export default Card