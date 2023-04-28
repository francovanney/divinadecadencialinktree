import React from 'react';
import style from './ProfileSection.module.css';
import Logo from '../../assets/Logo Divina Decadencia Low.png';

const ProfileSection = () => {
  return (
    <div className={style.ProfileContainer}>
      <a href="https://www.instagram.com/divinadecadenciaok/" rel="noreferrer noopenner" target="_blank">
      <img id="profile__img" className={style.Picture} src={Logo} alt="Divina Decadencia" />
      </a>
      <p className={style.subtitle}>🎺 TrIbuto a Los AutentIcos Decadentes 🎉</p>
    </div>
  );
};

export default ProfileSection;