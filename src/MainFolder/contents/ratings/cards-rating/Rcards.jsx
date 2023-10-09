import React from 'react'
import './rcards.css';

const Rcards = ({ arr, image, link }) => {
    return (
        <div className='rcards'>
                <h3>{arr?.title}</h3>
                <div className="rcards-content">
                    <div className="point">
                    <h1>hello world</h1> 
                    <h4>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum eum eos recusandae fugit, doloremque iure sint natus ab alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ipsam dolore sunt dolor odit unde sit obcaecati. Provident, commodi culpa? ipsum dolor, sit amet consectetur adipisicing elit. Rem nisi eaque voluptatum omnis illum non temporibus quia quam reprehenderit voluptatibus.</h4>
                    </div>
                </div>
        </div>
    )
}

export default Rcards