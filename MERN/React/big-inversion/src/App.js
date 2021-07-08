import logo from './logo.svg';
import PersonCard from './Components/Personcard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Noah' lastName='Biggs' age={24} hair='black'/>
      <PersonCard firstName='Nicole' lastName='King' age='20something' hair='black-ish'/>
      <PersonCard firstName='Mitch' lastName='Golden' age={27} hair='brown-ish'/>
      <PersonCard firstName='Jason' lastName='Mills' age='idk like 30s-mayb 40' hair='idr'/>
    </div>
  );
}

export default App;
