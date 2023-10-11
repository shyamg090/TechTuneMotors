import { useContext } from "react"
import {  Link } from "react-router-dom"
import { AppContext } from "../Form"

import image1 from '../../../images/a (1).png';

function Car() {
    let res = useContext(AppContext);

    function fun(event) {
        res.setpage(2)
        res.setvalues((prev) => {
            return { ...prev, car: event.target.name }
        })
    }

    return (
        <div>
            <div className="con1">
                <h2>Choose car</h2>
                <div className="logo-area">
                    <Link to="/" ><img className="logo" src={image1} onClick={fun}  alt="imagelogo" name="benz"></img></Link>
                    <Link to="/" ><img className="logo" src={image1} onClick={fun}  alt="imagelogo" name="maruthi"></img></Link>
                    <Link to="/" ><img className="logo" src={image1} onClick={fun}  alt="imagelogo" name="toyota"></img></Link>
                    <Link to="/" onClick={fun}><img className="logo" src={image1} alt="imagelogo" ></img></Link>
                    <Link to="/" onClick={fun}><img className="logo" src={image1} alt="imagelogo" ></img></Link>
                    <Link to="/" onClick={fun}><img className="logo" src={image1} alt="imagelogo" ></img></Link>
                </div>
            </div>
        </div>)
}
export default Car