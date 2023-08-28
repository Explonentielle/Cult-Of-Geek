import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const QuizzCreation = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate("/Inscription")
  }


  return (
    <div className="Container">
      <button onClick={handleSignIn}>
        <FaSignInAlt /> s'inscrire
      </button>
    </div>
  )
}

export default QuizzCreation