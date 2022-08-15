import React from 'react';


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