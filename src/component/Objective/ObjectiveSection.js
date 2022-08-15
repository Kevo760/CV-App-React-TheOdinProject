
import '../../styles/objectiveSection.css';

function ObjectiveSection(props) {
  const { objective} = props

  return (
    <div className='objective-section'>

     <span className='objective-text'>{objective}</span>
  
    </div>
  )
}

export default ObjectiveSection