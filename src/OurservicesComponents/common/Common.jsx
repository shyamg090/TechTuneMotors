import React, { useContext } from 'react'
import Cardscommon from './cards/Cardscommon';
// import { array } from '../../MainFolder/information';
import { Link } from 'react-router-dom';
import './common.css';

import { BiArrowBack } from 'react-icons/bi';
import { MainContext } from '../../MainFolder/contentPage/ContentPage';


const Common = ({ array }) => {

  const result = useContext(MainContext);

  const backpage = ()=>{
    result.setconpage(0);
  }


  return (
    <div className='common'>

      <Link to={'/'} className="backButton" onClick={backpage} >
        <BiArrowBack />
      </Link>

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