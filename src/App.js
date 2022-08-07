import './App.css';
import React, { Component } from 'react'
import Header from './component/Header';
import { EditToggle } from './component/EditToggle';


class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     general: {
      name: '',
      email: '',
      phone: '',
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
     education: [],
     experience: [],
     objective: '',
  }
}


render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App

