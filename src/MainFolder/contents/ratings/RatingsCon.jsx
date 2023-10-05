import React from 'react'
import Rcards from './cards-rating/Rcards'
import { array } from '../../information';
import './ratings.css';


const Ratings = () => {
    return (
        <div id='ratings'>
            <h1>Our Customer Reviews</h1>
            <div className="rating-slider">
                <Rcards key={array[0].title} arr={array[0]} />
                <Rcards key={array[0].title} arr={array[0]} />
                <Rcards key={array[0].title} arr={array[0]} />
            </div>
            <div className="rating-slider">
                <Rcards key={array[0].title} arr={array[0]} />
                <Rcards key={array[0].title} arr={array[0]} />
                <Rcards key={array[0].title} arr={array[0]} />
            </div>
        </div>
    )
}

export default Ratings