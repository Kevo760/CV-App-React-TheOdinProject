import './App.css';
import React, { Component } from 'react'
import Header from './component/Header';
import { EditToggle } from './component/EditToggle';
import GeneralSection from './component/GeneralSection/GeneralSection';
import ObjectiveSection from './component/ObjectiveSection';
import ExperienceSection from './component/Experience/ExperienceSection';
import EducationSection from './component/Education/EducationSection';
import SkillSection from './component/Skills/SkillSection';
import uniqid from 'uniqid'


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
      id: uniqid(),
     },
     experience: {
      companyName: '',
      positionTitle: '',
      mainTask: '',
      dateHired: '',
      dateQuit: '',
      id: uniqid(),
     },
     skill: {
      skillTitle: '',
      id: uniqid()
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
     skills: [
      {
        skillTitle: 'cooking',
        id: '1'
      },
      {
        skillTitle: 'making that bread',
        id: '2'
      },
      {
        skillTitle: 'make customers laugh, make customers laugh, make customers laugh, make customers laugh',
        id: '4'
      },
      {
        skillTitle: 'make customers laugh',
        id: '5'
      },
      {
        skillTitle: 'make customers laugh',
        id: '6'
      },
      {
        skillTitle: 'make customers laugh',
        id: '7'
      }
     ],
     editGeneral: true,
     editObjective: false,
     editExperience: false,
     editEducation: false,
     editSkill: false,
  }
}

// handleGeneralChange = e => {
//   let name = e.target.name
//   let value = e.target.value

//   let newGeneral = {
//     ...this.state.general,
//     [name]: value
//   }

//   this.setState({
//     general : newGeneral
//   })
// }

handleGeneralChange = e => {
  let name = e.target.name
  let value = e.target.value

  this.setState(prevState => ({
    general : {
      ...prevState.general,
      [name]: value
    }
  }))
}

changeGeneralEdit = () => {
  this.setState(prevState => ({
    editGeneral: !prevState.editGeneral
  }))
}


render() {
    return (
      <div>

        <Header />
      <button onClick={() => console.log(this.state)}>Click Me</button>
        <div className='Cv-section'>
          <GeneralSection general={this.state.general} editGeneral={this.state.editGeneral} handleGeneralChange={this.handleGeneralChange.bind(this)} changeGeneralEdit={this.changeGeneralEdit.bind(this)}/>
          <ObjectiveSection objective={this.state.objective} editObjective={this.state.editObjective}/>
          <ExperienceSection experiences={this.state.experiences} editExperience={this.state.editExperience}/>
          <EducationSection educations={this.state.educations} editEducation={this.state.editEducation}/>
          <SkillSection skills={this.state.skills} editSkills={this.state.editSkill}/>
        </div>

      </div>
    )
  }
}

export default App

