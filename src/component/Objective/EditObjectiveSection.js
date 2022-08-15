import React, { useState } from 'react';

function EditObjectiveSection(props) {
    const { objective, handleObjectiveChange} = props
    const [edit, setEdit] = useState(false)
  
    const changeEdit = () => {
      setEdit(prevEdit => !prevEdit)
    }
  
    return (
      <div className='objective-section'>
        { edit ? 
          <input type='text' 
          placeholder='Objective'
          value={objective}
          onChange={handleObjectiveChange}
          /> 
          :
          <span className='objective-text'>{objective}</span>
        }
        { edit ?
          <button className='edit-objective-btn' onClick={changeEdit}>Enter Objective</button>
          :
          <button className='edit-objective-btn' onClick={changeEdit}>Edit Objective</button>
        }
      </div>
    )
}

export default EditObjectiveSection