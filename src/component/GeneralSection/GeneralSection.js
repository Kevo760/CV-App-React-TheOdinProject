import React, { useState } from 'react';
import '../../styles/generalSection.css';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import PhoneInput from './PhoneInput';




function GeneralSection(props) {
    const {general} = props



  return (
    <div className='general-section'>

      <h1 className='name-text'>{general.name}</h1>
 
      <div className='contact'>
        <span className='phone-text'>{general.phone}</span>
        <span className='email-text'>{general.email}</span>
      </div>

    </div>
  )
}

export default GeneralSection