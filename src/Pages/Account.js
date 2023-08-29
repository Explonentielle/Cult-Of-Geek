import React, { useEffect, useState } from 'react'
import LoginBar from '../components/LoginBar';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa'

const Account = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate()

    const handleSignIn = () => {
        navigate("/Inscription")
    }

    const handleLoginSuccess = (user) => {
        setUserData(user);
    };

    const handleLogoutSuccess = () => {
        setUserData(null);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUserData(user);
    }, []);

    return (
        <div className="Container">
            {userData ?
                <div className='accountContainer'>
                    <div className='personalDataContainer'>
                        <h2>Mes Informations Perso</h2>
                        <div>
                            <p>Nom : </p>
                            <p>{userData.fname} </p>
                        </div>
                        <div>
                            <p>prenom : </p>
                            <p>{userData.name} </p>
                        </div>
                        <div>
                            <p>Age : </p>
                            <p>{userData.age} </p>
                        </div>
                        <div>
                            <p>Domiciliation :</p>
                            <p>{userData.location} </p>
                        </div>
                        <div>
                            <p>email : </p>
                            <p>{userData.email} </p>
                        </div>
                        <div>
                            <p>mot de passe : </p>
                            <input type="button" className='changePassword' value="Modifier mon Mot de passe" />
                        </div>
                    </div>
                    <div className='personalQuizzContainer'>
                        <h2>Mes Quizzs Perso</h2>
                        <div className='quizzcontainer'>
                            <div>
                                <p>Quizz</p>
                            </div>
                            <div>
                                <p>Quizz</p>
                            </div>
                            <div>
                                <p>Quizz</p>
                            </div>
                            <div>
                                <p>Quizz</p>
                            </div>
                        </div>
                    </div>
                    <LoginBar
                        className='loginBar'
                        onLoginSuccess={handleLoginSuccess} 
                        onLogoutSuccess={handleLogoutSuccess} />
                        
                </div>
                :
                <div className='loginBarContainer'>
                    <p>Connectez vous pour acceder a votre Compte</p>
                    <LoginBar
                        className='loginBar'
                        onLoginSuccess={handleLoginSuccess}
                        onLogoutSuccess={handleLogoutSuccess}
                    />
                    <p>je n'ai pas encore de compte</p>
                    <button className='registerButton' onClick={handleSignIn}>
                        <FaSignInAlt className='icon-white' /> s'inscrire
                    </button>
                </div>
            }
        </div>
    )
}

export default Account