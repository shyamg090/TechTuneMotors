import React from 'react'
import Rcards from './cards-rating/Rcards'
import { array } from '../../information';
import './ratings.css';


const Ratings = () => {
    return (
        <div id='ratings'>
            <h1>Our Ratings</h1>
            <div className="rcard-row">
                <div className="row1">
                    <Rcards key={array[0].title} arr={array[0]} link={'/price'} />
                    <Rcards key={array[1].title} arr={array[1]} />
                    <Rcards key={array[0].title} arr={array[0]} link={'/price'} />
                </div>
                <div className="row1">
                    <Rcards key={array[0].title} arr={array[0]} link={'/price'} />
                    <Rcards key={array[1].title} arr={array[1]} />
                    <Rcards key={array[0].title} arr={array[0]} link={'/price'} />
                </div>
            </div>
        </div>
    )
}

export default Ratings