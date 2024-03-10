import { useEffect, useState } from 'react';
import { Input } from '../../../Visual Components/Input/Input';
import { PopUpWindow } from '../../../Visual Components/PopUpWindow/PopUpWindow';
import style from './BuyStockSimulator.module.css';
import { Button } from '../../../Visual Components/Button/Button';

export function BuyStockSimulator (){

  const [sharePrice, setSharePrice] = useState(0);
  const [dividend, setDividen] = useState(5);

    const [editShares, setEditShares] = useState(false);
    const [numberShares, setNumberShares] = useState(0);

    const [totalBalance, setTotalBalance] = useState(0);
    const [totalDividend, setTotalDividend] = useState(0);

    useEffect(()=>{
        setTotalBalance( numberShares * sharePrice );
        setTotalDividend ( numberShares * dividend );
    }, [numberShares, sharePrice, dividend])

    function EditValue(title, valueToView, editFunction){
        return (
            <div className={style.editContent}>
                <p>{title} ({valueToView})</p>
                <Input type={'number'} placeholder={'type...'} onChange={editFunction} />
            </div>
        );
    }


    // Load API
    const [ticket, setTicket] = useState('Search for a stock ticket');
    const [ticketInfo, setTicketInfo] = useState([]);
    useEffect(()=>{
      LoadTicket();
    },[ticket]);

    async function LoadTicket (){
      await fetch(`https://brapi.dev/api/quote/${ticket.toUpperCase()}?token=s2WAG2ugY5WUyVG7SVDQwV`)
      .then(res => res.json())
      .then(res => setTicketInfo(res));
      setSharePrice(parseFloat(ticketInfo.results[0].regularMarketOpen));
      setDividen(parseFloat());
      console.log(ticketInfo.results[0]);
    }

    return (
        <div className={style.InvestStockSimulator}>
          <div className={style.titleContent}>
            <p>
              Stock Buy Simulator (<span className={style.ticketName}>{ticket.toUpperCase()}</span>)
            </p>
            <span className={style.searchContent}>
              <Input type="text" placeholder="search for ticket" onBlur={e => {setTicket(e.target.value)}}/>
              <span className={style.searchButton} onClick={LoadTicket}><i class="fa-solid fa-magnifying-glass"></i></span>
            </span>
          </div>
          <div className={style.infoContent}>
            <p className={style.title}>Ticket Informations</p>
            <span className={style.cell}>
              <p>Share Price</p>
              <p>{parseFloat(sharePrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </span>
            <span className={style.cell}>
              <p>Last Dividend</p>
              <p>{parseFloat(dividend).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
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
            <span className={style.cell} onClick={()=>{setEditSharesPrice(true)}}>
              <p>Total price</p>
              <span className={style.editCell}>
                <p>{parseFloat(totalBalance).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
              </span>
            </span>
            <span className={style.cell}  onClick={()=>{setEditDividen(true)}}>
              <p>Total dividends</p>
              <span className={style.editCell}>
                <p>{parseFloat(totalDividend).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
              </span>
            </span>
          </div>

          <PopUpWindow
              visible={editShares}
              children={EditValue('Number of shares', numberShares, e => {setNumberShares(e.target.value)})}
              onClickCancel={()=>{setEditShares(false)}}
          />

        </div>
      );
}