import Search from './components/Search';
import { useState } from 'react';
import { Router ,navigate} from '@reach/router';
import './App.css';


function App() {
  const [category, setCategory] = useState("people")
  const[id,setId] = useState(1)
  
  const submitHandler = e => {
    e.preventDefault();
    navigate(`/${category}/${id}`) 
  }
  
  return (
    <div className="App">
      <div className="search" style={{justifyContent: "center"}}>
                <br />
                <form onSubmit={ submitHandler } style={{display: 'flex', justifyContent: 'center'}} >
                    <h4 style={{paddingRight: "50px"}}>Search For: </h4>
                    <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                      
                    </select>
                    <h4 style={{padding: "0px 50px"}}>ID: </h4> 
                    <input type="number" name="id" value={id} onChange={e=> setId(e.target.value)}/>
                    
                    <input type="submit" />
                    
                </form>
            </div>
      
      <Router>
        <Search path=":category/:id" />
      </Router>
      
      
    </div>
  );
}

export default App;
