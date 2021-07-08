import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Subcontent from './Components/Subcontent';
import Advertisement from './Components/Advertisement';



function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <Main>
        <Subcontent/>
        <Subcontent/>
        <Subcontent/>
        <Advertisement/>
      </Main>
    </div>
  );
}

export default App;
