
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Noah" lastName="Biggs" age={24} hair="Black"/>
      <PersonCard firstName = "Mitchell" lastName="Golden" age={27} hair="brown"/>
      <PersonCard firstName = "Noah" lastName="Biggs II" age={25} hair="Black"/>
      <PersonCard firstName = "Noah" lastName="Biggs III" age={26} hair="Black"/>
    </div>
  );
}

export default App;
