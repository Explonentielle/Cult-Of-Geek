import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react'

const Header = ({ className }) => {
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
              <p>Accueil</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/Inscription" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              <p>S'inscrire</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/Categories" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              <p>Categories</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/Cree-ton-quizz" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              <p>Cree ton Quizz</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/Mon-compte" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              <p>Mon compte</p>
            </div>
          </Menu.Item>
          <Menu.Item key="/Contact" onClick={handleMenuItemClick}>
            <div className="menu-item-content">
              <p>Nous Contacter</p>
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