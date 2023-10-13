import React from 'react'

import NavbarCon from '../navbar/NavbarCon';
import ServicesCon from '../services/ServicesCon';
import PriceCon from '../price/PriceCon';
import GaranteeCon from '../garantee/GaranteeCon';
import WorkingCon from '../working/WorkingCon';
import MechanicCon from '../mechanic/MechanicCon';
import RatingCon from '../ratings/RatingsCon';




const MainContent = () => {


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