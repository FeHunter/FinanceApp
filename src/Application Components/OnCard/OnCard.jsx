import style from './OnCard.module.css';
import { Card } from "../../Visual Components/Card/Card";
import { OnCardInstallments } from './Installments/OnCardInstallments';

export function OnCard (){
    return (
        <Card title="On Card">
            <section className={style.mainArea}>
                <div className={style.area1}>
                    <OnCardInstallments/>
                </div>
                <div className={style.area2}>
                    <p>Juros por atraso</p>
                </div>
                <div className={style.area3}>
                    <p>Help</p>
                </div>
            </section>
        </Card>
    );
}