import { Menu } from 'antd';
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
    if (window.innerWidth <= 8000) { setIsMenuOpen(!isMenuOpen) }
    navigate(key.key)
  };

  return (
    <header className={className}>
      <img onClick={() => navigate("/")} className='logo' src={process.env.PUBLIC_URL + 'media/log.png'} alt="" />
      <div className='menuContainer'>

        <Menu
          className={isMenuOpen ? 'OpenMenu' : window.innerWidth <= 8000 ? 'hidden' : 'menu'}
          mode={window.innerWidth <= 8000 ? 'verticale' : 'horizontal'}
          ref={menuRef}
        >

          <Menu.Item key="/" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              {/* <img className="menu-icon" src={`${process.env.PUBLIC_URL}/media/michelangelo.png`} alt="Accueil" /> */}
              <p>Accueil</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/Inscription" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              {/* <img className="menu-icon" src={`${process.env.PUBLIC_URL}/media/scream.png`} alt="Accueil" /> */}
              <p>S'inscrire</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/Selection" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              {/* <img className="menu-icon" src={`${process.env.PUBLIC_URL}/media/potter.png`} alt="Accueil" /> */}
              <p>Themes</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/Cree-ton-quizz" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              {/* <img className="menu-icon" src={`${process.env.PUBLIC_URL}/media/riu.png`} alt="Accueil" /> */}
              <p>Cree ton Quizz</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/Mon-compte" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              {/* <img className="menu-icon" src={`${process.env.PUBLIC_URL}/media/razmo.png`} alt="Accueil" /> */}
              <p>Mon compte</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/A-propos-de-nous" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              {/* <img className="menu-icon" src={`${process.env.PUBLIC_URL}/media/razmo.png`} alt="Accueil" /> */}
              <p>A Propos de Nous</p>
            </div>
          </Menu.Item>
        </Menu>


        <div onClick={toggleMenu} className="burgerContainer">
          <img
            className="burger"
            src={`${process.env.PUBLIC_URL}/media/iconBurger.png`}
          />
          <p className='burgerMenu'>Menu</p>
        </div>

      </div>
    </header>
  );
};

export default Header