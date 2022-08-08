import React from 'react'

function AddJob(props) {
  return (
    <form>
        <input 
        type='text'
        placeholder='Company Name'
        />

        <input
        type='text'
        placeholder='Position Title'
        />

        <input
        type='text'
        placeholder='Date Hired'
        />

        <input
        type='text'
        placeholder='Date Quit'
        />

        <input
        type='text'
        placeholder='Describe your responsibilities and achievements in terms of impact and results. Use examples, but keep it short.'
        />
        <div className='button-section'>
            <button>Cancel</button>
            <button>Add Experience</button>
        </div>
    </form>
  )
}

export default AddJob