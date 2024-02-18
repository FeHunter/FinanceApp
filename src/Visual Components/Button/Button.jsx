import style from './Button.module.css';

export function Button ({label, width, onClick}){
    return (
        <div className={style.buttonArea}>
            <button
            onClick={onClick}
            className={style.button}
            style={{width: width}}>
                {label}
            </button>
        </div>
    );
}