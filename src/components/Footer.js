import React from 'react';

const Footer = ({ copyright, className }) => {
  return (
    <div className={`Footer ${className}`}>
      <div className="logo-left">
        <img src={`${process.env.PUBLIC_URL}/media/log.png`} alt="Logo Left" />
      </div>
      <div  className='footerContainer'>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <img src={`${process.env.PUBLIC_URL}/media/facebook.png`} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com">
            <img src={`${process.env.PUBLIC_URL}/media/twitter.png`} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com">
            <img src={`${process.env.PUBLIC_URL}/media/instagram.png`} alt="Instagram" />
          </a>
        </div>
        <h1 className="copyright-text">&copy; Copyrigth 2023 CultOfGeek.com</h1>
      </div>
      <div className="logo-right">
        <img src={`${process.env.PUBLIC_URL}/media/log.png`} alt="Logo Right" />
      </div>
    </div>
  );
};

export default Footer;
