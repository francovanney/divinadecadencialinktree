import React from 'react';
import style from './LinkSection.module.css';

const LinkSection = props => {
  return (
    <>
    <ul className={style.LinkSection}>
      <li className={style.List}>
        <a href="https://www.youtube.com/watch?v=N32dYNp3m54&list=PLFfoYWmZbcnEW0BLyRG0GBNuDFL21wm3K&index=1" id="pitch" className={style.Link2} rel="noreferrer noopenner" target="_blank"><span className={style.emoji}>🎶 </span> Sesión <span className={style.new}> #EnElEstudio</span></a>
      </li>
      <li className={style.List}>
        <a href="https://www.instagram.com/divinadecadenciaok/" id="pitch" className={style.Link} rel="noreferrer noopenner" target="_blank">Instagram</a>
      </li>
      <li className={style.List}>
        <a href="https://www.youtube.com/channel/UCE7OHFHafE6BrjX-iUuBWBw" className={style.Link} id="book__design" rel="noreferrer noopenner" target="_blank">Youtube</a>
      </li>
      <li className={style.List}>
        <a href="https://www.facebook.com/divinadecadenciaok" id="pitch" className={style.Link} rel="noreferrer noopenner" target="_blank">Facebook</a>
      </li>
      <li className={style.List}>
        <a href="https://forms.gle/fJEmjGWAbHmULB137" className={style.Link} target="_blank" rel="noopener noreferrer">Presupuesto</a>
      </li>
    </ul>
          <div className={style.VideoContainer}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N32dYNp3m54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
    </>
  );
};

export default LinkSection;
