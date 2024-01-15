import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let newarray=[1,2,3,4,5];

  let obj={unit:92, 
           street:"king street",
           address:"toronto"};


  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Tailwind</h1>
      <Card username="rosei" myarray={newarray}/>
      <Card username="laeran" post="Software Eng"/>
      <Card newobject={obj}/>
    </>
  )
}

export default App
