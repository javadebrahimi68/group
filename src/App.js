import logo from './logo.svg';
import './App.css';
import Groups from './Groups';
import { useState } from 'react';

import { RecursiveFilter } from './RecursiveFilter';

function App() {
  const [data,setData]=useState();
 
   
  
  
  return (
    <div>
    
    <Groups/>
    </div>
  );
}

export default App;
