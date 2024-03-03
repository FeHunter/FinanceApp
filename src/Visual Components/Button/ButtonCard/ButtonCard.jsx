import style from './ButtonCard.module.css';

export function ButtonCard ({children, onClick}){
    return (
        <div className={style.buttonCard} onClick={onClick}>
            {children}
        </div>
    );
}