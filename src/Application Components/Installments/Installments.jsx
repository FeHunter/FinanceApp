import { useState } from 'react';
import style from './Installments.module.css';
import { ToggleMenu } from '../../Visual Components/ToggleMenu/ToggleMenu';
import { InstallmentsForm } from '../../Application Components/Installments/InstallmentsForm/InstallmentsForm';

/*

Link de referência pra calculos:

https://www.meucartaodecredito.com.br/como-calcular-juros-de-compra-parcelada-no-cartao/

https://comunidade.nubank.com.br/t/calcular-juros-por-atraso/445662/2

Exemplo de juros no parcelamento:
https://olevsbrasil.com.br/products/velocity-master#

Converter para moeda do Brasil:
toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

*/

export function Installments() {
  const [selectMode, setSelectMode] = useState('Custom');

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

  const highlightStyle = {
    background: '#404258',
    padding: '2px 5px',
    borderRadius: '10px',
  };

  const custom = findInterest;
  const nuBankInterest = 11.75;
  const itauInterest = 1.12;
  const santanderInterest = 1.99;
  const olevs = 21.59;

  // Get inputs from form
  function readerForm(_price, _installments, _installmentValue) {
    setPrice(_price);
    setInstallment(_installments);
    setInputInstallmentValue(_installmentValue);
    // alert('In the main app');
  }

  const [bankInterest, setBankInterest] = useState(custom);
  function SetBankInterest(e) {
    switch (e) {
      case 'Custom':
        setBankInterest((v) => (v = custom != 0 ? custom : 0));
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
      <div className={style.finalResultContent}>
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

  function FindOutInterest() {
    // Find the interest %
    const step1 = installment * inputInstallmentValue - price;
    const step2 = step1 < price ? (step1 * 100) / price : (price * 100) / step1;
    setFindInterest(step2.toFixed(2));
    setBankInterest(step2.toFixed(2));
  }

  return (
    <div className={style.mainDiv}>
      <h2>Installments</h2>

      <section>
        <div className={style.area1}>
          <select
            className={style.selection}
            value={selectMode}
            name="Bank"
            id="Bank"
            onChange={(e) => {
              SetBankInterest(e.target.value);
              setSelectMode(e.target.value);
            }}
          >
            <option value="Custom">Manual</option>
            <option value="NuBank">Nu Bank</option>
            <option value="Itau">Itaú</option>
            <option value="Santander">Santander</option>
            <option value="Olevs">Olevs</option>
          </select>

          {selectMode === 'Custom' ? (
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
              <button
                className={style.calculateBtn}
                onClick={() => {
                  {
                    FindOutInterest();
                  }
                }}
              >
                Get interest
              </button>
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
          ) : (
            ''
          )}
        </div>

        <div className={style.area2}>
          <p>
            Interest Tax |&nbsp;
            {bankInterest > 0 ? (
              <span style={highlightStyle}>{bankInterest}%</span>
            ) : (
              <span style={highlightStyle}> Sem Juros</span>
            )}
          </p>
          {selectMode == 'Custom' ? (
            ''
          ) : (
            <InstallmentsForm onChange={readerForm} />
          )}
          <br />
          <button
            className={style.calculateBtn}
            onClick={() => {
              calculateInstallmentInterest();
            }}
          >
            Calculate
          </button>
          {view}
        </div>

        <div className={style.area3}>
          <ToggleMenu title="About">
            <div>
              <p>
                Aqui você pode calcular quanto você ira pagar de juros de acordo
                com a quantidade de parcelas.
              </p>
            </div>
          </ToggleMenu>
          <ToggleMenu title="Where to find this information" view={true}>
            <div>
              <p>
                You can find this information on the e-commerce site, must by
                some installment option.
              </p>
              <img
                style={{ width: '100%' }}
                src="https://s3.amazonaws.com/helpjuice-static/helpjuice_production/uploads/upload/image/7634/direct/1621894572166-configurar+parcelamento04.gif"
                alt="Exemple of installment times"
                title="Exemple image for installment times"
              />
            </div>
          </ToggleMenu>
        </div>
      </section>
    </div>
  );
}
