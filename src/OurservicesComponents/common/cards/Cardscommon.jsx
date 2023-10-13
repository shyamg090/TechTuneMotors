import React from 'react'
import './com.css';

const Cardscommon = ({ arr }) => {
    return (
        <div className='com-cards'>
            <div className="com-card-img">
                <img src={arr?.imageLink} alt="simpleimg" />
            </div>

            <div className="com-cards-content">
                <div className="point">
                    <h3>{arr?.title}</h3>
                </div>
                <div className="point">
                    <ul>
                        <li>{arr?.point1}</li>
                        <li>{arr?.point2}</li>
                        <li>{arr?.point3}</li>
                    </ul>
                </div>
                <div className="point2">
                    <h3>$500</h3> 
                </div>
            </div>
        </div>
    )
}

export default Cardscommon