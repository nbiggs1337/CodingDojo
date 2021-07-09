import { useState } from 'react';
import Tab from './Components/Tab';
import Form from './Components/Form';
import './App.css';

function App() {
  const [tab, setTab] = useState([]);
  const [display, setDisplay] = useState({
    label: "",
    content: ""
  });  
  
  return (
    <div className="App">
      
      <Form tab={tab} setTab={setTab} display={display} setDisplay={setDisplay} />
      
      <Tab tab={tab} setTab={setTab} display={display} setDisplay={setDisplay}/>
      
      
    </div>
  );
}

export default App;
