import style from './UpdateItemForm.module.css';
import { Input } from "../../../../Visual Components/Input/Input";
import { useState } from 'react';
import { Button } from '../../../../Visual Components/Button/Button';

export function UpdateItemForm ({item, toUpdate}){

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [about, setAbout] = useState('');
    const [status, setStatus] = useState('-');

    function UpdateItem (){
        if (title.length > 3 || price >= 1 || about.length > 3){
            const itemUpdated = {
                name: title,
                about: about,
                price: price,
                isComplet: false,
            };
            toUpdate(item, itemUpdated);
            setTitle('');
            setPrice(0);
            setAbout('');
            setStatus('Updated with success');
        }else {
            setStatus('Invalid input, try again.');
        }
        // Status mensage
        setTimeout(() => { ResetStatus(); }, 1500);
    }

    function ResetStatus () { setStatus('-'); };

    const statusSytle = status === 'Updated with success' ? { textAlign: 'center', color: '#93f542' } : { textAlign: 'center', color: '#f56642' };

    return (
        <div className={style.formContent}>
            <div style={{width: '100%'}}>
                <span className={style.cardItem}>
                    <span style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <p style={{fontWeight: '800'}}>{item?.name}</p>
                        <p style={{fontStyle: 'italic'}}>${item?.price}</p>
                    </span>
                    <p style={{color: 'gray'}}>{item?.about}</p>
                </span>
            </div>
            <div style={{width: '100%'}}>
                <p className={style.title}>Update Item from the list</p>
                <span className={style.inputField}>
                    <p>New Title:</p>
                    <Input type={'text'} placeholder={'type...'} value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </span>
                <span className={style.inputField}>
                    <p>New Price:</p>
                    <Input type={'number'} placeholder={'type...'} value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                </span>
                <span className={style.inputField}>
                    <p>New About:</p>
                    <Input type={'text'} placeholder={'type...'} value={about} onChange={(e)=>{setAbout(e.target.value)}} />
                </span>
                <p style={statusSytle}>{status}</p>
                <Button label={'Update'} onClick={UpdateItem} width={'50%'}/>
            </div>
        </div>
    );
}