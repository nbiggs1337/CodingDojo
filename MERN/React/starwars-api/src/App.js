import Search from './components/Search';
import { useState, useEffect } from 'react';
import { Router ,navigate} from '@reach/router';
import './App.css';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState("people")
  const[id,setId] = useState(1)
  const [data, setData] = useState([]);
  
  
  const submitHandler = e => {
    e.preventDefault();
    navigate(`/${category}/${id}`) 
  }
  
  useEffect(() => {
    axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(res => {setData(res.data)})
        // .then(res => setData(res.data))
  },[id, category]);
  
  
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
        <Search path=":category/:id" data={data} category={category} />
      </Router>
      
      
    </div>
  );
}

export default App;
