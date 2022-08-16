import './App.css';
import React, { Component } from 'react'
import Header from './component/Header';
import GeneralSection from './component/GeneralSection/GeneralSection';
import EditGeneralSection from './component/GeneralSection/EditGeneralSection';
import ObjectiveSection from './component/Objective/ObjectiveSection';
import EditObjectiveSection from './component/Objective/EditObjectiveSection';
import ExperienceSection from './component/Experience/ExperienceSection';
import EditExperienceSection from './component/Experience/EditExperienceSection';
import EducationSection from './component/Education/EducationSection';
import EditEducationSection from './component/Education/EditEducationSection';
import SkillSection from './component/Skills/SkillSection';
import uniqid from 'uniqid';



class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     general: {
      name: 'Saltin Pepper',
      email: 'S4ndw1chartist@sub.com',
      phone: '123-345-1234',
     },
     objective: 'To apply for your NASA scientist role to make amazing sandwiches to bring peace to the Martians',
     experience: {
      companyName: '',
      positionTitle: '',
      mainTask: '',
      dateHired: '',
      dateQuit: '',
      id: uniqid(),
     },
     school: {
      schoolName: '',
      studyTitle: '',
      dateOfStudy: '',
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
    },
    {
      schoolName: 'University of Code',
      studyTitle: 'Leet Codezter',
      dateOfStudy: 'July 2022',
      id: '24562'
     }
    ],
     experiences: [
      {
        companyName: 'Subway',
        positionTitle: 'Sandwich Master Creator',
        mainTask: 'Make the perfect bomb sandwich that is cut to perfection with flavors that will give you sense of fulfillment.',
        dateHired: 'October 2011',
        dateQuit: 'Current',
        id: '1123',
       },
       {
        companyName: 'Quiznos',
        positionTitle: 'Bread Maker',
        mainTask: 'Make the softest bread that you can use it as a pillow and fall asleep on it. ',
        dateHired: 'September 2010',
        dateQuit: 'September 2011',
        id: '1124',
       }
     ],
     skills: [
      {
        skillTitle: 'Cooking',
        id: '1'
      },
      {
        skillTitle: 'Making that bread',
        id: '2'
      },
      {
        skillTitle: 'Make customers laugh',
        id: '4'
      },
      {
        skillTitle: 'I can cut onions without crying',
        id: '5'
      },
      {
        skillTitle: 'King of upselling Quac',
        id: '6'
      }
     ],
     editMode: true,
  }
  this.handleGeneralChange = this.handleGeneralChange.bind(this);
  this.handleObjectiveChange = this.handleObjectiveChange.bind(this);
  this.handleExperienceChange = this.handleExperienceChange.bind(this);
  this.deleteExperienceHandler = this.deleteExperienceHandler.bind(this);
  this.onSubmitExperienceHandler = this.onSubmitExperienceHandler.bind(this);
  this.handleSchoolChange = this.handleSchoolChange.bind(this);
  this.deleteSchoolHandler = this.deleteSchoolHandler.bind(this);
  this.onSubmitSchool = this.onSubmitSchool.bind(this);
  this.handleSkillChange = this.handleSkillChange.bind(this);
  this.deleteSkillHandler = this.deleteSkillHandler.bind(this);
  this.onSubmitSkillHandler = this.onSubmitSkillHandler.bind(this);
  this.changeEdit = this.changeEdit.bind(this);
}


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

handleObjectiveChange = e => {
  let value = e.target.value

  this.setState({
    objective: value
  })
}

handleExperienceChange = e => {
  let value = e.target.value
  let name = e.target.name

  this.setState(prevState =>({
    experience: {
      ...prevState.experience,
      [name]: value
    }
  }))
}

deleteExperienceHandler = id => {
  this.setState({
    experiences: this.state.experiences.filter(
      experience => experience.id !== id
    )
  })
}

onSubmitExperienceHandler = e => {
  e.preventDefault();
  this.setState({
    experiences: this.state.experiences.concat(this.state.experience),
    experience: {
      companyName: '',
      positionTitle: '',
      mainTask: '',
      dateHired: '',
      dateQuit: '',
      id: uniqid()
    }
  })
}

handleSchoolChange = e => {
  let value = e.target.value
  let name = e.target.name

  this.setState(prevState => ({
    school : {
      ...prevState.school,
      [name]:value
    }
  }))
}

deleteSchoolHandler = id => {
  this.setState({
    educations: this.state.educations.filter(
      school => school.id !==id
      )
  })
}

onSubmitSchool = e => {
  e.preventDefault();
  this.setState({
    educations: this.state.educations.concat(this.state.school),
    school: {
      schoolName: '',
      studyTitle: '',
      dateOfStudy: '',
      id: uniqid(),
    }
  }
  )
}

handleSkillChange = (e) => {
  let value = e.target.value

  this.setState({
    skill: {
      skillTitle: value,
      id: this.state.skill.id
    }
  })
}

deleteSkillHandler = id => {
  this.setState({
    skills: this.state.skills.filter(
      skill => skill.id !== id
    )
  })
}

onSubmitSkillHandler = e => {
  e.preventDefault();

  this.setState({
    skills: this.state.skills.concat(this.state.skill),
    skill: {
      skillTitle: '',
      id: uniqid()
    },
  })
}

changeEdit = () => {
  this.setState(prevState => ({
    editMode: !prevState.editMode
  }));
}


render() {

  const { general, objective, experiences, educations, skills,
    school, experience, skill,
    editMode } = this.state

    return (
      <div>

        <Header changeEdit={this.changeEdit} editMode={editMode}/>

        <div className='Cv-section'>

          { editMode ?
            <EditGeneralSection general={general}  handleGeneralChange={this.handleGeneralChange} changeGeneralEdit={this.changeGeneralEdit}/>
            :
            <GeneralSection general={general} />
          }
          
          { editMode ?
            <EditObjectiveSection objective={objective} handleObjectiveChange={this.handleObjectiveChange} />
            :
            <ObjectiveSection objective={objective} />
          }

          { editMode ?
            <EditExperienceSection experiences={experiences} experience={experience}  handleExperienceChange={this.handleExperienceChange} deleteExperienceHandler={this.deleteExperienceHandler} onSubmitExperienceHandler={this.onSubmitExperienceHandler}/>
            :
            <ExperienceSection experiences={experiences} />

          }

          { editMode ?
            <EditEducationSection educations={educations} school={school} handleSchoolChange={this.handleSchoolChange} deleteSchoolHandler={this.deleteSchoolHandler} onSubmitSchool={this.onSubmitSchool}/>
            :
            <EducationSection educations={educations} />
          }
          
          <SkillSection skills={skills} skill={skill} editSkills={editMode} handleSkillChange={this.handleSkillChange} deleteSkillHandler={this.deleteSkillHandler} onSubmitSkillHandler={this.onSubmitSkillHandler}/>

        </div>

      </div>
    )
  }
}

export default App

