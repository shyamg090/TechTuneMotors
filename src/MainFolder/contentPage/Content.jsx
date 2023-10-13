import React, { useContext } from 'react'


import MainContent from './MainContent';
import Services from './Services';
import Batteries from './Batteries';
import Wash from './Wash';
import Others from './Others';
import Pricing from '../../OurservicesComponents/pricingPage/Pricing';

import { MainContext } from './ContentPage';


const Content = () => {

    let result = useContext(MainContext);

    let contentArr = [<MainContent />, <Services />, <Batteries />, <Wash />, <Others />, <Pricing />]

    return contentArr[result.conpage];
}

export default Content;