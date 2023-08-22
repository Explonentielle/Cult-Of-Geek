import { Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react'
import LoginBar from './LoginBar';



const Header = ({ logo, className }) => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (key) => {
    if (window.innerWidth <= 8000) { setIsMenuOpen(!isMenuOpen)}
    navigate(key.key)
  };

  return (
      <header className={className}>
      <img onClick={() => navigate("/")} className='logo' src={logo} alt="" />
        <div className='menuContainer'>

          <LoginBar className={isMenuOpen ? '': 'hidden'}/>
           
          <Menu
            className={isMenuOpen ? 'OpenMenu' : window.innerWidth <= 8000 ? 'hidden' : 'menu'}
            mode={window.innerWidth <= 8000 ? 'verticale' : 'horizontal'}
            ref={menuRef}
          >
        
            <Menu.Item key="/" onClick={handleMenuItemClick}>
              <p>Acceuil</p>
            </Menu.Item>
            <Menu.Item key="/Inscription" onClick={handleMenuItemClick}>
              <p>S'inscrire</p>
            </Menu.Item>
            <Menu.Item key="/Selection" onClick={handleMenuItemClick}>
              <p>Themes</p>
            </Menu.Item>
            <Menu.Item key="/Crée ton quizz" onClick={handleMenuItemClick}>
              <p>Crée ton Quizz</p>
            </Menu.Item>
            <Menu.Item key="/A propos de nous" onClick={handleMenuItemClick}>
              <p>A Propos de Nous</p>
            </Menu.Item>
          </Menu>

          {window.innerWidth <= 8000 ? (
            <div onClick={toggleMenu} className="burgerContainer">
              <img
                className="burger"
                src={`${process.env.PUBLIC_URL}/media/iconBurger.png`}
              />
              <p className='burgerMenu'>Menu</p>
            </div>
          ) : null}
        </div>
      </header>
  );
};

export default Header