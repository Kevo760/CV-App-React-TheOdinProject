import React from 'react';
import {AiFillDelete} from 'react-icons/ai';

function SkillUI(props) {
    const {skill , editSkills, deleteSkillHandler} = props

  return (
    <div className='skill' key={skill.id}>
        <div className='skill-text'>{skill.skillTitle}</div>
        {editSkills ? <AiFillDelete className='delete-icon' onClick={() => deleteSkillHandler(skill.id)}/> : null}
    </div>
  )
}

export default SkillUI