import React from 'react';
import style from './Footer.module.css';
import pampaLogo from '../../assets/pampa_entero_white.svg'
import logoDivina from '../../assets/Logo Divina Decadencia Low.png'

const Footer = props => {
  return (
    <footer className={style.Footer}>
      <div className={style.Content}>
        <a href="https://www.pampacode.com/" className={style.Link} rel="noreferrer noopenner" target="_blank">
          <img src={pampaLogo} className={style.Image} alt="Let's connect on slack" />
        </a>
       
        <a href="https://www.instagram.com/divinadecadenciaok/" className={style.Link} rel="noreferrer noopenner" target="_blank">
          <img src={logoDivina} className={style.ImageDivina} alt="Let's connect on slack" />
        </a>

      </div>
        <div className={style.ContainerText}>
           <p className={style.Text}>{'Junín - BA - Argentina'}</p>
           <p className={style.TextCop}>{ '©' + new Date().getFullYear()}</p>
        </div>
    </footer>
  );
};

export default Footer;