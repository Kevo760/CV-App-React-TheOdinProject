import React from 'react';


function EditToggle(props) {
  const {changeEdit, editMode} = props;


  return (
    <div className='preview-edit-btn'>
      { editMode ?
        <button onClick={changeEdit}>PREVIEW MODE</button>
        :
        <button onClick={changeEdit}>EDIT MODE</button>
      }
    </div>
  );
}

export {EditToggle}
