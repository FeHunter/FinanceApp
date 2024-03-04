import style from './Window.module.css';

export function Window({ visible, children, closeWindow, customStyle }) {
  const viewPopUp = visible ? { display: 'flex' } : { display: 'none' };
  return (
    <div className={style.mainDiv} style={viewPopUp}>
      <div className={style.background}>
        <div className={customStyle ? customStyle : style.content}>{children}</div>
        <button className={style.sendButton} onClick={closeWindow}> Close </button>
      </div>
    </div>
  );
}
