import style from './PopUpWindow.module.css';
import {Button} from '../Button/Button.jsx';

export function PopUpWindow ({visible, onClickCancel, onClickDone, children}){

    const view = visible ? { display: 'flex' } : { display: 'none' };

    return (
        <div className={style.popUpBackground} style={view}>
            <div className={style.popUpWindow}>
                <div className={style.popUpContent}>
                    {children}
                </div>
                <span className={style.popUpCancelBtn}>
                    <Button label={"Cancel"} onClick={onClickCancel} width={'100%'}/>
                </span>
                <span className={style.popUpOkBtn}>
                    <Button label={"Done"} onClick={onClickDone} width={'100%'}/>
                </span>
            </div>
        </div>
    );
}