import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/Auth/getUser'); 
      const userData = response.data;
      console.log(userData);
      setUser(userData)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedToken = Cookies.get('authToken');
    if (storedToken) {
      console.log(storedToken)
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

  const logout = () => {
    Cookies.remove('authToken');
    axios.defaults.headers.common['Authorization'] = '';
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
