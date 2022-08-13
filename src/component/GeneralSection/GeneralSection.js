import React, { useState } from 'react';
import '../../styles/generalSection.css';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import PhoneInput from './PhoneInput';



function GeneralSection(props) {
    const {general, editGeneral, handleGeneralChange, changeGeneralEdit} = props


  return (
    <div className='general-section'>

      { editGeneral ? 
         <NameInput general={general} handleGeneralChange={handleGeneralChange}/>
         :
         <h1 className='name-text'>{general.name}</h1>
      }
        
      <div className='contact'>
        { editGeneral ?
          <PhoneInput general={general} handleGeneralChange={handleGeneralChange}/>
          :
          <span className='phone-text'>{general.phone}</span>
        }
         ·
        { editGeneral ?
        <EmailInput general={general} handleGeneralChange={handleGeneralChange}/>
        :
        <span className='email-text'>{general.email}</span>
        }
        </div>

        {editGeneral ? <button onClick={changeGeneralEdit}>Confirm</button> : null}
    </div>
  )
}

export default GeneralSection