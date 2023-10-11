import {useContext} from "react"
import Home from "../form/cards/Home"
import Car from "../form/cards/Car"
import Detail from "../form/cards/Detail"

import { AppContext } from "../form/Form"

const Control = () => {

    let res = useContext(AppContext);

    let pagess = [<Home />, <Car />, <Detail />];

    return pagess[res.page]
  
}


export default Control