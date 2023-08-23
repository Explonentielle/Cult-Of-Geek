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
import SignIn from './Pages/SignIn'
import emailjs from 'emailjs-com';



const Root = () => {
  emailjs.init('ukK4nOqVQx9KqkBHP');
  return (
    <BrowserRouter>
      <Header logo={process.env.PUBLIC_URL + 'media/log.png'} className={'header'} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Selection" element={<Themes />} />
        <Route exact path="/Inscription" element={<SignIn />} />
        <Route exact path="/Quizz/:theme" element={<Quizz />} />
        <Route exact path="/Result" element={<Result />} />
        <Route exact path="/Crée ton quizz" element={<QuizzCreation />} />
        <Route exact path="/A propos de nous" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default Root