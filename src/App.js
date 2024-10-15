import React from "react";
import { useState } from "react";

const App =()=>{
  const [counter , setcounter] = useState(0);
 const handel1=()=>{
  if(counter<20)
  setcounter(counter+1);
 }

 function handel2(){
  if(counter>-10)
   setcounter(counter-1)
 }
  return(
    <div>
      <h1>{counter}</h1>
    <button onClick={handel1} >+</button>

    <button onClick={handel2} >-</button>
    </div>

  )
}

export  default App;