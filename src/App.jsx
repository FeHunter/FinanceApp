import './App.css';
import { MainContent } from './Application Components/Main/MainContent';
import { FinanceManager } from './Application Components/Manager/FinanceManager';
import { Footer } from './Visual Components/Footer/Footer';
import { Header } from './Visual Components/Header/Header';
import { QuickMenu } from './Visual Components/Header/QuickMenu/QuickMenu';

function App() {
  return (
    <div id="mainPage">
      <Header title="Financial Controller App" />
      {/* <QuickMenu />
      <MainContent />
      <Footer /> */}
      <FinanceManager />
    </div>
  );
}

export default App;
