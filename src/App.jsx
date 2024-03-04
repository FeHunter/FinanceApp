import { useState } from 'react';
import './App.css';
import { MainContent } from './Application Components/Main/MainContent';
import { UserFInanceStatus } from './Application Components/UserFInanceStatus/UserFInanceStatus';
import { Footer } from './Visual Components/Footer/Footer';
import { Header } from './Visual Components/Header/Header';
import { QuickMenu } from './Visual Components/Header/QuickMenu/QuickMenu';

function App() {

  // User values
  const [userName, setUserName] = useState('');
  const [balance, setBalance] = useState(2700);
  const [bills, setBills] = useState(0);
  const [investments, setInvestments] = useState(0);

  return (
    <div id="mainPage">
      <Header title="Financial Controller App" />
      <QuickMenu />
      <UserFInanceStatus userName={userName} balance={balance} bills={bills} investments={investments} />
      <MainContent balance={balance} />
      <Footer /> 
    </div>
  );
}

export default App;
