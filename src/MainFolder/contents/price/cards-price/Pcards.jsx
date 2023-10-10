import React from 'react';
import { Link } from 'react-router-dom';
import './pcards.css';


const Pcards = ({ arr , link }) => {
    return (
        <div className='pcards'>     
            <Link to={link}>
                <img src={arr?.imageLink} alt="priceimg" />
                <div className="pcards-content">
                    <div className="point">
                        <h4>{arr?.serviceName}</h4>
                    </div>
                    {/* <button><Link to={link}> Know More</Link></button> */}
                </div>
            </Link>
        </div>
    )
}

export default Pcards;