import React, { useContext, useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import AddQuestionForm from '../components/AddQuestionForm'
import { UserContext } from '../AuthContext'

const QuizzCreation = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null);
  const { user, setUser } = useContext(UserContext);



  const handleSignIn = () => {
    navigate("/Mon-compte")
  }

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <div className="Container">

      {
        userData ?
          <div>
            <AddQuestionForm />
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