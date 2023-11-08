import React from 'react'

import bannerimg from '../images/bannerimg.jpg';
import logo from '../images/logo.png';
import './main.css';


import { Form } from './form/Form';
import {ContentPage} from './contentPage/ContentPage';


const Main = () => {

  return (

    <div className='body-div'>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className='banner' >
        <h1 className='top-h1' ><span>T</span>he <span>O</span>ne <span>S</span>top <span>S</span>olution</h1>
        <img className='imagebg' src={bannerimg} alt="banner" />
        <h1 className='bottom-h1' ><span>F</span>or <span>Y</span>our <span>C</span>ar. </h1>
      </div>

      <div className="content-div">
        <Form />

        <ContentPage />
      </div>

    </div>

  )
}

export default Main;
