import React from 'react'
import { array } from '../../information';
import Gcards from './cards-garantee/Gcards';
import './garantee.css';

const GaranteeCon = () => {
  return (
    <div id='garuntees'>
      <h1>Our Garantee</h1>
      <div className="g-card-row">
        <Gcards key={array[0].title} arr={array[0]} />
        <Gcards key={array[1].title} arr={array[1]} />
      </div>
      <div className="g-card-row">
        <Gcards key={array[2].title} arr={array[2]} />
        <Gcards key={array[3].title} arr={array[3]} />
      </div>

    </div>
  )
}

export default GaranteeCon