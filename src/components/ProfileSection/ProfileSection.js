import React from 'react';
import style from './ProfileSection.module.css';
import Logo from '../../assets/Logo Divina Decadencia Low.png';

const ProfileSection = () => {
  return (
    <div className={style.ProfileContainer}>
      <img id="profile__img" className={style.Picture} src={Logo} alt="See Aakash Verma" />
    </div>
  );
};

export default ProfileSection;