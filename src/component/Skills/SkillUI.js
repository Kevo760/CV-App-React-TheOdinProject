import React from 'react';
import {AiFillDelete} from 'react-icons/ai';

function SkillUI(props) {
    const {skill , editSkills} = props

  return (
    <div className='skill' key={skill.id}>
        <div className='skill-text'>{skill.skillTitle}</div>
        {editSkills ? <AiFillDelete className='delete-icon'/> : null}
    </div>
  )
}

export default SkillUI