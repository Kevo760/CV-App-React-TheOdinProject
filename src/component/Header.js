import React from 'react';
import { EditToggle } from './EditToggle';
import '../styles/header.css';

function Header() {
    

  return (
    <header>
        <h1>CV Builder Lite</h1>
        <EditToggle />
    </header>
  )
}

export default Header
