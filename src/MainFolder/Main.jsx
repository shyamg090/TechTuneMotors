import React from 'react'

import bannerimg from '../images/bannerimg.png';
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
        <img className='imagebg' src={bannerimg} alt="banner" />
      </div>

      <Form />

      <ContentPage />

    </div>

  )
}

export default Main;
