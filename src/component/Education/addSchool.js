import React from 'react'

function AddSchool(props) {
    const {school, editHandler, handleSchoolChange, onSubmitSchool} = props
    return (
        <form className='school-form'>
            <input 
            type='text'
            placeholder='School Name'
            name='schoolName'
            onChange={handleSchoolChange}
            value={school.schoolName}
            />
    
            <input
            type='text'
            placeholder='Study Title'
            name='studyTitle'
            onChange={handleSchoolChange}
            value={school.studyTitle}
            />
    
            <input
            type='text'
            placeholder='Date of Study'
            name='dateOfStudy'
            onChange={handleSchoolChange}
            value={school.dateOfStudy}
            />

            <div className='button-section'>
                <button onClick={editHandler} type='button'>Cancel</button>
                <button onClick={(e) => {onSubmitSchool(e); editHandler(e)}}>Add Education</button>
            </div>
        </form>
      )
}

export default AddSchool