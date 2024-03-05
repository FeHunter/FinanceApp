import style from './UpdateItemForm.module.css';
import { Input } from "../../../../Visual Components/Input/Input";

export function UpdateItemForm ({item}){
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
                    <Input type={'text'} placeholder={'type...'} />
                </span>
                <span className={style.inputField}>
                    <p>New Price:</p>
                    <Input type={'number'} placeholder={'type...'} />
                </span>
                <span className={style.inputField}>
                    <p>New About:</p>
                    <Input type={'text'} placeholder={'type...'} />
                </span>
            </div>
        </div>
    );
}