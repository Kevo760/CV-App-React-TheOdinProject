import React from 'react';
import '../styles/objectiveSection.css'

function ObjectiveSection(props) {
  const { objective, editObjective } = props


  return (
    <div className='objective-section'>
      { editObjective ? 
        <input type='text' placeholder='Objective'/> 
        :
        <span className='objective-text'>{objective}</span>
      }
    </div>
  )
}

export default ObjectiveSection