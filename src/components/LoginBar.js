import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';

const LoginBar = ({ className }) => {
    const [log, setLog] = useState(false)

    const logOut = () => {
        console.log("déconextion")
        setLog(false)
    }

    return (
        <div className={className} >
            {log ?
                <button onClick={logOut}>
                    <MdClose /> Déconnexion
                </button>
                :
                <form className='formLog' action="">
                    <div className='inputLog'>
                        <label htmlFor="">E mail :</label>
                        <input type="text" />
                    </div>
                    <div className='inputLog'>
                        <label htmlFor="">Mot de passe</label>
                        <input type="text" />
                    </div>
                </form>
            }
        </div>
    )
}

export default LoginBar