import { useState } from "react";
import { InstallmentsForm } from "../../Installments/InstallmentsForm/InstallmentsForm";
import { Button } from "../../../Visual Components/Button/Button";

export function OnCardInstallments (){

    // Default
    const [price, setPrice] = useState();
    const [installment, setInstallment] = useState();

    // Find Interest
    const [inputInstallmentValue, setInputInstallmentValue] = useState();

    // Calculate Interest
    const [total, setTotal] = useState(0);
    const [installmentValue, setInstallmentValue] = useState();
    const [interest, setInterest] = useState();
    const [view, setView] = useState('');

    const [findInterest, setFindInterest] = useState(0);

    function readerForm(_price, _installments, _installmentValue) {
        setPrice(_price);
        setInstallment(_installments);
        setInputInstallmentValue(_installmentValue);
      }

    function FindOutInterest() {
        // Find the interest %
        const step1 = installment * inputInstallmentValue - price;
        const step2 = step1 < price ? (step1 * 100) / price : (price * 100) / step1;
        setFindInterest(step2.toFixed(2));
        setBankInterest(step2.toFixed(2));
    }

    return (
        <div>
          <h2>Calculate product interest</h2>
          <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0px',
                padding: '10px 2px',
              }}
            >
              <InstallmentsForm
                onChange={readerForm}
                OninstallmentsTime={true}
              />
              <Button label="Get Interest" width="50%" onClick={() => { {FindOutInterest(); }}} />
              <p>Final Result: {findInterest}</p>
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