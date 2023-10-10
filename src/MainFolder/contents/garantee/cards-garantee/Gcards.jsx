import React from 'react'
import { GiShakingHands } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './gcards.css';

const Gcards = ({ point, image, link }) => {
  return (
      <div className='gcards'>
          <Link to={link}>
              <div className="gcards-content">
                  <div className="point">
                      <GiShakingHands /> <h4>{point}</h4>
                  </div>
              </div>
          </Link>

      </div>
  )
}

export default Gcards