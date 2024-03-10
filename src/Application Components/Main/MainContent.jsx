import { useState } from 'react';
import { Installments } from '../../Application Components/Installments/Installments';
import { List } from '../../Application Components/List/List';
import { ButtonCard } from '../../Visual Components/Button/ButtonCard/ButtonCard';
import { Window } from '../../Visual Components/Windows/Window';
import { BillsManager } from '../BillsManager/BillsManager';
import { OnCard } from '../OnCard/OnCard';
import style from './MainContent.module.css';
import { Card } from '../../Visual Components/Card/Card';
import { ToggleMenu } from '../../Visual Components/ToggleMenu/ToggleMenu';
import { FirebaseRoutes } from '../../Routes/API/FirebaseRoutes';
import { InvestmentScreen } from '../Investment/InvestmentScreen';

export function MainContent({balance}) {

  const [viewWishList, setviewWishList] = useState(false);
  const [viewBillsList, setviewBillsList] = useState(false);
  const [viewInvestments, setviewInvestments] = useState(false);

  const [list, setList] = useState(false);

  const firebase = FirebaseRoutes();

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
        <ButtonCard onClick={()=>{setviewBillsList(true)}}>
          <p>Bills</p>
        </ButtonCard>
        <ButtonCard onClick={()=>{setviewInvestments(true)}}>
          <p>Investments</p>
        </ButtonCard>
        <Window
          visible={list}
          closeWindow={()=>{setList(!list)}}
          children={<List />}
        >
          <ButtonCard>
            <p>Wish List</p>
          </ButtonCard>
        </Window>
      </div>

      {/* Windows */}
      <Window visible={viewWishList} closeWindow={()=>{setviewWishList(false)}}>
        <div className={style.contentWindow}>
          <List title={'Wishlist'} urlResource={firebase.wishList} balance={balance}  />
          <ToggleMenu title={'Help'}>
            <div>
              <p>
                Wishlist is a section where you can place your desired item to buy. <br/>
                Here you can also find some offers that will help you save some money and make your wish come true.
              </p>
              <p>
                new features coming soon...
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit inventore, esse blanditiis nihil ipsum perferendis voluptas repellendus impedit ad quisquam aut numquam minus tempora accusantium quis labore dolores autem ab?</p>
            </div>
          </ToggleMenu>
        </div>
      </Window>
      <Window visible={viewBillsList} closeWindow={()=>{setviewBillsList(false)}}>
        <div className={style.contentWindow}>
          <List title={'Bills'} urlResource={firebase.billsList} balance={balance}/>
        </div>
      </Window>
      <Window visible={viewInvestments} closeWindow={()=>{setviewInvestments(false)}}>
        <div className={style.contentWindow}>
          <InvestmentScreen/>
        </div>
      </Window>

      

    </main>
  );
}
