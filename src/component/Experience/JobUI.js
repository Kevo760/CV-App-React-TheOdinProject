import React from 'react';
import {AiFillDelete} from 'react-icons/ai';

function JobUI(props) {
    const { experience, editExperience } = props


  return (
    <div className='jobUI'>
        <div className='job-section'>
            <span className='dates-text'>{experience.dateHired} to {experience.dateQuit}</span>
            <p><span className='jobTitle-text'>{experience.positionTitle},</span><span className='companyName-text'>{experience.companyName}</span></p>
            <span className='mainTask-text'>{experience.mainTask}</span>
        </div>
        {editExperience ? <AiFillDelete className='delete-icon'/> : null}
    </div>
  )
}

export default JobUI