import React from 'react';


function EmailInput(props) {
    const { general, handleGeneralChange } = props
  
  return (
    <div className='edit-inputs'>

    <input
    type='text'
    placeholder='Enter your email'
    name='email'
    value={general.email}
    onChange={handleGeneralChange}
    />
 
  </div>
  )
}

export default EmailInput