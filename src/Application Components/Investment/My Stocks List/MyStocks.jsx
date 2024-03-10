import { FirebaseRoutes } from '../../../Routes/API/FirebaseRoutes';
import { List } from '../../List/List';
import style from './MyStocks.module.css';


export function MyStocks (){

    const firebase = FirebaseRoutes();

    return (
        <List title={'My Stocks List'} urlResource={firebase.myStocksList} formType={'stockList'} />
    );
}