import style from './ButtonCard.module.css';

export function ButtonCard ({children}){
    return (
        <div className={style.buttonCard}>
            {children}
        </div>
    );
}