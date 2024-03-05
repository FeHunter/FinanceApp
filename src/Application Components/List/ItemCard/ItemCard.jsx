import { useState } from 'react';
import style from './ItemCard.module.css';
import { FloatingItem } from '../../../Visual Components/Floating Item/FloatingItem';
import { PopUpWindow } from '../../../Visual Components/PopUpWindow/PopUpWindow';

export function ItemCard({ item, onClick,popUpWindowContent, onClickSend }) {
  const [window, setWindow] = useState(false);

  const [complet, setComplet] = useState(item.isComplet);

  function markAsComplet (item){
    item.setComplet(complet);
  }

  const completStyle = complet
    ? {
        borderLeft: '20px solid #93f542',
        borderRight: '1px solid #93f542',
        borderBottom: '1px solid #93f542',
        borderTop: '1px solid #93f542',
        transition: '.3s',
        borderStartStartRadius: '20px',
        borderEndStartRadius: '20px',
      }
    : {};

  return (
    <div className={style.itemCard} style={completStyle}>
      <p className={style.title}>{item?.name}</p>
      <p className={style.price}>${item?.price}</p>
      <p className={style.about}>{item?.about}</p>
      <span className={style.actionsButtons}>
        <FloatingItem
          title="Mark as complet"
          trigger={
            <div
              onClick={() => {
                setComplet(!complet);
                onClickSend(markAsComplet);
              }}
            >
              {complet ? (
                <i class="fa-regular fa-square-check"></i>
              ) : (
                <i class="fa-regular fa-square-full"></i>
              )}
            </div>
          }
        />
        <FloatingItem
          title="Edit"
          trigger={
            <i class="fa-solid fa-pen-to-square"
              onClick={() => {
                setWindow(true);
              }}
            ></i>
          }
          content={
            <PopUpWindow
              visible={window}
              onClickDone={()=>{setWindow(false);}}
              onClickCancel={()=>{setWindow(false);}}
              children={popUpWindowContent}
            />
          }
        />
        <FloatingItem
          title="Remove"
          trigger={<i class="fa-solid fa-trash" onClick={onClick}></i>}
        />
      </span>
    </div>
  );
}
