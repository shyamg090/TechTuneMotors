import React from 'react'
import Rcards from './cards-rating/Rcards'
import { ratingArr } from '../information';
import './ratings.css';


const Ratings = () => {
    return (
        <div id='ratings'>
            <h1>Our Ratings</h1>
            <div className="rcard-row">
                <div className="row1">
                    <Rcards key={1} arr={ratingArr[0]}  />
                    <Rcards key={2} arr={ratingArr[1]} />
                    <Rcards key={3} arr={ratingArr[2]} />
                </div>
                <div className="row1">
                    <Rcards key={4} arr={ratingArr[0]}  />
                    <Rcards key={5} arr={ratingArr[1]} />
                    <Rcards key={6} arr={ratingArr[2]}  />
                </div>
            </div>
        </div>
    )
}

export default Ratings