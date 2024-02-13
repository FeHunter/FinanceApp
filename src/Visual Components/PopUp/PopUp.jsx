import style from './PopUp.module.css';

export function PopUp({ visible, content, closePopUp }) {
  const viewPopUp = visible ? { display: 'flex' } : { display: 'none' };
  return (
    <div className={style.mainDiv} style={viewPopUp}>
      <div className={style.background}>
        <div className={style.content}>{content}</div>
        <button className={style.sendButton} onClick={closePopUp}>
          Close
        </button>
      </div>
    </div>
  );
}
