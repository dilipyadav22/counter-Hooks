import React from "react";
import { useState } from "react";

const App =()=>{
  const [counter , setcounter] = useState(0);
  const [direction , setdirection]= useState(true);


 const handel1=()=>{
    if(direction){
      if(counter<10){
        setcounter(counter+1);
      }
      else{
        setdirection(false);
      }

    }
    else{
          if(counter>1){
            setcounter(counter-1);
          }
          else{
            setdirection(true);
          }
    }

 }
  return(
    <div>
      <h1>{counter}</h1>
    <button onClick={handel1} >{direction ? "Increment" : "Decrement"}</button>
    </div>

  
)};


export  default App;