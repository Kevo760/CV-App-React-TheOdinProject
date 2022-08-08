import React from 'react';
import SchoolUI from './SchoolUI';
import '../../styles/educationSection.css';


function EducationSection(props) {
    const {educations, editEducation} = props
    const education = educations.map(education => <SchoolUI key={education.id} education={education} editEducation={editEducation}/>)

  return (
    <div className='educations-section'>
        <h2>EDUCATION</h2>
        <div className='schools'>
            {education}
        </div>
    </div>
  )
}

export default EducationSection