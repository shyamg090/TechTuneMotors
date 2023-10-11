import React from 'react'
import { priceArr } from '../../MainFolder/information'
import Pcards from './pCards/Pcards'
import { Link } from 'react-router-dom'
import './pricing.css';

const Pricing = () => {
  return (
    <div className='pricingPage'>

      <div className="pri-back">
        <Link to={'/'}> <h1>Home</h1> </Link>
      </div>

      <Pcards key={1} arr={priceArr[0]} />
      <Pcards key={2} arr={priceArr[1]} />
      <Pcards key={3} arr={priceArr[2]} />
    </div>
  )
}

export default Pricing