import React from 'react'
import banner from '../../../images/bannerimg.png'
import './com.css';

const Cardscommon = ({ arr }) => {
    return (
        <div className='com-cards'>
            
            <div className="com-card-img">
                <img src={banner} alt="simpleimg" />
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
                    <button>CheckOut</button>
                </div>
            </div>
        </div>
    )
}

export default Cardscommon