import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../Form"
import { BiArrowBack } from 'react-icons/bi';

import image1 from '../../../images/a (1).png';
import image2 from '../../../images/a (2).png';
import image3 from '../../../images/a (3).png';
import image4 from '../../../images/a (4).png';
import image5 from '../../../images/a (5).png';
import image6 from '../../../images/a (6).png';
import image7 from '../../../images/a (7).png';


function Car() {
    let res = useContext(AppContext);

    async function fun(event) {
        await res.setvalues((prev) => {
            return { ...prev, car : event.target.name };
        })
        res.setpage(2);
    }
    // console.log(res.values);

    function backFun() {
        res.setpage(0);
    }

    return (
        <div className="card-part">
            <div className="top-part">
                <h1 onClick={backFun} ><BiArrowBack /></h1>
                <h2>Select Car</h2>
            </div>
            <div className="logo-area">
                <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" name="bently"></img></Link>
                <Link to="/" ><img className="logo-img" src={image2} onClick={fun} alt="imagelogo" name="audi"></img></Link>
                <Link to="/" ><img className="logo-img" src={image3} onClick={fun} alt="imagelogo" name="renault"></img></Link>
                <Link to="/" ><img className="logo-img" src={image4} onClick={fun} alt="imagelogo" name="mitsubishi"></img></Link>
                <Link to="/" ><img className="logo-img" src={image5} onClick={fun} alt="imagelogo" name="suzuki"></img></Link>
                <Link to="/" ><img className="logo-img" src={image6} onClick={fun} alt="imagelogo" name="honda"></img></Link>
                <Link to="/" ><img className="logo-img" src={image7} onClick={fun} alt="imagelogo" name="toyota"></img></Link>
                {/* <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" ></img></Link> */}
                {/* <Link to="/" ><img className="logo-img" src={image1} onClick={fun} alt="imagelogo" ></img></Link> */}
            </div>
        </div>
    )
}
export default Car