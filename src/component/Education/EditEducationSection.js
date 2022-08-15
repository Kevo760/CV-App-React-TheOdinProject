import React, { useState } from 'react';
import SchoolUI from './SchoolUI';
import '../../styles/educationSection.css';
import AddSchool from './AddSchool';
import {AiFillDelete} from 'react-icons/ai';

function EditEducationSection(props) {
    const {educations, handleSchoolChange, deleteSchoolHandler, onSubmitSchool} = props

    const school = educations.map(school => 
    <div key={school.id} className='edit-school-section'>
      <SchoolUI school={school}/>
      <AiFillDelete className='delete-icon' onClick={() => deleteSchoolHandler(school.id)}/>
    </div>
    )

    const [edit, setEdit] = useState(false)

    const editHandler = () => {
      setEdit(prevEdit => !prevEdit)
    }

  return (
    <div className='educations-section'>
        <h2>EDUCATION</h2>
        <div className='schools'>
            {school}
        </div>
        { edit ?
          <AddSchool school={school} editHandler={editHandler} handleSchoolChange={handleSchoolChange} onSubmitSchool={onSubmitSchool}/>
          :
          <button className='add-button' onClick={editHandler}>Add Education</button>
        }
    </div>
  )
}

export default EditEducationSection