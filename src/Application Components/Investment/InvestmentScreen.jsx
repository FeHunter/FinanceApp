import { StockForm } from '../List/Forms/StockForm/StockForm';
import { BuyStockSimulator } from './Buy Stock Simulator/BuyStockSimulator';
import style from './InvestmentScreen.module.css';
import { MyStocks } from './My Stocks List/MyStocks';

export function InvestmentScreen (){

    return (
        <div className={style.content}>
            <MyStocks/>
            <BuyStockSimulator/>
        </div>
    );
}