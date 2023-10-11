import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../Form"
import { BiArrowBack } from 'react-icons/bi';

import image1 from '../../../images/a (1).png';

function Car() {
    let res = useContext(AppContext);

    function fun(event) {
        res.setvalues((prev) => {
            return { ...prev, car: event.target.name };
        })
        console.log(res.values);
        res.setpage(2);
    }

    function backFun() {
        res.setpage(0);
    }

    return (
        <div className="card-part">
            <div className="top-part">
                <h1 onClick={backFun} ><BiArrowBack /></h1>
                <h2>Enter Contact Information</h2>
            </div>
            <div className="logo-area">
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" name="benz"></img></Link>
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" name="maruthi"></img></Link>
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" name="toyota"></img></Link>
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" ></img></Link>
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" ></img></Link>
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" ></img></Link>
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" ></img></Link>
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" ></img></Link>
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" ></img></Link>
            </div>
        </div>
    )
}
export default Car