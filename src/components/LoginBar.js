import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';
import axios from 'axios';

const LoginBar = ({ className }) => {
    const [log, setLog] = useState(isAuthenticated());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setLog(isAuthenticated()); 
        // if (!log) {
        //     setEmail('');
        //     setPassword('');
        // }
    }, [log]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/api/Auth/login', {
                email,
                password
            });
            localStorage.setItem('token', response.data.token);
            setLog(true);
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
        setLog(false); 
    }

    return (
        <div className={className} >
            {log ?
                <button className='déconnexion' onClick={handleLogout}>
                    <MdClose /> Déconnexion
                </button>
                :
                <form className='formLog' action="">
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
                    <button type='submit' className='connexionBtn' onClick={handleLogin}>Connexion</button>
                </form>
                
            }
        </div>
    )
}

export default LoginBar