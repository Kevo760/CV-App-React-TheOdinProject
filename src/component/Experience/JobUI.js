import React from 'react';

function JobUI(props) {
    const {experience} = props


  return (
    <div className='jobUI'>
        <div className='job-section'>
            <span className='dates-text'>{experience.dateHired} to {experience.dateQuit}</span>
            <p><span className='jobTitle-text'>{experience.positionTitle},</span><span className='companyName-text'>{experience.companyName}</span></p>
            <span className='mainTask-text'>{experience.mainTask}</span>
        </div>
    </div>
  )
}

export default JobUI