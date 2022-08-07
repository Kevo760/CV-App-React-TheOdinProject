import React from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri'

function JobUI(props) {
    const { experience, editExperience } = props

    let editMode = {}
    
    if(!editExperience) {
      editMode.display ='none'
    }

  return (
    <div>
        <div className='job-section'>
            <span className='dates-text'>DATES FROM {experience.dateHired} TO {experience.dateQuit}</span>
            <p><span className='jobTitle-text'>{experience.positionTitle}</span><span className='companyName-text'>{experience.companyName}</span></p>
            <span className='mainTask-text'>{experience.mainTask}</span>
        </div>
        <RiDeleteBack2Line className='delete-icon' style={editMode}/>
    </div>
  )
}

export default JobUI