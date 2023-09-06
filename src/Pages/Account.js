import React, { useEffect, useState } from 'react'
import LoginBar from '../components/LoginBar';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa'
import { useAuth } from '../AuthContext';
import Card from "../components/Card";

const Account = () => {
    const [userData, setUserData] = useState(null);
    const [selectedQuizzes, setSelectedQuizzes] = useState([]);
    const navigate = useNavigate();
    const { user, deleteUserQuiz } = useAuth()
    const validThemes = ["Movies", "Series", "Cartoons", "VideoGame", "general"];
    let personalQuizzList;

    useEffect(() => {
        setUserData(user);
    }, [user]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const handleClick = (value, content) => {
        shuffleArray(content)
        navigate(`/Quizz/${value}`, { state: { content } });
    };


    const handleSignIn = () => {
        navigate("/Inscription")
    }

    const toggleCheckbox = (idQuizz) => {
        if (selectedQuizzes.includes(idQuizz)) {
            setSelectedQuizzes(selectedQuizzes.filter((id) => id !== idQuizz));
        } else {
            setSelectedQuizzes([...selectedQuizzes, idQuizz]);
        }
    };

    const handleDeleteClick = () => {
        console.log("Quiz sélectionnés :", selectedQuizzes);
        console.log(user._id)
        selectedQuizzes.map((id) =>{
            deleteUserQuiz(user._id, id)
        })
    };

    if (user) {
        personalQuizzList = user.quizzes.map((quizz, index) => {
            let className = validThemes.includes(quizz.title) ? quizz.title : validThemes[Math.floor(Math.random() * validThemes.length)];

            return (
                <div className='personalQuizzCard' key={index}>
                    <Card
                        className={`personalQuizz ${className} card`}
                        title={quizz.title}
                        action={() => handleClick(quizz.title, quizz.content)}
                    />
                    <input
                        type='checkbox'
                        defaultChecked={selectedQuizzes.includes(quizz._id)}
                        onChange={() => toggleCheckbox(quizz._id)}
                    ></input>
                </div>
            );
        })
    }

    return (
        <div className="Container">
            {userData ?
                <div className='accountContainer'>
                    <div className='personalDataContainer'>
                        <h2>Mes Informations Perso</h2>
                        <div>
                            <p>Nom :</p>
                            <p>{userData.fname} </p>
                        </div>
                        <div>
                            <p>prenom :</p>
                            <p>{userData.name} </p>
                        </div>
                        <div>
                            <p>Age :</p>
                            <p>{userData.age} </p>
                        </div>
                        <div>
                            <p>Domiciliation :</p>
                            <p>{userData.location} </p>
                        </div>
                        <div>
                            <p>email :</p>
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
                            {user ? personalQuizzList : ""}
                        </div>
                        <input type="button" onClick={handleDeleteClick} className='changePassword' value="suprimer la selection" />
                    </div>
                    <LoginBar
                        className='loginBar'
                    />
                </div>
                :
                <div className='loginBarContainer'>
                    <p>Connectez vous pour acceder a votre Compte</p>
                    <LoginBar
                        className='loginBar'
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