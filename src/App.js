import logo from './logo.svg';
import './App.css';
import Groups from './Groups';
import { useState } from 'react';
import { rawData } from './initilaData';

import { RecursiveFilter } from './RecursiveFilter';

function App() {
  const [data,setData]=useState();
 
  const columnTitle=[
    {name:'country',title:'Country'},
    {name:'color',title:'Color'},
    {name:'email',title:'Email'},
    {name:'id',title:'Id'},
    {name:'fullname',title:'Full Name'},
    {name:'gender',title:'Gender'},
];

  const filterKeys=['gender',
  
  'country'];
  
  return (
    <div>
    
    <Groups filterKeys={[...filterKeys]} columnTitle={[...columnTitle]} rawdata={[...rawData]}/>
    </div>
  );
}

export default App;
