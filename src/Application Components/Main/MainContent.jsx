import { useState } from 'react';
import { Installments } from '../../Application Components/Installments/Installments';
import { List } from '../../Application Components/List/List';
import { ButtonCard } from '../../Visual Components/Button/ButtonCard/ButtonCard';
import { PopUp } from '../../Visual Components/PopUp/PopUp';
import { BillsManager } from '../BillsManager/BillsManager';
import { OnCard } from '../OnCard/OnCard';
import style from './MainContent.module.css';

export function MainContent() {

  const [viewWishList, setviewWishList] = useState(false);
  const [list, setList] = useState(false);

  return (
    <main className={style.main}>
      {/*  */}
      {/* <OnCard/> */}
      {/* <Installments /> */}
      {/* <BillsManager /> */}
      <div className={style.navegationCard}>
        <ButtonCard onClick={()=>{setviewWishList(true)}}>
          <p>Wishlist</p>
        </ButtonCard>
        <ButtonCard>
          <p>Investments</p>
        </ButtonCard>
        <PopUp
          visible={list}
          closePopUp={()=>{setList(!list)}}
          children={<List />}
        >
          <ButtonCard>
            <p>Wish List</p>
          </ButtonCard>
        </PopUp>
      </div>

      {/* Windows */}
      <PopUp visible={viewWishList} closePopUp={()=>{setviewWishList(false)}}>
        <div className={style.contentWindow}>
          <h2>My Wishlist</h2>
          <List title={'Wishlist'}/>
        </div>
      </PopUp>

    </main>
  );
}
