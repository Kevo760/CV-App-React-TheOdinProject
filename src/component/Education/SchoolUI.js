import React from 'react';
import { AiFillDelete } from 'react-icons/ai'

function SchoolUI(props) {
    const { education, editEducation } = props


  return (
    <div className='schoolUI'>
        <div className='school-section'>
            <span className='dateOfStudy-text'>{education.dateOfStudy}</span>
            <p><span className='studyTitle-text'>{education.studyTitle},</span><span className='schoolName-text'>{education.schoolName}</span></p>
        </div>
        {editEducation ? <AiFillDelete className='delete-icon'/> : null}
    </div>
  )
}

export default SchoolUI