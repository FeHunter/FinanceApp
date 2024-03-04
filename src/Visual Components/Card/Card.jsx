import { useState } from 'react';
import style from './Card.module.css';

export function Card ({title, info, myBalance, children}){

    const [expand, setExpand] = useState(true);

    const visible = expand ? {display: 'flex'} : {display: 'none'};

    const button = expand ? <i class="fa-solid fa-compress"></i> : <i class="fa-solid fa-expand"></i>;

    const restante = parseFloat(myBalance) - parseFloat(info).toFixed(2);

    const restanteStyle = restante > 0 ? { color: 'white' } : { color: 'red' };

    return (
        <div className={style.card}>
            <div className={style.controlBar} onClick={()=>{setExpand(!expand)}}>
                <div className={style.infoContent}>
                    <h2>{title}</h2>
                    <p><span className={style.valueTxt}>List value</span> {parseFloat(info).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    <p><span className={style.valueTxt}>Current Balance</span> {parseFloat(myBalance).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    <p><span className={style.valueTxt}>Remaining Balance</span> <span style={restanteStyle}>{restante.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></p>
                </div>
                <span>{button}</span>
            </div>
            <div className={style.content} style={visible}>
                {children}
            </div>
        </div>
    );
}