import style from './OnCard.module.css';
import { Card } from "../../Visual Components/Card/Card";
import { OnCardFindInterest } from './FindInterest/OnCardFindInterest';

export function OnCard (){
    return (
        <Card title="On Card">
            <section className={style.mainArea}>
                <div className={style.area1}>
                    <h2 className={style.title}>Calculate product interest</h2>
                    <OnCardFindInterest/>
                </div>
                <div className={style.area2}>
                    <h2 className={style.title}>Interest for delay</h2>
                </div>
                <div className={style.area3}>
                    <h2 className={style.title}>Help</h2>
                </div>
            </section>
        </Card>
    );
}