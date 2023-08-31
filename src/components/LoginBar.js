import React, { useEffect, useState, useContext } from 'react'
import { MdClose } from 'react-icons/md';
import { useAuth } from'../AuthContext';


const LoginBar = ({ className }) => {
    const { user, login, logout } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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