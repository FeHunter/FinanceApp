import './App.css';
import { MainContent } from './Application Components/Main/MainContent';
import { UserFInanceStatus } from './Application Components/UserFInanceStatus/UserFInanceStatus';
import { Footer } from './Visual Components/Footer/Footer';
import { Header } from './Visual Components/Header/Header';
import { QuickMenu } from './Visual Components/Header/QuickMenu/QuickMenu';

function App() {
  return (
    <div id="mainPage">
      <Header title="Financial Controller App" />
      <QuickMenu />
      <UserFInanceStatus userName={"João"} balance={2700} bills={50} investments={7000} />
      <MainContent />
      <Footer /> 
    </div>
  );
}

export default App;
