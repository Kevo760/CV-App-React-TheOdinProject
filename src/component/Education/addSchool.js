import React from 'react'

function addSchool() {
    return (
        <form>
            <input 
            type='text'
            placeholder='School Name'
            />
    
            <input
            type='text'
            placeholder='Study Title'
            />
    
            <input
            type='text'
            placeholder='Date of Study'
            />

            <div className='button-section'>
                <button>Cancel</button>
                <button>Add Education</button>
            </div>
        </form>
      )
}

export default addSchool