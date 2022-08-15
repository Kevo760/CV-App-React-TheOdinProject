import React, { useState } from 'react';
import JobUI from './JobUI';
import '../../styles/experienceSection.css'
import {AiFillDelete} from 'react-icons/ai';
import AddJob from './AddJob'

function EditExperienceSection(props) {
    const {experiences, experience, handleExperienceChange, deleteExperienceHandler, onSubmitExperienceHandler} = props

    const jobs = experiences.map(experience => 
    <div key={experience.id} className='edit-experience-section'>
      <JobUI experience={experience}/>
      <AiFillDelete className='delete-icon' onClick={() => deleteExperienceHandler(experience.id)}/>
    </div>)
  
    const [edit, setEdit] = useState(false)
  
    const handleEdit = () => {
      setEdit(prevEdit => !prevEdit)
    }
  
    return (
      <div className='experiences-section'>
          <h2>EXPERIENCE</h2>
          <div className='jobs'>
              {jobs}
          </div>
        { edit ?
          <AddJob experience={experience} handleEdit={handleEdit} handleExperienceChange={handleExperienceChange} onSubmitExperienceHandler={onSubmitExperienceHandler}/>
          :
          <button className='add-button' onClick={handleEdit}>Add Experience</button>
        }
      </div>
  
    )
}

export default EditExperienceSection