import React from 'react';
import styles from "../header.module.css"
import { useState } from 'react';

const GreetingCompontes = () => {
    const [name, setName] = useState('');

    const handleChange=(e)=>{
        setName(e.target.value);
    }

  return (
    <div className={styles.header}>
   <label htmlFor='nameInput'>enter your name</label>
   <input 
   id='nameInput'
   type='text'
   placeholder='Type your name'
   value={name}
   onChange={handleChange}
   className={styles.input}

   />

   {name && <h2 > Hello, {name}!</h2>}
    </div>
  )
}

export default GreetingCompontes
