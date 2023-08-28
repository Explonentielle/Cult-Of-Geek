import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginBar = ({ className, onLoginSuccess }) => {
    const navigate = useNavigate()
    const [log, setLog] = useState(isAuthenticated());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setLog(isAuthenticated());
    }, [log]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/api/Auth/login', {
                email,
                password
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setLog(true);
            navigate('/Mon compte')
        } catch (error) {
            console.error(error);
        }

    };

    function isAuthenticated() {
        const token = localStorage.getItem('token');
        return token !== null;
    }

    function handleLogout() {
        setEmail('');
        setPassword('');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setLog(false);
        navigate('/Mon compte')
    }

    return (
        <div className={className} >
            {log ?
                <button className='déconnexion' onClick={handleLogout}>
                    <MdClose /> Déconnexion
                </button>
                :
                <form className='formLog' action="">
                    <div className='inputContainer'>
                        <div className='inputLog'>
                            <label htmlFor="">E mail :</label>
                            <input type="text"
                                placeholder="E-mail"
                                onChange={e => setEmail(e.target.value)}
                                defaultValue={email} />
                        </div>
                        <div className='inputLog'>
                            <label htmlFor="">Mot de passe</label>
                            <input type="text"
                                placeholder="Mot de passe"
                                defaultValue={password}
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button type='submit' className='connexionBtn' onClick={handleLogin}>Connexion</button>
                </form>

            }
        </div>
    )
}

export default LoginBar