import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../Form"


const Home = () => {

    let res = useContext(AppContext);

    function fun() {
        res.setpage(1);
    }

    return (
            <div className="card-part">
                <h1 className="hero">Experience the best car service in Bangalore</h1>
                <div className="follow">
                    <p id="getc">Get instant quotes and best service</p>
                    <div className="chooseli">
                        <Link to="/" className="linkcar" onClick={fun}><p id="choosecar">Choose car </p><div>&#129171;</div></Link>
                    </div>
                </div>
                <h3>250,000+ Happy Customers Served</h3>
            </div>
        )
}
export default Home