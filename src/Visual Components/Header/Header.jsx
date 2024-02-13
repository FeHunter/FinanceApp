import { useState } from 'react';
import style from './Header.module.css';

export function Header({ title }) {
  const [openMenu, setOpenMenu] = useState(false);
  const floatMenu = openMenu ? { display: 'flex' } : { display: 'none' };
  return (
    <header className={style.header}>
      <i class="fa-solid fa-user"></i>
      {/* <img src={logo} alt={`logo do ${title}`} className={style.logoImg} /> */}
      <h1>{title}</h1>
      <nav className={style.navList}>
        <span onClick={() => setOpenMenu(!openMenu)} className={style.toggle}>
          =
        </span>
        <div className={style.floatMenu} style={floatMenu}>
          <ul>
            <li>Home</li>
            <li>To Buy</li>
            <li>Bills</li>
            <li>Invest</li>
            <span
              onClick={() => setOpenMenu(!openMenu)}
              className={style.toggle}
            >
              X
            </span>
          </ul>
        </div>
      </nav>
    </header>
  );
}
