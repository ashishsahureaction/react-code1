import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('red');

  const [color, setColor] = useState('olive');

  function changeColor(){setCount('green')}
  function changeColor1(){setCount('blue')}
  function changeColor2(){setCount('yellow')}
  function changeColor3(){setCount(count==='blue'?'voilet': 'aqua')}
  return (
    <>
<div style={{height:'400px', width:'400px', backgroundColor:count }}>

</div>
    <button onClick={changeColor}>Click ME 1</button>
    <button onClick={changeColor1}>Click ME 2</button>
    <button onClick={changeColor2}>Click ME 3</button>
    <button onClick={(()=>{setCount('orange')})}>Click ME 4</button>
    <button onClick={(()=>setCount("pink"))}>Click ME 5</button>
    <button onClick={changeColor3}>Click ME 5</button>



    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'red'}}
          >Red</button>
          
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'green'}}
          >Green</button>
          
          </div>
      </div>
    </div>



    </>
  )
}

export default App
