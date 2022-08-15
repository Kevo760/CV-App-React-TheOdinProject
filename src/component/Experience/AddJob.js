import React from 'react'

function AddJob(props) {
  const {experience, handleEdit, handleExperienceChange, onSubmitExperienceHandler} = props

  return (
    <form className='experience-form'>
        <input 
        type='text'
        placeholder='Company Name'
        value={experience.companyName}
        name='companyName'
        onChange={handleExperienceChange}
        />

        <input
        type='text'
        placeholder='Position Title'
        value={experience.positionTitle}
        name='positionTitle'
        onChange={handleExperienceChange}
        />

        <input
        type='text'
        placeholder='Date Hired'
        value={experience.dateHired}
        name='dateHired'
        onChange={handleExperienceChange}
        />

        <input
        type='text'
        placeholder='Date Quit'
        value={experience.dateQuit}
        name='dateQuit'
        onChange={handleExperienceChange}
        />

        <input
        type='text'
        placeholder='Describe your responsibilities and achievements in terms of impact and results.'
        value={experience.mainTask}
        name='mainTask'
        onChange={handleExperienceChange}
        />

        <div className='button-section'>
            <button onClick={handleEdit} type='button'>Cancel</button>
            <button onClick={(e) => {onSubmitExperienceHandler(e); handleEdit(e)}}>Add Experience</button>
        </div>

    </form>
  )
}

export default AddJob