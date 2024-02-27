import { useEffect, useState } from 'react';
import style from './UserFInanceStatus.module.css';
import { PopUp } from '../../Visual Components/PopUp/PopUp';

export function UserFInanceStatus ({userName, balance, bills, investments}){

    const [CurrencyExchange, setCurrencyExchange] = useState();

    // Receber e tratar API de cotação.
    useEffect(()=>{
        LoadCurrencyExchange();
    }, []);

    async function LoadCurrencyExchange () {
        await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
        .then(res => { res.json().then(res => setCurrencyExchange(res)) });
        console.log(CurrencyExchange);
    }
    function USDtoBRL () {
        return CurrencyExchange.USDBRL.ask * balance;
    }

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

    const currencyContent = () =>{
        return CurrencyExchange !== undefined ?
        (
            <span className={style.CurrencyExchange}>
                <p>Dolar ${parseFloat(CurrencyExchange.USDBRL.ask).toFixed(2)}</p>
                <p>Euro €{parseFloat(CurrencyExchange.EURBRL.ask).toFixed(2)}</p>
                <p>BTC ${parseFloat(CurrencyExchange.BTCBRL.ask).toFixed(2)}</p>
            </span>
        )
        :
        (
            <p>Loading...</p>
        )
    }

    const moreOptions = (
        <div className={style.expandPanel}>
            <PopUp
                visible={expand}
                closePopUp={() => { setExpand(!expand); }}
                customStyle={style.popUpContent}
            >
                <div>
                    {currencyContent()}
                    <span className={style.item} title="Balance">
                        <i class="fa-solid fa-wallet"></i>
                        <p>Balance: {balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </span>
                    <span className={style.item}  title="Investments">
                        <i class="fa-solid fa-money-bill-trend-up"></i>
                        <p>Investments: {investments.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </span> 
                    <span className={style.item}  title="Bills">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                        <p>Bills: {bills.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </span>
                </div>
            </PopUp>
            
        </div>
    );

    return (
        <div className={style.main}>
            <p>Welcome, {userName}.</p>
            { !expand ? shrinkOption : moreOptions}
        </div>
    );
}