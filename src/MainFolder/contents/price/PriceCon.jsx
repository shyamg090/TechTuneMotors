import React from 'react'
import { array } from '../../information';
import Pcards from './cards-price/Pcards';
import './price.css';

const PriceCon = () => {
  return (
    <div id='price'>
      <h1>Our Price</h1>
      <div className="pcard-row">
        <Pcards key={array[0].title} arr={array[0]} link={'/price'} />
        <Pcards key={array[1].title} arr={array[1]} />
      </div>
    </div>
  )
}

export default PriceCon