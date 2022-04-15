import logo from './logo.svg';
import './App.css';
import Groups from './Groups';
import { useState } from 'react';
import { Test } from './test';

function App() {
  const [data,setData]=useState();
 
   
  
  
  return (
    <div className="App">
     <Groups/>
    <Test/>
    </div>
  );
}

export default App;
