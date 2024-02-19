import { useState } from 'react';
import style from './InterestForDelay.module.css';
import { InstallmentsForm } from '../../Installments/InstallmentsForm/InstallmentsForm';
import { Button } from '../../../Visual Components/Button/Button';

export function InterestForDelay () {
    const [selectMode, setSelectMode] = useState('Custom');
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

    // Current interest from banks for late payments
    const nuBankInterest = 11.75;
    const itauInterest = 1.12;
    const santanderInterest = 1.99;
    const olevs = 21.59;
    const [bankInterest, setBankInterest] = useState(nuBankInterest);
    function SetBankInterest(e) {
        switch (e) {
        case 'NuBank':
            setBankInterest((v) => (v = nuBankInterest));
            break;
        case 'Itau':
            setBankInterest((v) => (v = itauInterest));
            break;
        case 'Santander':
            setBankInterest((v) => (v = santanderInterest));
            break;
        case 'Olevs':
            setBankInterest((v) => (v = olevs));
            break;
        }
    }

    const highlightStyle = {
        background: '#404258',
        padding: '2px 5px',
        borderRadius: '10px',
    };

      // Get inputs from form
    function readerForm(_price, _installments, _installmentValue) {
        setPrice(_price);
        setInstallment(_installments);
        setInputInstallmentValue(_installmentValue);
        // alert('In the main app');
    }

    function calculateInstallmentInterest() {
        // const iofTax = ((price / 100) * iof).toFixed(2);
        const tax = ((price / 100) * parseFloat(bankInterest)).toFixed(2);
        const _interest = parseFloat(tax + price).toFixed(2);
        const totalPrice = (parseFloat(interest) + parseFloat(price)).toFixed(2);
        setInterest(_interest);
        setTotal(totalPrice);
        setInstallmentValue(
          (parseFloat(totalPrice) / parseFloat(installment)).toFixed(2)
        );
        setView(
          <div className={style.interestFinalResult}>
            <p>
              Price <span style={highlightStyle}>${price}</span>
            </p>
            <p>
              interest <span style={highlightStyle}>${interest}</span>
            </p>
            <p>
              Installments <span style={highlightStyle}>{installment}X</span> of
              <span style={highlightStyle}>${installmentValue}</span>
            </p>
            <p>
              Final price <span style={highlightStyle}>${total}</span>
            </p>
          </div>
        );
      }

    return (
        <section className={style.mainContent}>
            <div className={style.selectionContent}>
                <p>Select a bank to see interest on late payments</p>
                <select
                className={style.selectionButton}
                value={selectMode}
                name="Bank"
                id="Bank"
                onChange={(e) => {
                SetBankInterest(e.target.value);
                setSelectMode(e.target.value);
                }}
            >
                <option value="NuBank">Nu Bank</option>
                <option value="Itau">Itaú</option>
                <option value="Santander">Santander</option>
                <option value="Olevs">Olevs</option>
            </select>
            </div>
            <div className={style.calculateArea}>
                <p>
                    Interest Tax |&nbsp;
                    {bankInterest > 0 ? (
                    <span style={highlightStyle}>{bankInterest}%</span>
                    ) : (
                    <span style={highlightStyle}> Sem Juros</span>
                    )}
                </p>
                <InstallmentsForm onChange={readerForm} input1Name="Invoice Amount" input2Name="Installments" />
                <span className={style.buttonArea}>
                  <Button label="Calculate" onClick={() => {calculateInstallmentInterest();}}/>
                </span>
                {view}
            </div>
        </section>
    );
}