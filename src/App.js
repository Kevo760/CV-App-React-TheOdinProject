import './App.css';
import React, { Component } from 'react'
import Header from './component/Header';
import { EditToggle } from './component/EditToggle';
import GeneralSection from './component/GeneralSection';
import ObjectiveSection from './component/ObjectiveSection';
import ExperienceSection from './component/Experience/ExperienceSection';
import EducationSection from './component/Education/EducationSection';


class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     general: {
      name: 'KEVIN DAVID',
      email: 'Kevo@email.com',
      phone: '760-000-0000',
     },
     school: {
      schoolName: '',
      studyTitle: '',
      dateOfStudy: '',
      id: '',
     },
     experience: {
      companyName: '',
      positionTitle: '',
      mainTask: '',
      dateHired: '',
      dateQuit: '',
      id: '',
     },
     educations: [
    {
     schoolName: 'University of Code',
     studyTitle: 'Leet Codezter',
     dateOfStudy: 'July 2022',
     id: '24561'
    }
    ],
     experiences: [
      {
        companyName: 'Subway',
        positionTitle: 'Sandwich Creator',
        mainTask: 'Make bomb sandwiches',
        dateHired: 'October 2011',
        dateQuit: 'Current',
        id: '1123',
       }
     ],
     objective: 'To apply for your NASA scientist role to make amazing sandwiches to bring peace to the Martians',
     editGeneral: false,
     editObjective: false,
     editExperience: false,
  }
}


render() {
    return (
      <div>

        <Header />

        <div className='Cv-section'>
          <GeneralSection general={this.state.general} editGeneral={this.state.editGeneral} />
          <ObjectiveSection objective={this.state.objective} editObjective={this.state.editObjective}/>
          <ExperienceSection experiences={this.state.experiences}/>
          <EducationSection educations={this.state.educations}/>

        </div>

      </div>
    )
  }
}

export default App

