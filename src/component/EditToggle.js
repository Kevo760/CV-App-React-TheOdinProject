import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../styles/editToggle.css';

function EditToggle() {
  const [alignment, setAlignment] = React.useState('edit');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="info"
      value={alignment}
      exclusive
      onChange={handleChange}
      size='small'
      className='toggleGroup'
    >
      <ToggleButton value="edit">Edit</ToggleButton>
      <ToggleButton value="preview">Preview</ToggleButton>
    </ToggleButtonGroup>
  );
}

export {EditToggle}
