import React, { useState } from 'react'
import axios from 'axios'
import { FaSignInAlt } from 'react-icons/fa'

const Register = () => {

  const [message, setMessage] = useState('');
  const [data, setData] = useState({
    fname: '',
    name: '',
    email: '',
    password: '',
    age: '',
    location: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = { ...data };

    formData.forEach((value, name) => {
      values[name] = value;
    })
    setData(values)

    try {
      const response = await axios.post('http://localhost:5500/api/Auth/register', values);
      console.log(response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Une erreur s\'est produite.');
      }
    }
  };


  return (
    <div className="Container">
      <p className='titleRegister'>Inscription</p>
      {message && <p className={message.includes('succès') ? 'success' : 'error'}>{message}</p>}
      <form className='registerContainer' onSubmit={handleSubmit}>
        <div className='registerForm'>
          <div>
            <label>Prénom:</label>
            <input
              type="text"
              name="fname"
              defaultValue={data.fname}
              required
            />
          </div>
          <div>
            <label>Nom:</label>
            <input
              type="text"
              name="name"
              defaultValue={data.name}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={data.email}
              required
            />
          </div>
          <div>
            <label>Mot de passe:</label>
            <input
              type="password"
              name="password"
              defaultValue={data.password}
              required
            />
          </div>
          <div>
            <label>Âge:</label>
            <input
              type="number"
              name="age"
              defaultValue={data.age}
              required
            />
          </div>
          <div>
            <label>Emplacement:</label>
            <input
              type="text"
              name="location"
              defaultValue={data.location}
              required
            />
          </div>
        </div>
        <button type='submit' className='registerButton' >
          <FaSignInAlt className='icon-white' /> s'inscrire
        </button>
      </form>
    </div>
  )
};

export default Register