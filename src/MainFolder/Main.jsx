import React from 'react'
import bannerimg from '../images/bannerimg.jpg';
import logo from '../images/logo.png';
import './main.css';

import ServicesCon from './contents/services/ServicesCon';
import NavbarCon from './contents/NavbarCon';
import PriceCon from './contents/PriceCon';
import GaranteeCon from './contents/GaranteeCon';
import WorkingCon from './contents/WorkingCon';
import MechanicCon from './contents/MechanicCon';
import RatingsCon from './contents/RatingsCon';



const Main = () => {
  return (
    <>
      <img className='logo' src={logo} alt="logo" />
      <div className='banner' >
        <img src={bannerimg} alt="banner" />
      </div>

      <div className="content">
        <NavbarCon/>
        <ServicesCon />
        <PriceCon />
        <GaranteeCon />
        <WorkingCon />
        <MechanicCon />
        <RatingsCon/>
      </div>
    </>

    
  )
}

export default Main;