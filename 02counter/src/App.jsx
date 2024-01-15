import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[number,setNumber]=useState(0);
  const[number1,setNumber1]=useState(0);
  const[number2,setNumber2]=useState(0);
  const[number3,setNumber3]=useState(0);

let counter=15;
function add(){counter=counter+1, console.log(counter)}
function value(){()=>{counter=counter+1}}
function handle(){setNumber(number+1)}
function handleclick(){ setNumber1(number1+1), setNumber1(number1+1), setNumber1(number1+1), setNumber1(number1+1)}

function handleclick2(){ setNumber2((preve)=>preve+1)} 

function handleclick3(){ setNumber3((preve)=>preve+1),setNumber3((preve)=>preve+1),setNumber3((preve)=>preve+1)} 

  return (
    <><h1>{counter}</h1>
      add value{counter}
      <h2 onClick={add}>Click to add</h2>
      <h2 onClick={()=>{counter=counter+1, console.log(counter)}}>Click </h2>
      <h2 onClick={handle}> usestate {number}</h2>
      <h2 onClick={handleclick}>Click usestate1 {number1}</h2>
      <h2 onClick={handleclick2}>Click usestate2 {number2}</h2>
      <h2 onClick={handleclick3}>Click usestate3 {number3}</h2>
    
      
     

    </>
  )
}

export default App
