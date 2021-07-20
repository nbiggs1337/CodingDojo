import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import Add from './views/Add';
import Edit from './views/Edit'
import { useState } from 'react';


function App() {
  const [refresh, setRefresh] = useState(false);
  
  const refresher = () => {
    setRefresh(!refresh)
  }
  
  return (
    <div className="App" style={{backgroundColor: "lightgrey", padding:'50px'}}>
      <Router>
        <Main path="/" refresh={refresh} refresher={refresher}  />
        <Add path="/add" refresher={refresher} />
        <Edit path="/edit/:id" refresher={refresher} />
      </Router>
    </div>
  );
}

export default App;
