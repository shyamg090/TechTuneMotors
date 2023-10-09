import React from 'react'
import './working.css';
import { PiNumberSquareOneLight, PiNumberSquareTwoLight, PiNumberSquareThreeLight, PiNumberSquareFourLight } from 'react-icons/pi'

const WorkingCon = () => {
  return (
    <div id='working'> 
      <h1>Working</h1>
      <ul>
        <li><PiNumberSquareOneLight />Visit our website to browse plans</li>
        <li><PiNumberSquareTwoLight />Visit our website to browse plans</li>
        <li><PiNumberSquareThreeLight />Visit our website to browse plans</li>
        <li><PiNumberSquareFourLight />Visit our website to browse plans</li>
      </ul>
    </div>
  )
}

export default WorkingCon