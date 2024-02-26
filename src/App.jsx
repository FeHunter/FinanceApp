import './App.css';
import { MainContent } from './Application Components/Main/MainContent';
import { Footer } from './Visual Components/Footer/Footer';
import { Header } from './Visual Components/Header/Header';
import { QuickMenu } from './Visual Components/Header/QuickMenu/QuickMenu';

function App() {
  return (
    <div id="mainPage">
      <Header title="Financial Controller App" />
      <QuickMenu />
      <MainContent />
      <Footer /> 
    </div>
  );
}

export default App;
