import React from 'react'
import { footerArr } from '../MainFolder/information';
import Fcards from './Fcards';

import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="foot-card-row">
        <Fcards key={footerArr[0].id} arr={footerArr[0]} />
        <Fcards key={footerArr[1].id} arr={footerArr[1]} />
        <Fcards key={footerArr[2].id} arr={footerArr[2]} />
        <Fcards key={footerArr[3].id} arr={footerArr[3]} />
      </div>

    </div>
  )
}

export default Footer;