import React, { useEffect, useState, useContext } from 'react'
import { MdClose } from 'react-icons/md';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';


const LoginBar = ({ className }) => {
    const { user, login, logout } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
    }, [user]);

    const handleLogin = async (e) => {
        e.preventDefault();
        login(email, password)
    };

    const handleLogout = () => {
        logout()
        setEmail('');
        setPassword('');
    };

    const handlepassword = () =>{
        navigate('/Nouveau-Mot-de-passe')
    }

    return (
        <div className={className} >
            {user ?
                <button className='déconnexion' onClick={handleLogout}>
                    <MdClose className='icon-white' /> Deconnexion
                </button>
                :
                <div className='blurContainer bodyBlur'>
                    <form className='formLog' action="">
                        <div className='inputContainer'>
                            <div className='inputLog'>
                                <input type="text"
                                    placeholder="E-mail"
                                    onChange={e => setEmail(e.target.value)}
                                    defaultValue={email} />
                            </div>
                            <div className='inputLog'>
                                <input type="text"
                                    placeholder="Mot de passe"
                                    defaultValue={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <button type='submit' className='connexionBtn' onClick={handleLogin}>Connexion</button>
                        <p className='forgotpassword' onClick={handlepassword}>Mot de passe oublié</p>
                    </form>
                </div>

            }
        </div>
    )
}

export default LoginBar