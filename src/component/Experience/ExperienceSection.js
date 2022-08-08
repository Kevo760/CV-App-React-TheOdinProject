import React from 'react';
import JobUI from './JobUI';
import '../../styles/experienceSection.css'


function ExperienceSection(props) {
    const {experiences, editExperience} = props
    const jobs = experiences.map(experience => <JobUI key={experience.id} experience={experience} editExperience={editExperience}/>)

  return (
    <div className='experiences-section'>
        <h2>EXPERIENCE</h2>
        <div className='jobs'>
            {jobs}
        </div>
    </div>
  )
}

export default ExperienceSection