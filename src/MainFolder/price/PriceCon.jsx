import React from 'react'
import { priceArr } from '../information';
import Pcards from './cards-price/Pcards';
import './price.css';


const PriceCon = () => {
  return (
    <div id='price'>
      <h1>Our Price</h1>
      <div className="pcard-row">
        <Pcards key={1} arr={priceArr[0]} page = {5} />
        <Pcards key={2} arr={priceArr[1]} page = {5} />
      </div>
    </div>
  )
}

export default PriceCon