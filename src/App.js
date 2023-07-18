import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Result from './components/Result/Result';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div className="App">
      <Card>
        <Result />
        <Summary />
      </Card>
      <Footer/>
    </div>
  );
}

export default App;
