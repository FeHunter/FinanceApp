import { QuickViewContent } from '../../../Visual Components/Header/QuickMenu/QuickViewContent';
import { PopUp } from '../../PopUp/PopUp';
import style from './QuickMenu.module.css';

export function QuickMenu() {
  return (
    <div className={style.content}>
      <QuickViewContent title="To Buy">
        <i class="fa-solid fa-cart-shopping"></i>
      </QuickViewContent>
      <QuickViewContent title="Bills">
        <i class="fa-solid fa-money-bill-1-wave"></i>
      </QuickViewContent>
      <QuickViewContent title="Saving">
        <i class="fa-solid fa-hand-holding-dollar"></i>
      </QuickViewContent>
      <QuickViewContent title="Invest">
        <i class="fa-solid fa-money-bill-trend-up"></i>
      </QuickViewContent>
    </div>
  );
}
