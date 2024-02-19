import style from './OnCardFindInterest.module.css';
import { useState } from "react";
import { InstallmentsForm } from "../../Installments/InstallmentsForm/InstallmentsForm";
import { Button } from "../../../Visual Components/Button/Button";

export function OnCardFindInterest (){

    // Default
    const [price, setPrice] = useState();
    const [installment, setInstallment] = useState();
    const [interest, setInterest] = useState();
    const [totalPrice, setTotalPrice] = useState();

    // Find Interest
    const [inputInstallmentValue, setInputInstallmentValue] = useState();
    const [foundInterest, setfoundInterest] = useState(0);

    function readerForm(_price, _installments, _installmentValue) {
        setPrice(_price);
        setInstallment(_installments);
        setInputInstallmentValue(_installmentValue);
      }

    function FindOutInterest() {
        // Find the interest %
        const step1 = installment * inputInstallmentValue - price;
        const step2 = step1 < price ? (step1 * 100) / price : (price * 100) / step1;
        setfoundInterest(step2.toFixed(2));
        setTotalPrice((installment * inputInstallmentValue).toFixed(2));
        setInterest(((installment * inputInstallmentValue) - price).toFixed(2));
    }

    return (
        <div className={style.mainContent}>
          <div className={style.content}>
              <InstallmentsForm
              input1Name="Product price"
              input2Name="Installments Times"
              input3Name="installments Value"
                onChange={readerForm}
                OninstallmentsTime={true}
              />
              <span className={style.button}>
                <Button label="Get Interest" width="50%" onClick={() => { {FindOutInterest(); }}} />
              </span>
              <div className={style.results} >
                <span className={style.totalPrice}>
                  { foundInterest > 0 ? (<p>${interest}</p>) : ("") }
                </span>
                <span className={style.interest}>
                    { foundInterest > 0  ? (<p>{foundInterest}%</p>) : (<p>Interest Free</p>) }
                </span>
                <span className={style.totalPrice} title="Final product price">
                    { foundInterest > 0 ? (<p>${totalPrice}</p>) : ("") }
                </span>
              </div>
              <div> 
                <p>Exemple:</p>
                <img
                  style={{ width: '100%' }}
                  src="https://tse2.mm.bing.net/th/id/OIP.oWmFKLcLALfjbw3SoDftrgAAAA?rs=1&pid=ImgDetMain"
                  alt="Exemple of installment times"
                  title="Exemple image for installment times"
                />
              </div>
            </div>
        </div>
    );
}