import React, { useContext } from 'react'
import { priceArr } from '../../MainFolder/information'
import Pcards from './pCards/Pcards'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';

import './pricing.css';
import { MainContext } from '../../MainFolder/contentPage/ContentPage';

const Pricing = () => {

  const result = useContext(MainContext);

  function backpage() {
    result.setconpage(0);
  }
  
  return (

    <div className='pricingPage'>

      <Link to={'/'} className="backButton" onClick={backpage} >
        <BiArrowBack />
      </Link>

      <div className="Price-div">
        <Pcards key={1} arr={priceArr[0]} />
        <Pcards key={2} arr={priceArr[1]} />
        <Pcards key={3} arr={priceArr[2]} />
      </div>
    </div>
  )
}

export default Pricing