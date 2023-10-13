import React from 'react'
import Cards from './cards/Cards';
import './services.css'
import { array } from '../information';

const ServicesCon = () => {

  return (
    <div id='ourservices'>
      <h1>Our Services</h1>
      <div className="card-row">
        <Cards key={array[0].title} arr={array[0]} page={1} />
        <Cards key={array[1].title} arr={array[1]} page={2} />
      </div>
      <div className="card-row">
        <Cards key={array[2].title} arr={array[2]} page={3} />
        <Cards key={array[3].title} arr={array[3]} page={4} />
      </div>
    </div>
  )
}

export default ServicesCon;