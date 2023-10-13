import React from 'react'
import './working.css';
import { PiNumberSquareOneLight, PiNumberSquareTwoLight, PiNumberSquareThreeLight, PiNumberSquareFourLight } from 'react-icons/pi'
import { works } from '../information';
 
const WorkingCon = () => {
  return (
    <div id='working'> 
      <h1>Working</h1>
      <ul>
        <li><PiNumberSquareOneLight /> <h2>{works[0]} </h2> </li>
        <li><PiNumberSquareTwoLight /><h2>{works[1]} </h2> </li>
        <li><PiNumberSquareThreeLight /><h2>{works[2]} </h2> </li>
        <li><PiNumberSquareFourLight /><h2>{works[3]} </h2> </li>
      </ul>
    </div>
  )
}

export default WorkingCon