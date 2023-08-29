import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginBar = ({ className, onLoginSuccess, onLogoutSuccess  }) => {
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
            onLoginSuccess(response.data.user)
        } catch (error) {
            console.error(error);
        }

    };

    function isAuthenticated() {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return (token !== null && user !== null);
    }

    function handleLogout() {
        onLogoutSuccess()
        setEmail('');
        setPassword('');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setLog(false);
    }

    return (
        <div className={className} >
            {log ?
                <button className='déconnexion' onClick={handleLogout}>
                    <MdClose className='icon-white' /> Deconnexion
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