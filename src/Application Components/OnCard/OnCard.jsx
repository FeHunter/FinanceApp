import style from './OnCard.module.css';
import { Card } from "../../Visual Components/Card/Card";
import { OnCardFindInterest } from './FindInterest/OnCardFindInterest';
import { Button } from '../../Visual Components/Button/Button';
import { useEffect, useState } from 'react';
import { InterestForDelay } from './InterestForDelay/InterestForDelay';

export function OnCard (){

    const [areaView, setAreaView] = useState("area1");

    const visible = ({display: 'flex' });
    const hide = ({display: 'none'});
    const [viewArea1, setViewArea1] = useState(visible);
    const [viewArea2, setViewArea2] = useState(hide);
    const [viewArea3, setViewArea3] = useState(hide);

    function checkArea (area) {
        switch(area){
            case 'area1':
                setViewArea1(visible); setViewArea2(hide); setViewArea3(hide);
                break;
            case 'area2':
                setViewArea1(hide); setViewArea2(visible); setViewArea3(hide);
                break;
            case 'area3':
                setViewArea1(hide); setViewArea2(hide); setViewArea3(visible);
                break;
        }
    };

    useEffect(()=>{
        checkArea(areaView);
    }, [areaView]);

    return (
        <Card title="On Card">
            <section className={style.mainArea}>
                <div className={style.menuBar}>
                    <Button
                        label="Product Interest"
                        width="90%"
                        onClick={()=>{setAreaView('area1');}}
                    />
                    <Button 
                        label="Interest for Delay"
                        width="100%"
                        onClick={()=>{setAreaView('area2');}}
                    />
                    <Button
                        label="Help"
                        width="90%"
                        onClick={()=>{setAreaView('area3');}}
                    />
                </div>
                <div className={style.area1} style={viewArea1}>
                    <h2 className={style.title}>Calculate product interest</h2>
                    <OnCardFindInterest/>
                </div>
                <div className={style.area2} style={viewArea2}>
                    <h2 className={style.title}>Calculate Interest for delay</h2>
                    <InterestForDelay/>
                </div>
                <div className={style.area3} style={viewArea3}>
                    <h2 className={style.title}>How to use these tools</h2>
                </div>
            </section>
        </Card>
    );
}