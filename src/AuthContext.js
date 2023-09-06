import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/Auth/getProfil');
      const userData = response.data;

      setUser(userData)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedToken = Cookies.get('authToken');
    if (storedToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      fetchUserData()
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5500/api/Auth/login', {
        email,
        password
      });
      Cookies.set('authToken', response.data.token, { expires: 1 });
      setUser(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:5500/api/Auth/logout');
      axios.defaults.headers.common['Authorization'] = '';
      Cookies.remove('authToken');
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUserQuiz = async (userId, quizId) => {
    try {
      const response = await axios.delete(`http://localhost:5500/api/Auth/${userId}/delete-quizz/${quizId}`);
      console.log("Quiz supprimé avec succès :", response.data);
    } catch (error) {
      console.error("Erreur lors de la suppression du quiz :", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, deleteUserQuiz }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
