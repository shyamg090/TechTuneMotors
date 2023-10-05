import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import './rcards.css';


const Rcards = ({ arr, image, link }) => {
  return (
      <div className='r-cards'>
          
              <h3>{arr?.title}</h3>
              <div className="r-cards-content">
                  <div className="point">
                      <IoMdCheckmarkCircleOutline /> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint ducimus totam ad provident assumenda tenetur nesciunt cupiditate officiis eius.</h4>
                  </div>
                  <div className="point">
                      <IoMdCheckmarkCircleOutline /> <h4>{arr?.point2}</h4>
                  </div>
                  <div className="point">
                      <IoMdCheckmarkCircleOutline /> <h4>{arr?.point3}</h4>
                  </div>
              </div>

      </div>
  )
}

export default Rcards