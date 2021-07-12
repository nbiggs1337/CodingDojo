import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Item from './components/Item';
import List from './components/List';


function App() {
  const [item, setItem] = useState({
    task: '',
    complete: false
  });
  const [list, setList] = useState([]);
  
  return (
    <div className="App d-flex">
      
      <div className='col-6'>
        <List list={list} setList={setList} item={item} setItem={setItem}/>
        
      </div>
      
      <div className='col-6'>
        
        <Item item={item} setItem={setItem} list={list} setList={setList} />
        
      </div>
      
    </div>
  );
}

export default App;
