import React, { useState } from 'react';
import { FaRegCheckSquare } from 'react-icons/fa';

function NameInput(props) {
  const { general, handleGeneralChange } = props
  


  return (
    <div className='edit-inputs'>
      <input
      type='text'
      placeholder='Enter your FULL name'
      name='name'
      value={general.name}
      onChange={handleGeneralChange}
      />  
    </div>
  )
}

export default NameInput