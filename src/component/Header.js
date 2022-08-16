import React from 'react';
import { EditToggle } from './EditToggle';
import '../styles/header.css';

function Header(props) {
    const {changeEdit, editMode} = props

  return (
    <header>
        <h1>CV Builder Lite</h1>
        <EditToggle changeEdit={changeEdit} editMode={editMode}/>
    </header>
  )
}

export default Header
