import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = ({ label, link, color, className, width }) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <button onClick={handleButtonClick} className={className} style={{ backgroundColor: color, width: width }}>
      {label}
    </button>
  );
};

export default Button
