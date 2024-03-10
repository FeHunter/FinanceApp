import { useState } from 'react';
import { Button } from '../../../../Visual Components/Button/Button';
import { Input } from '../../../../Visual Components/Input/Input';
import style from './StockForm.module.css';

export function StockForm ({onClick, status}){

    const [ticket, setTicket] = useState('');
    const [stockAmount, setStockAmount] = useState(0);
    const [details, setDetails] = useState('');

    const form = {
        ticket: ticket,
        stockAmount: stockAmount,
        details: details,
    };

    function sendData (){
        onClick(form);
    }

    return (
        <div className={style.formContent}>
            <span className={style.inputField}>
                <label htmlFor="stockTicket" className={style.label}>
                    Ticket
                </label>
                <Input type={'text'}  placeholder={'ticket...'} id={'stockTicket'} onChange={e => setTicket(e.target.value)} />
            </span>
            <span className={style.inputField}>
                <label htmlFor="stockAmount" className={style.label}>
                    Stock amount
                </label>
                <Input type={'text'}  placeholder={'stock amount...'} id={'stockAmount'} onChange={e => setStockAmount(e.target.value)} />
            </span>
            <span className={style.inputField}>
                <label htmlFor="details" className={style.label}>
                    Details
                </label>
                <Input type={'text'}  placeholder={'details...'} id={'details'} onChange={e => setDetails(e.target.value)} />
            </span>
            <span className={style.inputField}>
                <Button label={'Save'} width={'100%'} onClick={sendData} />
            </span>
            <span className={style.inputField}>
                <p>{status}</p>
            </span>
        </div>
    );
}