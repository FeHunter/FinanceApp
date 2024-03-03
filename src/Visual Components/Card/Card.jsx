import { useState } from 'react';
import style from './Card.module.css';

export function Card ({title, children}){

    const [expand, setExpand] = useState(true);

    const visible = expand ? {display: 'flex'} : {display: 'none'};

    const button = expand ? <i class="fa-solid fa-compress"></i> : <i class="fa-solid fa-expand"></i>;

    return (
        <div className={style.card}>
            <div className={style.controlBar} onClick={()=>{setExpand(!expand)}}>
                <h2>{title}</h2>
                <span>{button}</span>
            </div>
            <div className={style.content} style={visible}>
                {children}
            </div>
        </div>
    );
}