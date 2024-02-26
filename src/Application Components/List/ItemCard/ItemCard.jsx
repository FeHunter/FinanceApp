import { useEffect, useState } from 'react';
import style from './ItemCard.module.css';
import { FloatingItem } from '../../../Visual Components/Floating Item/FloatingItem';
import { PopUp } from '../../../Visual Components/PopUp/PopUp';

export function ItemCard({ item, onClick, popUpContent, onClickSend }) {
  const [popUp, setPopUp] = useState(false);

  // const [complet, setComplet] = useState(
  //   item !== null ? item.isComplet : false
  // );

  const [complet, setComplet] = useState();

  const completStyle = complet
    ? {
        borderLeft: '20px solid #1AE586',
        borderRight: '1px solid #1AE586',
        borderBottom: '1px solid #1AE586',
        borderTop: '1px solid #1AE586',
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
                onClickSend(complet);
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
          title="Installments"
          trigger={
            <i
              class="fa-solid fa-comment-dollar"
              onClick={() => {
                setPopUp(!popUp);
              }}
            ></i>
          }
          content={
            <PopUp
              visible={popUp}
              content={popUpContent}
              closePopUp={() => {
                setPopUp(false);
              }}
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
