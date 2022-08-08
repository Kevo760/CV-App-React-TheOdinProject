import React from 'react';
import '../styles/generalSection.css'


function GeneralSection(props) {
    const {general, editGeneral} = props

    let viewMode = {}
    let editMode = {}
    
    if(editGeneral) {
      viewMode.display = 'none'
    } else {
      editMode.display ='none'
    }

    

  return (
    <div className='general-section'>
        <h1 style={viewMode} className='name-text'>{general.name}</h1>
        <input
        type='text'
        placeholder='Enter your FULL name'
        style={editMode}
         />
         <div className='contact'>
            <span className='phone-text' style={viewMode}>{general.phone}</span>
            <input 
            type='text'
            placeholder='Phone Number'
            style={editMode}
            />
            ·
            <span className='email-text' style={viewMode}>{general.email}</span>
            <input
            type='text'
            placeholder='Email'
            style={editMode}
            />
         </div>
    </div>
  )
}

export default GeneralSection