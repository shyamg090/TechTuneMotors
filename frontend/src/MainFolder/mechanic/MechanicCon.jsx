import React from 'react'
import a1 from '../../images/a (1).png'
import a2 from '../../images/a (2).png'
import a3 from '../../images/a (3).png'
import a4 from '../../images/a (4).png'
import a5 from '../../images/a (5).png'
import a6 from '../../images/a (6).png'
import a7 from '../../images/a (7).png'

import './mechanic.css';

const MechanicCon = () => {
  return (
    <div id='specialists'>
      <h1>Our Specilization</h1>
      <div className="logo-slider">
        <img src={a1} alt="logo" />
        <img src={a2} alt="logo" />
        <img src={a3} alt="logo" />
        <img src={a4} alt="logo" />
        <img src={a5} alt="logo" />
        <img src={a6} alt="logo" />
        <img src={a7} alt="logo" />
      </div>
      <div className="logo-slider">
        <img src={a1} alt="logo" />
        <img src={a2} alt="logo" />
        <img src={a3} alt="logo" />
        <img src={a4} alt="logo" />
        <img src={a5} alt="logo" />
        <img src={a6} alt="logo" />
        <img src={a7} alt="logo" />
      </div>
    </div>
  )
}

export default MechanicCon;