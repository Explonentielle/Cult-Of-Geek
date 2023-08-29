import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import CreationForm from '../components/CreationForm'

const QuizzCreation = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(localStorage.getItem('user'));
  const [log, setLog] = useState(isAuthenticated());




  const handleSignIn = () => {
    navigate("/Mon-compte")
  }

  function isAuthenticated() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return (token !== null && user !== null);
  }


  return (
    <div className="Container">

      {
        log ?
          <div>
            <CreationForm />
          </div>
          :
          <div className='quizzCreation'>
            <p>Connectez vous pour cree votre quizz personalise </p>
            <button className='registerButton' onClick={handleSignIn}>
              <FaSignInAlt /> Se connecter
            </button>
          </div>

      }
    </div>
  )
}

export default QuizzCreation