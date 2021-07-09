import { useState } from 'react';
import './App.css';
import Box from './Components/Box';
import Form from './Components/Form';



function App() {
  const [box, setBox] = useState({// init-ing state
    color: "",                    //with blank values
    hw: ""                          //within the box obj.
  }) 
  const [colors, setColors] = useState([])
  
  return (
    <div className="App">
      {/* Passing state into each component as props */}
      <Form box={box} setBox={setBox} setColors = {setColors} colors ={colors}/> 
      
      <Box colors={colors}/>
      
    </div>
  );
}

export default App;
