import React from 'react';
import styles from "../header.module.css"
import { useState } from 'react';

const GreetingCompontes = () => {
    const [name, setName] = useState('');

    const handleChange=(e)=>{
        setName(e.target.value);
    }

  return (
    <div>
    <p>Enter your name:</p>
  <input value={input} onChange={onInput} />
  {!!input.length&&<p>Hello {input}!</p>}
  <button onClick={onClear}>Clear</button>
  </div>
  )
}

export default GreetingCompontes
