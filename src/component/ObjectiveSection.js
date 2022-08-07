import React from 'react'

function ObjectiveSection(props) {
  const { objective, objectiveEdit } = props



  return (
    <div className='objective-section'>
      { objectiveEdit ? 
        <input type='text' placeholder='Objective' style={editMode}/> 
        :
        <span style={viewMode} className='objective-text'>{objective}</span>
      }
    </div>
  )
}

export default ObjectiveSection