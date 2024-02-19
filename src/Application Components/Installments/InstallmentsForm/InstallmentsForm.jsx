import style from './InstallmentsForm.module.css';
import { useState } from 'react';
import { Input } from '../../../Visual Components/Input/Input';

export function InstallmentsForm({ onChange, OninstallmentsTime, input1Name, input2Name, input3Name }) {
  const [price, setPrice] = useState();
  const [installment, setInstallment] = useState();
  const [installmentValue, setInstallmentValue] = useState();

  function inputValues(_price, _installment, _installmentValue) {
    onChange(_price, _installment, _installmentValue);
    setPrice(_price);
    setInstallment(_installment);
    setInstallmentValue(_installmentValue);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className={style.formContent}>
      <p>{input1Name}</p>
      <Input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => {
          inputValues(e.target.value, installment, installmentValue);
        }}
      />
      <p>{input2Name}</p>
      <Input
        type="number"
        placeholder="Installment Times"
        value={installment}
        onChange={(e) => {
          inputValues(price, e.target.value, installmentValue);
        }}
      />
      {OninstallmentsTime ? (
        <span>
          <p>{input3Name}</p>
          <Input
            type="number"
            placeholder="installment Price"
            value={installmentValue}
            onChange={(e) => {
              inputValues(price, installment, e.target.value);
            }}
          />
        </span>
      ) : (
        ''
      )}
    </div>
  );
}
