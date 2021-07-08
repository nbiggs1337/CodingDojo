import './App.css';
import UserForm from './Components/UserForm';
import Results from './Components/Results'
import {useState} from 'react'

///Set state here in future, so its global and can hook into any children components


function App() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  return (
    <div className="App">
        <UserForm inputs={inputs} setInputs={setInputs}/>
        <Results data={inputs}/>
    </div>
  );
}

export default App;
