import {useContext} from "react"
import Home from "../form/cards/Home"
import Car from "../form/cards/Car"
import Detail from "../form/cards/Detail"
import Servicetype from "./cards/Servicetype"

import { AppContext } from "../form/Form"
import Thankyou from "./cards/Thankyou"

const Control = () => {

    let res = useContext(AppContext);

    let pagess = [<Home />, <Car />, <Detail />, <Servicetype/>, <Thankyou /> ];

    return pagess[res.page]
  
}


export default Control