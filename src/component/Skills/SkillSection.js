import React from 'react';
import '../../styles/skillSection.css';
import SkillUI from './SkillUI';



function SkillSection(props) {
    const { skills, skill, editSkills, handleSkillChange, deleteSkillHandler, onSubmitSkillHandler } = props
    const showSkills = skills.map(skill => <SkillUI key={skill.id} editSkills={editSkills} skill={skill} deleteSkillHandler={deleteSkillHandler} />)

  return (
    <div className='skills-section'>
        <h2>SKILLS</h2>
        <div className='skills'>
    
          { showSkills }
            
          {editSkills ?
            <form className='skills-edit' onSubmit={onSubmitSkillHandler}>
              <input 
              type='text'
              placeholder='List your strengths relevant for the role you are applying for'
              value={skill.skillTitle}
              onChange={handleSkillChange}
              />
              <button>Add Skill</button>
              </form>
            : 
            null
          }

        </div>

    </div>
  )
}

export default SkillSection