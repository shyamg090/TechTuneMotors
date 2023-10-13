import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './pcards.css';
import { MainContext } from '../../contentPage/ContentPage';


const Pcards = ({ arr, page }) => {

    const result = useContext(MainContext);

    const changepage = () => {
        result.setconpage(page);
    }

    return (

        <div className='pcards' style={{ backgroundImage: `url(${arr?.imageLink})` }} >     
                <Link to={'/'} onClick={changepage}>
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