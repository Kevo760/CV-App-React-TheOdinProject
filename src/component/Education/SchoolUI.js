import React from 'react';


function SchoolUI(props) {
    const { school } = props


  return (
    <div className='schoolUI'>
        <div className='school-section'>
            <span className='dateOfStudy-text'>{school.dateOfStudy}</span>
            <p><span className='studyTitle-text'>{school.studyTitle},</span><span className='schoolName-text'>{school.schoolName}</span></p>
        </div>
    </div>
  )
}

export default SchoolUI