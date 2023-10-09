import React from 'react';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './pcards.css';

const Pcards = ({ arr, image, link }) => {
    return (
        <div className='pcards'>     
            <Link to={link}>
                <h3>{arr?.title}</h3>
                <div className="pcards-content">
                    <div className="point">
                        <FaMoneyCheckDollar /> <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nisi eaque voluptatum omnis illum non temporibus quia quam reprehenderit voluptatibus.</h4>
                    </div>
                    {/* <button><Link to={link}> Know More</Link></button> */}
                </div>
            </Link>
        </div>
    )
}

export default Pcards;