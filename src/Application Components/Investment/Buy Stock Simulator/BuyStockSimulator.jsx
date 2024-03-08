import { useEffect, useState } from 'react';
import { Input } from '../../../Visual Components/Input/Input';
import { PopUpWindow } from '../../../Visual Components/PopUpWindow/PopUpWindow';
import style from './BuyStockSimulator.module.css';
import { Button } from '../../../Visual Components/Button/Button';

export function BuyStockSimulator (){

    const [editShares, setEditShares] = useState(false);
    const [editSharesPrice, setEditSharesPrice] = useState(false);
    const [editDividen, setEditDividen] = useState(false);

    const [numberShares, setNumberShares] = useState(0);
    const [SharePrice, setSharePrice] = useState(0);
    const [dividends, setDividends] = useState(0);

    const [totalBalance, setTotalBalance] = useState(0);
    const [totalDividend, setTotalDividend] = useState(0);

    useEffect(()=>{
        setTotalBalance( numberShares * SharePrice );
        setTotalDividend ( numberShares * dividends );
    }, [numberShares, SharePrice, dividends])

    function EditValue(title, valueToView, editFunction){
        return (
            <div className={style.editContent}>
                <p>{title} ({valueToView})</p>
                <Input type={'number'} placeholder={'type...'} onChange={editFunction} />
            </div>
        );
    }

    return (
        <div className={style.InvestStockSimulator}>
          <div className={style.titleContent}>
            <p>
              Stock Buy Simulator (<span className={style.ticketName}>SNAG11</span>)
            </p>
            <span className={style.searchContent}>
              <Input type="text" placeholder="search for ticket" />
              <span className={style.searchButton}><i class="fa-solid fa-magnifying-glass"></i></span>
            </span>
          </div>
          <div className={style.infoContent}>
            <p className={style.title}>Ticket Informations</p>
            <span className={style.cell}>
              <p>Shares</p>
              <p>10</p>
            </span>
            <span className={style.cell}>
              <p>Share price</p>
              <p>R$10,06</p>
            </span>
            <span className={style.cell}>
              <p>Last dividend</p>
              <p>R$0,11</p>
            </span>
          </div>
          <div className={style.buyContent}>
            <p className={style.title}>Buy Simulator</p>
            <span className={`${style.cell} ${style.editOn}`} onClick={()=>{setEditShares(true)}}>
              <p>Number of shares</p>
              <span className={style.editCell}>
                <p>{numberShares}</p>
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </span>
            <span className={`${style.cell} ${style.editOn}`} onClick={()=>{setEditSharesPrice(true)}}>
              <p>Current price</p>
              <span className={style.editCell}>
                <p>{parseFloat(SharePrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </span>
            <span className={`${style.cell} ${style.editOn}`}  onClick={()=>{setEditDividen(true)}}>
              <p>Last dividends</p>
              <span className={style.editCell}>
                <p>{parseFloat(dividends).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </span>
          </div>
          <div className={style.totalContent}>
            <p className={style.title}>Final Balance</p>
            <span className={style.cell}>
              <p>Total Balance</p>
              <p>{parseFloat(totalBalance).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </span>
            <span className={style.cell}>
              <p>Total Dividends Balance</p>
              <p>{parseFloat(totalDividend).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </span>
          </div>

        <PopUpWindow
            visible={editShares}
            children={EditValue('Number of shares', numberShares, e => {setNumberShares(e.target.value)})}
            onClickCancel={()=>{setEditShares(false)}}
        />
        <PopUpWindow
            visible={editSharesPrice}
            children={EditValue('Current price', SharePrice, e => {setSharePrice(e.target.value)})}
            onClickCancel={()=>{setEditSharesPrice(false)}}
        />
        <PopUpWindow
            visible={editDividen}
            children={EditValue('Current dividends', dividends, e => {setDividends(e.target.value)})}
            onClickCancel={()=>{setEditDividen(false)}}
        />

        </div>
      );
}