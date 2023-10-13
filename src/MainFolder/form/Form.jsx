import { useState, createContext } from "react"
import { Routes, Route } from "react-router-dom"

import './formstyle.css';

// import Home from "../form/cards/Home"
// import Car from "../form/cards/Car"
// import Detail from "../form/cards/Detail"
import Control from "./Control"


const AppContext = createContext()

const Form = () => {

    let [page, setpage] = useState(0)
    let [values, setvalues] = useState({})

    return (
        <div>
            <AppContext.Provider value={{ page, setpage, values, setvalues}}>
                <Routes>
                    <Route path="/" element={<Control />} />
                </Routes>
            </AppContext.Provider>
        </div>)
}

export { Form, AppContext }