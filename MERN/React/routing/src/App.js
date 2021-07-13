import { Router } from '@reach/router';
import Comp from './components/Comp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Comp path="/:input" />
        <Comp path="/:input/:a/:b" />
        
      </Router>
    </div>
  );
}

export default App;
