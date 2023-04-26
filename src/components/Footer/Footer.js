import React from 'react';
import style from './Footer.module.css';
import Zuri from '../../assets/zuri.svg';
import I4G from '../../assets/I4G.png';
import pampaLogo from '../../assets/pampa_entero_white.svg'
import logoDivina from '../../assets/Logo Divina Decadencia Low.png'

const Footer = props => {
  return (
    <footer className={style.Footer}>
      <hr className={style.Line} />
      <div className={style.Content}>
        <a href="https://github.com/skyv26" className={style.Link} rel="noreferrer noopenner" target="_blank">
          <img src={pampaLogo} className={style.Image} alt="Let's connect on slack" />
        </a>
        <a href='wwww.pampacode.com' target='_blank'>
        <p className={style.Text}>www.pampacode.com</p>
        </a>
        <a href="https://github.com/skyv26" className={style.Link} rel="noreferrer noopenner" target="_blank">
          <img src={logoDivina} className={style.ImageDivina} alt="Let's connect on slack" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;