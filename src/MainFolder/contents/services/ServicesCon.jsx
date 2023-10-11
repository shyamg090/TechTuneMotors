import React from 'react'
import Cards from './cards/Cards';
import './services.css'
import { array } from '../../information';
// import { GrServices } from "react-icons/gr";


const ServicesCon = () => {
  // console.log(array);

  return (
    <div id='ourservices'>
      <h1>Our Services</h1>
      <div className="card-row">
        <Cards key={array[0].title} arr={array[0]} link = {'/services'} />
        <Cards key={array[1].title} arr={array[1]} link={'/wash'} />
      </div>
      <div className="card-row">
        <Cards key={array[2].title} arr={array[2]} link={'/batteries'} />
        <Cards key={array[3].title} arr={array[3]} link={'/others'} />
      </div>
    </div>
  )
}

export default ServicesCon;