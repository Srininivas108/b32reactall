import React, {useState,useEffect} from  "react";
import BasicCard from "./Card";
import CounterComponent from "./CounterComponent";

function FunctionalComponent(props){
    console.log(props);
     const [render,setRender]= useState(true);
     const [counter,setCounter]= useState(0);
     useEffect(()=>{
       console.log("functional mounting phase")
     },[])
     useEffect(()=>{
       console.log("functional updating phase")
     },[counter,render])



  return(
    <div>
      <h1>This is {props.componentName}</h1>  <br></br>
      value: {counter}   <br></br>
      <button onClick={()=>setRender(!render)}>Mount /Unmount</button> <br></br>
      <button onClick={()=>setCounter(counter +1)} >Increment</button>   <br></br>
      <button onClick={()=>setCounter(counter -1)} >Decrement</button>    <br></br>
      <button onClick={()=>setCounter(0)} >Reset </button>
      <BasicCard heading="Card content" subheading="subheading is here" adjective=" adjective here"  well="well and kindly" />

      { render ? <CounterComponent componentName={"Class Component"}/> : <></>}

      
    </div>
  )
}

export default FunctionalComponent;