import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../Form"


const Home = () => {

    let res = useContext(AppContext);

    async function fun() {
        // const val = res.values;
        // await res.setvalues({ ...val })
        res.setpage(1);
    }
    // console.log(res.values);

    return (
            <div className="card-part">
                <h1 className="hero">Experience the best car service in Bangalore</h1>
                <div className="follow">
                    <p>Get instant quotes and best service</p>
                    <Link to="/" className="linkcar" onClick={fun}>
                        <p id="choosecar">Choose car </p>
                        <h1>&#129171;</h1>
                    </Link>
                </div>
                <h3>250,000+ Happy Customers Served</h3>
            </div>
        )
}
export default Home