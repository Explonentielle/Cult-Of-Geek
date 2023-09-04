import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./Pages/Home"
import Quizz from "./Pages/Quizz"
import Result from "./Pages/Result"
import QuizzCreation from "./Pages/QuizzCreation"
import About from './Pages/About'
import Themes from './Pages/Themes'
import Register from './Pages/Register'
import emailjs from 'emailjs-com';
import Account from './Pages/Account'
import Recap from './components/Recap'
import { AuthProvider } from './AuthContext';
import axios from 'axios';
axios.defaults.withCredentials = true;




const Root = () => {
  emailjs.init('ukK4nOqVQx9KqkBHP');
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header className={'header'} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Selection" element={<Themes />} />
          <Route exact path="/Inscription" element={<Register />} />
          <Route exact path="/Quizz/:theme" element={<Quizz />} />
          <Route exact path="/Result" element={<Result />} />
          <Route exact path="/Cree-ton-quizz" element={<QuizzCreation />} />
          <Route exact path="/Mon-compte" element={<Account />} />
          <Route exact path="/A-propos-de-nous" element={<About />} />
          <Route exact path="/Recap" element={<Recap />} />

        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}
export default Root
