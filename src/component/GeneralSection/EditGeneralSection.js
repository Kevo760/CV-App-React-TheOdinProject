import React, { useState } from 'react';
import '../../styles/generalSection.css';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import PhoneInput from './PhoneInput';


function EditGeneralSection(props) {
    const {general, handleGeneralChange} = props
    const [edit, setEdit] = useState(false)

    const changeEdit = () => {
      setEdit(prevEdit => !prevEdit)
    }


  return (
    <div className='general-section'>

      { edit ?
         <NameInput general={general} handleGeneralChange={handleGeneralChange}/>
         :
         <h1 className='name-text'>{general.name}</h1>
      }
        
      <div className='contact'>
        { edit ?
          <PhoneInput general={general} handleGeneralChange={handleGeneralChange}/>
          :
          <span className='phone-text'>{general.phone}</span>
        }
         ·
        { edit ?
        <EmailInput general={general} handleGeneralChange={handleGeneralChange}/>
        :
        <span className='email-text'>{general.email}</span>
        }
        </div>

        { edit ?
          <button className='edit-general-btn' onClick={changeEdit}>Enter General Section</button>
          :
          <button className='edit-general-btn' onClick={changeEdit}>Edit General Section</button>
        }
    </div>
  )
}

export default EditGeneralSection