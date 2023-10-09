import React from 'react'
import { array } from '../MainFolder/information';
import Fcards from './Fcards';

import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="foot-card-row">
        <Fcards key={array[0].title} arr={array[0]} />
        <Fcards key={array[1].title} arr={array[1]} />
        <Fcards key={array[0].title} arr={array[0]} />
        <Fcards key={array[1].title} arr={array[1]} />
      </div>

    </div>
  )
}

export default Footer;