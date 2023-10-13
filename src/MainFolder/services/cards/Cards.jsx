import React, {useContext } from 'react';
import './cards.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { MainContext } from '../../contentPage/ContentPage';



const Cards = ({ arr, page }) => {

  let result = useContext( MainContext);

  async function changepage() {
    result.setconpage(page);
    console.log(result.conpage);
  }

  return (
    <div className='cards' style={{ backgroundImage: `url(${arr?.imageLink})` }} >
      <Link to='/' onClick={changepage} >
        <h3>{arr?.title}</h3>
        <div className="cards-content">
          <div className="point">
            <IoMdCheckmarkCircleOutline /> <h4>{arr?.point1}</h4>
          </div>
          <div className="point">
            <IoMdCheckmarkCircleOutline /> <h4>{arr?.point2}</h4>
          </div>
          <div className="point">
            <IoMdCheckmarkCircleOutline /> <h4>{arr?.point3}</h4>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default Cards