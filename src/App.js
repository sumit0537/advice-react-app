import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  
const [adv,setAdvice] = useState('Click on Button to get Advice');

const fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
        .then(resp => {
            const {advice}  = resp.data.slip;
            setAdvice(advice);
        })
        .catch(err => {
            return err;
        })
  }

  return (
    <div className='app'>
       <div className='card'>
        <h1 className='heading'>{adv}</h1>
        <button className='button' onClick={fetchAdvice }>
          <span>GIVE ME ADVICE</span>
        </button>
       </div>
    </div>
  )
}

export default App;