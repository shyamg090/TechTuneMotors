import React from 'react'
import Cardscommon from './cards/Cardscommon';
// import { array } from '../../MainFolder/information';
import { Link } from 'react-router-dom';
import './common.css';

const Common = ({ array }) => {
  
  // console.log(array);

  return (
    <div className='common'>

      <div className="back">
        <Link to={'/'}> <h1>Home</h1> </Link>
      </div>

      <div className="com-card-row">
        <Cardscommon key={array[0].title} arr={array[0]} />
        <Cardscommon key={array[1].title} arr={array[1]} />
        <Cardscommon key={array[2].title} arr={array[2]} />
        {/* <Cardscommon key={array[3].title} arr={array[3]} /> */}
      </div>
      
    </div>
  )
}

export default Common;