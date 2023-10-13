import React, { useContext } from 'react'

import NavbarCon from '../navbar/NavbarCon';
import ServicesCon from '../services/ServicesCon';
import PriceCon from '../price/PriceCon';
import GaranteeCon from '../garantee/GaranteeCon';
import WorkingCon from '../working/WorkingCon';
import MechanicCon from '../mechanic/MechanicCon';
import RatingCon from '../ratings/RatingsCon';


import { MainContext } from './ContentPage';


const MainContent = () => {

    const result = useContext(MainContext);
    console.log("maincontent: " + result.conpage);

    return (
        <>
            <NavbarCon />
            <ServicesCon />
            <PriceCon />
            <GaranteeCon />
            <WorkingCon />
            <MechanicCon />
            <RatingCon />
        </>
    )
}

export default MainContent