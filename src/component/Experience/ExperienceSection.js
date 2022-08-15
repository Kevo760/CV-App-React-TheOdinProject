import React, { useState } from 'react';
import JobUI from './JobUI';
import '../../styles/experienceSection.css'
import {AiFillDelete} from 'react-icons/ai';
import AddJob from './AddJob'



function ExperienceSection(props) {
  const {experiences} = props

  const jobs = experiences.map(experience => <JobUI experience={experience} key={experience.id}/>)

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