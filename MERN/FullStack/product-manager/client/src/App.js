import Main from "./views/Main";
import { Router } from "@reach/router";
import './App.css';
import OneProduct from "./views/OneProduct";
import EditProduct from "./views/EditProduct";

function App() {
  return (
    <div className="App">
      <Router>
        < Main path="/"/>
        
        <OneProduct path="/:id"/>
        <EditProduct path="/:id/edit" />
      </Router>
      
    </div>
  );
}

export default App;
