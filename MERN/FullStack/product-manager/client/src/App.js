import Main from "./views/Main";
import { Router } from "@reach/router";
import './App.css';
import OneProduct from "./views/OneProduct";

function App() {
  return (
    <div className="App">
      <Router>
        < Main path="/"/>
        
        <OneProduct path="/:id"/>
        
      </Router>
      
    </div>
  );
}

export default App;
