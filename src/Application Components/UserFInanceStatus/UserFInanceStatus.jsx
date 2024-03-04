import { useEffect, useState } from 'react';
import style from './UserFInanceStatus.module.css';
import { Window } from '../../Visual Components/Windows/Window';

export function UserFInanceStatus ({userName, balance, bills, investments, }){

    const [CurrencyExchange, setCurrencyExchange] = useState();
    const [editBalance, setEditBalance] = useState(false);
    const [editBills, setEditBills] = useState(false);

    // Receber e tratar API de cotação.
    useEffect(()=>{
        LoadCurrencyExchange();
    }, []);

    async function LoadCurrencyExchange () {
        return await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
        .then(res => { res.json().then(res => setCurrencyExchange(res)) });
    }

    const [expand, setExpand] = useState(false);
    const toggleButton = (
        <span className={style.toggle} onClick={()=>{setExpand(!expand); LoadCurrencyExchange()}}>
            { !expand ? <i class="fa-solid fa-caret-right"></i> : <i class="fa-solid fa-caret-left"></i> }
        </span>
    );
    const shrinkOption = (
        <div className={style.shrinkOption}>
            <span className={style.item} title="Balance">
                <span onClick={()=>{setEditBalance(!editBalance)}} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                    <i class="fa-solid fa-wallet"></i>
                    <p>Balance: {parseFloat(balance).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </span>
                <Window visible={editBalance} closeWindow={()=>{setEditBalance(!editBalance)}}>
                    <div>
                        <p>Tell us your current balance?</p>
                        <input type='number' placeholder='$2.250,00' />
                    </div>
                </Window>
            </span>
            <span className={style.item}  title="Bills">
                <span onClick={()=>{setEditBills(!editBills)}} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <p>Bills: {parseFloat(bills).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </span>
                <Window visible={editBills} closeWindow={()=>{setEditBills(!editBills)}}>
                    <div>
                        <p>what are your bills today?</p>
                        <input type='number' placeholder='$120'/>
                    </div>
                </Window>
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

    const status = () => {
        return balance > bills
            ? <p style={{color: '#8bd484'}}>Status: (good)<br/> {parseFloat(balance - bills).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            : <p style={{color: '#d48484'}}>Status: (bad)<br/> {parseFloat(balance - bills).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
    };

    const moreOptions = (
        <div className={style.expandPanel}>
            <Window
                visible={expand}
                closeWindow={() => { setExpand(!expand); }}
                customStyle={style.WindowContent}
            >
                <div>
                    {currencyContent()}
                    <span className={style.infosContent}> 
                        <span className={style.item} title="Balance">
                            <i class="fa-solid fa-wallet"></i>
                            <p>Balance: {parseFloat(balance).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        </span>
                        <span className={style.item}  title="Investments">
                            <i class="fa-solid fa-money-bill-trend-up"></i>
                            <p>Investments: {parseFloat(investments).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        </span> 
                        <span className={style.item}  title="Bills">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                            <p>Bills: {parseFloat(bills).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        </span>
                        {status()}
                    </span>
                </div>
            </Window>
            
        </div>
    );

    return (
        <div className={style.main}>
            <p>Welcome, {userName}.</p>
            { !expand ? shrinkOption : moreOptions}
        </div>
    );
}