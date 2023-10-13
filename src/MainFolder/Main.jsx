import React from 'react'

import bannerimg from '../images/bannerimg.png';
import logo from '../images/logo.png';
import './main.css';


// import NavbarCon from './navbar/NavbarCon';
// import ServicesCon from './services/ServicesCon';
// import PriceCon from './price/PriceCon';
// import GaranteeCon from './garantee/GaranteeCon';
// import WorkingCon from './working/WorkingCon';
// import MechanicCon from './mechanic/MechanicCon';
// import RatingCon from './ratings/RatingsCon';


import { Form } from './form/Form';
import {ContentPage} from './contentPage/ContentPage';


const Main = () => {

  return (

    <div className='body-div'>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className='banner' >
        <img className='imagebg' src={bannerimg} alt="banner" />
      </div>

      <Form />

      <ContentPage />

    </div>

  )
}

export default Main;

/*




 

*/