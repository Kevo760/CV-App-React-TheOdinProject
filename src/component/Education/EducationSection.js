import React, { useState } from 'react';
import SchoolUI from './SchoolUI';
import '../../styles/educationSection.css';



function EducationSection(props) {
    const {educations} = props

    const school = educations.map(school => <SchoolUI school={school} key={school.id}/>)


  return (
    <div className='educations-section'>
        <h2>EDUCATION</h2>
        <div className='schools'>
            {school}
        </div>
    </div>
  )
}

export default EducationSection