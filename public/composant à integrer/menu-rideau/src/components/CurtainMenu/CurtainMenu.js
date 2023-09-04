import React, { useState, useEffect } from 'react'
import './CurtainMenu.css'
import Menu from './menu.png'


const CurtainMenu = () => {
  const Url = '#';

  // mise en place de ???
  const [checkWidth, setCheckWidth] = useState(window.innerWidth)
  // fonction qui appelle le setter afin de mettre à jour la taille de l'ecran 
  const [toggleNav, setToggleNav] = useState(false)

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav)
  }

  const checkFunc = () => {
    setCheckWidth(window.innerWidth)
  }

  // verifier dans la console la bonne reponse de la fenetre
  console.log(checkWidth)

  useEffect(() => {

    window.addEventListener('resize', checkFunc)
    //le return fait ????
    return () => window.removeEventListener('resize', checkFunc)

  }, [])
  return (
    <>
      {/* on peut en react ne rien mettre dans les balise de debut et de fin pour ne pas a avoir à rajouter une div pour ne pas alourdir l'ensemble */}
      {checkWidth < 900 && (
        <button
          onClick={toggleNavFunc}
          className="floating-btn">
          <img src={Menu} alt='bouton Menu' />
        </button>
        )}
      <nav className={toggleNav ? "active" : ""}>
        <button 
        onClick={toggleNavFunc}
        className="close-curtain">X</button>
        <a href={Url} >HOME</a>
        <a href={Url}>SERVICE</a>
        <a href={Url}>CONTACT</a>
      </nav>
    </>
  )
}

export default CurtainMenu