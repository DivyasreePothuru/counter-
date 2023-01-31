
import { useState } from 'react';
import './App.css';


function App() {

  // let count = 0

  // const [value,setvalue] = useState(count)
  const [value,setvalue] = useState(0)

  function add(){
    let result = value+1
    setvalue(result)
  }
  
  function sub(){
    setvalue(value-1)
  }

  function reset(){
    setvalue(0)
  }
  return (

  
    <div className="App">

<h1><marquee >Counter</marquee>
</h1>
     <h2>{value}</h2>

    <button className='add' onClick={add}>Add</button>
    <button className='res' onClick={reset}>Reset</button>
    <button className='sub' onClick={sub}>Sub</button>
    

    </div>
  
  );
}

export default App;
