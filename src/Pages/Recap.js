import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Recap = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuth()
    const quizz = location.state ? location.state.quiz : 'Erreur pendant le chargement du quizz';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const quizResponse = await axios.post('http://localhost:5500/api/Quizz/create', quizz);
            console.log(quizResponse.data);

            const userId = user._id
            const AuthResponse = await axios.post(
                `http://localhost:5500/api/Auth/${userId}/add-quizz`,
                { quizz: quizz }
            );
            console.log(AuthResponse.data);

            setMessage(AuthResponse.data.message);
        } catch (error) {
            console.error(error);
            setMessage('Une erreur s\'est produite.');
        }
        setTimeout(() => {
            navigate('/Mon-compte')
          }, 1000);
    };

    return (
        <div className='Container'>
            <form className='formContainer' onSubmit={handleSubmit}>
                <h3>Quizz : {quizz.title}</h3>
                {quizz.content.map((item,) => {
                    return (
                        <div>
                            <p>Question : </p>
                            <p>{item.question}</p>
                            <div className='answersContainerRecap' >
                                {item.answers.map((item) => {
                                    return (
                                        <div className='answersRecap'>
                                            <p className='answers'>{item.text}</p>
                                            <p className={item.correct ? "answersTrue" : "answersFalse"}>{item.correct ? "reponse exact" : "reponse fause"}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                {message && <p className={message.includes('succès') ? 'success' : 'error'}>{message}</p>}
                <button className='registerButton' type="submit">Enregistrer le quizz</button>
            </form>
        </div>
    )
}

export default Recap