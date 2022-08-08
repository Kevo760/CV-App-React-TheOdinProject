import React from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri'

function SchoolUI(props) {
    const { education, editEducation } = props

    let editMode = {}
    
    if(!editEducation) {
      editMode.display ='none'
    }

  return (
    <div>
        <div className='school-section'>
            <span className='dateOfStudy-text'>{education.dateOfStudy}</span>
            <p><span className='studyTitle-text'>{education.studyTitle},</span><span className='schoolName-text'>{education.schoolName}</span></p>
        </div>
        <RiDeleteBack2Line className='delete-icon' style={editMode}/>
    </div>
  )
}

export default SchoolUI