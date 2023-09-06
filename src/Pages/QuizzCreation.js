import React, { useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import AddQuestionForm from '../components/AddQuestionForm'
import { useAuth } from'../AuthContext';
import { Canvas } from '@react-three/fiber'
import SceneTest from '../components/SceneTest';

const QuizzCreation = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null);
  const { user } = useAuth()

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
            <AddQuestionForm />
          :
          <div className='quizzCreation'>
            <p>Connectez vous pour cree votre quizz personalise </p>
            <button className='registerButton' onClick={handleSignIn}>
              <FaSignInAlt /> Se connecter
            </button>
          </div>
      }
       <div className="canvaContainer">
                <Canvas style={{ width: '100vw' }} >
                    <SceneTest title={'notitle'} />
                </Canvas>
            </div>
    </div>
  )
}

export default QuizzCreation