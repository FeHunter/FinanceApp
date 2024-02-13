import { useState } from 'react';
import style from './ToggleMenu.module.css';

export function ToggleMenu({ title, children, view }) {
  const [visible, setVisible] = useState(view);
  let viewContend = visible ? { display: 'block' } : { display: 'none' };
  let toggleText = visible ? (
    <i class="fa-solid fa-angle-up"></i>
  ) : (
    <i class="fa-solid fa-angle-down"></i>
  );
  return (
    <div className={style.toggleMenu}>
      <div
        className={style.header}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <h2>{title}</h2>
        <span className={style.toggle}>{toggleText}</span>
      </div>
      <div style={viewContend} className={style.content}>
        {children}
      </div>
    </div>
  );
}
