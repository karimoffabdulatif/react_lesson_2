import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(0)
  const [isLogIn, setIsLogIn] = useState(false);
  const [counters, setCounters] = useState([0]);

  const handleLogin = () => {
    setIsLogIn(true);
  };

  const handleLogout = () => {
    setIsLogIn(false);
  };
  

  const addCounters =()=>{
    let item = counters[counters.length -1]
    counters.push(item)
    setCounters([...counters])
  }

  const incresCount=(index)=>{
    counters[index] += 1
    setCounters([...counters])
  }

  const decreaseCount=(index)=>{
    counters[index] -= 1
    setCounters([...counters])
  }


  return (
    <>
      <div className='container'>
      <div className='task_1'>
        <p className='task_1_tittle'>1-masala</p>
      <h2>{count} metr</h2>
      <button className='button1' onClick={() => setCount(prev => prev + step) } >Yurish</button>
      <h2>Qadam kattaligi: {step} metr</h2>
      <button className='button2' onClick={() => setStep(prev => prev + 1)}>Qadam ko'paytirish</button>
      </div>


      <div className='task_2'>
        <h2 className='task_2_tittle'>2-masala</h2>
      <p className='task_2_p'>{isLogIn ? 'Log In' : 'Log Out'}</p>
      <button onClick={handleLogin} className='button1'>Log In</button>
      <button onClick={handleLogout} className='button2'> Log Out</button>
    </div>
   

   
  


   <div className='task_3'>
   <button onClick={addCounters} className='btn_click'>Change Actives</button>

   {
     counters?.map((item,index) => {
      return (
          <div key={index}>
            <button onClick={()=>incresCount(index)} className='button3'>+</button>
            <span>{item}</span>
            <button onClick={() => decreaseCount(index)} className='button4'>-</button>
          </div>
      )

     })
   }
   </div>
   </div>
    </>
  )

}
export default App
