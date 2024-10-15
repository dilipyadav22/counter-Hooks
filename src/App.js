import React from "react";
import { useState } from "react";

const App =()=>{
  const [counter , setcounter] = useState(0);

 const handel2=()=> setcounter(counter-1);

  return(
    <div>
      <h1>{counter}</h1>
    <button onClick={()=> setcounter(counter+1)} >+</button>

    <button onClick={handel2} >-</button>
    </div>

  )
}

export  default App;