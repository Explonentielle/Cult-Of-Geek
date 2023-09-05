import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Recap = () => {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()
    const [message, setMessage] = useState('');
    const location = useLocation();
    const quiz = location.state ? location.state.quiz : 'Erreur pendant le chargement du recap';
    console.log(quiz)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const quizResponse = await axios.post('http://localhost:5500/api/Quizz/create', quiz);
            console.log(quizResponse.data);

            const userId = user._id
            const AuthResponse = await axios.post(
                `http://localhost:5500/api/Auth/${userId}/add-quizz`,
                { quizz: quiz }
            );
            console.log(AuthResponse.data);

            setMessage(AuthResponse.data.message);
        } catch (error) {
            console.error(error);
            setMessage('Une erreur s\'est produite.');
        }
        setTimeout(() => {
            navigate(`/Mon-compte`);
          }, 1500)
    };

    return (
        <div className='Container'>
            {message && <p className={message.includes('succès') ? 'success' : ''}>{message}</p>}
            <form className='formContainer' onSubmit={handleSubmit}>
                <p>recap</p>
                <button className='registerButton' type="submit">Enregistrer le quizz</button>
            </form>
        </div>
    )
}

export default Recap