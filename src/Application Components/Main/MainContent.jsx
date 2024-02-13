import { Installments } from '../../Application Components/Installments/Installments';
import { List } from '../../Application Components/List/List';
import style from './MainContent.module.css';

export function MainContent() {
  return (
    <main className={style.main}>
      <List />
      <Installments />
    </main>
  );
}
