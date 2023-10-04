import React from 'react'
import Cards from '../cards/Cards';
import './services.css'

const ServicesCon = () => {
  return (
    <div id='ourservices'>
      <div className="card-row">
        <Cards />
        <Cards />
      </div>
      <div className="card-row">
        <Cards />
        <Cards />
      </div>

    </div>
  )
}

export default ServicesCon;