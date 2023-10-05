import React from 'react'
import bannerimg from '../images/bannerimg.jpg';
import logo from '../images/logo.png';
import './main.css';

import ServicesCon from './contents/services/ServicesCon';
import NavbarCon from './contents/navbar/NavbarCon';
import PriceCon from './contents/price/PriceCon';
import GaranteeCon from './contents/garantee/GaranteeCon';
import WorkingCon from './contents/working/WorkingCon';
import MechanicCon from './contents/mechanic/MechanicCon';
import RatingCon from './contents/ratings/RatingsCon';

const Main = () => {
  return (
    <>
      <img className='logo' src={logo} alt="logo" />
      <div className='banner' >
        <img src={bannerimg} alt="banner" />
      </div>

      <div className="content">
        <NavbarCon />
        <ServicesCon />
        <PriceCon/>
        <GaranteeCon/>
        <WorkingCon />
        <MechanicCon/>
        <RatingCon/>
      </div>
    </>

    
  )
}

export default Main;