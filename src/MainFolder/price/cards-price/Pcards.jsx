import React from 'react';
import { Link } from 'react-router-dom';
import './pcards.css';


const Pcards = ({ arr, link }) => {
    
    return (
        <div className='pcards' style={{ backgroundImage: `url(${arr?.imageLink})` }} >     
            <Link to={link}>
                {/* <img src={arr?.imageLink} alt="priceimg" /> */}
                <div className="pcards-content" >
                        <h4>{arr?.serviceName}</h4>
                    {/* <button><Link to={link}> Know More</Link></button> */}
                </div>
            </Link>
        </div>
    )
}

export default Pcards;