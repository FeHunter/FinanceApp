import { useState } from 'react';
import style from './UserFInanceStatus.module.css';

export function UserFInanceStatus ({userName, balance, bills, investments}){

    const [expand, setExpand] = useState(false);

    const toggleButton = (
        <span className={style.toggle} onClick={()=>{setExpand(!expand)}}>
            { !expand ? <i class="fa-solid fa-caret-right"></i> : <i class="fa-solid fa-caret-left"></i> }
        </span>
    );

    const shrinkOption = (
        <div className={style.shrinkOption}>
            <span className={style.item} title="Balance">
                <i class="fa-solid fa-wallet"></i>
                <p>Balance: {balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </span>
            {toggleButton}
        </div>
    );

    const moreOptions = (
        <div className={style.expandPanel}>
            <span className={style.item} title="Balance">
                    <i class="fa-solid fa-wallet"></i>
                    <p>Balance: {balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </span>
                <span className={style.item}  title="Bills">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <p>Bills: {bills.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </span>
                <span className={style.item}  title="Investments">
                    <i class="fa-solid fa-money-bill-trend-up"></i>
                    <p>Investments: {investments.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </span> 
            {toggleButton}
        </div>
    );

    return (
        <div className={style.main}>
            <p>Welcome, {userName}.</p>
            { !expand ? shrinkOption : moreOptions}
        </div>
    );
}