import React, { useState } from 'react';
import { FaRegCheckSquare } from 'react-icons/fa';

function PhoneInput(props) {
    const { general, handleGeneralChange } = props
  
  return (
    <div className='edit-inputs'>

    <input
    type='text'
    placeholder='Enter your phone number'
    name='phone'
    value={general.phone}
    onChange={handleGeneralChange}
    />
    
  </div>
  )
}

export default PhoneInput