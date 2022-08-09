import React, { useState } from 'react';
import '../styles/generalSection.css';
import { AiFillEdit } from 'react-icons/ai'


function GeneralSection(props) {
    const {general, editGeneral, handleGeneralChange, changeGeneralEdit} = props

  return (
    <div className='general-section'>
      { editGeneral ? 
         <h1 className='name-text'>{general.name}</h1>
         :
         <h1 className='name-text'>{general.name}</h1>
      }
        
        {/* <input
        type='text'
        placeholder='Enter your FULL name'
        onChange={(e) => handleGeneralChange(e)}
        value={general.name || ''}
        name='name'
         />  */}


      <div className='contact'>
        { editGeneral ?
          <input 
          type='text'
          placeholder='Phone Number'
          onChange={(e) => handleGeneralChange(e)}
          value={general.phone}
          name='phone'
          
          />
          :
          <span className='phone-text'>{general.phone}</span>
        }
         ·
        { editGeneral ?
        <input 
        type='text'
        placeholder='Email'
        onChange={(e) => handleGeneralChange(e)}
        value={general.email}
        name='email'
        
        />
        :
        <span className='email-text'>{general.email}</span>
        }
        </div>
    </div>
  )
}

export default GeneralSection