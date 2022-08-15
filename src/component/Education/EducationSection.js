import React, { useState } from 'react';
import SchoolUI from './SchoolUI';
import '../../styles/educationSection.css';
import AddSchool from './AddSchool';
import {AiFillDelete} from 'react-icons/ai';


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