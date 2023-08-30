import React, { useEffect, useState, useContext } from 'react'
import { MdClose } from 'react-icons/md';
import { UserContext } from '../AuthContext'
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginBar = ({ className }) => {
    const { user, setUser, token, setToken } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
    }, [user]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/api/Auth/login', {
                email,
                password,
            });
            setToken(response.data);
        } catch (error) {
            console.error(error);
        }
    };

      const handleLogout = () => {
        Cookies.remove('token');
        setEmail('');
        setPassword('');
        setUser(null);
    };

    return (
        <div className={className} >
            {user ?
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