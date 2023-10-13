import React from 'react'
import { guaranteeArr } from '../information';
import Gcards from './cards-garantee/Gcards';
import './garantee.css';

const GaranteeCon = () => {
  return (
    <div id='garuntees'>
      <h1>Our Guarantee</h1>
      <div className="g-card-row">
        <Gcards key={1} point={guaranteeArr[0]} />
        <Gcards key={2} point={guaranteeArr[1]} />
      </div>
      <div className="g-card-row">
        <Gcards key={3} point={guaranteeArr[2]} />
        <Gcards key={4} point={guaranteeArr[3]} />
      </div>

    </div>
  )
}

export default GaranteeCon