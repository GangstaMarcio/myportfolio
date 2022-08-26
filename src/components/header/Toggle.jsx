import React from 'react'
import { useState } from 'react'

const Toggle = () => {

  const [togleButton, setTogleButton] = useState('');

  const IsToggle = () => {
    if (togleButton === 'false') {
      setTogleButton('true');
      console.log('true');
    } else {
      setTogleButton('false');
      console.log('false');
    }
  } 

  return (
    <div id='toggle__container'>
        <i onClick={() => IsToggle()} className={togleButton === 'true' ? 'dark' : 'light'}>
        </i>
    </div>
  )
} 

export default Toggle