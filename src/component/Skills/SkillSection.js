import React from 'react';
import '../../styles/skillSection.css';
import SkillUI from './SkillUI';



function SkillSection(props) {
    const { skills, editSkills } = props
    const showSkills = skills.map(skill => <SkillUI key={skill.id} editSkills={editSkills} skill={skill} />)

  return (
    <div className='skills-section'>
        <h2>SKILLS</h2>
        <div className='skills'>
    
            { showSkills }
            
            {editSkills ?
                <div className='skills-edit'>
                <input 
                type='text'
                placeholder='List your strengths relevant for the role you are applying for'
                />
                <button>Add Skill</button>
                </div>
                : 
                null
            }
        </div>
    </div>
  )
}

export default SkillSection