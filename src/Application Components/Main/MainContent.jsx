import { Installments } from '../../Application Components/Installments/Installments';
import { List } from '../../Application Components/List/List';
import { BillsManager } from '../BillsManager/BillsManager';
import { OnCard } from '../OnCard/OnCard';
import style from './MainContent.module.css';

export function MainContent() {
  return (
    <main className={style.main}>
      <List />
      {/* <OnCard/> */}
      {/* <Installments /> */}
      {/* <BillsManager /> */}
    </main>
  );
}
