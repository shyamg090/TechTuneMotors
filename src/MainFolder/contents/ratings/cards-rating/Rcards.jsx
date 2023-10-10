import React from 'react'
import './rcards.css';


const Rcards = ({ arr }) => {
    return (
        <div className='rcards'>
            <img src={arr.image} alt="cutomerimage" />
                <div className="rcards-content">
                    <div className="r-point">
                    <h2>{ arr.name}</h2> 
                    <h4> {arr.review} </h4>
                    </div>
                </div>
        </div>
    )
}

export default Rcards