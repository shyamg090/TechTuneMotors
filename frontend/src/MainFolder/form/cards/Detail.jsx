import { useContext } from "react"
import { AppContext } from "../Form";

import { BiArrowBack } from 'react-icons/bi';

function Detail() {

    let res = useContext(AppContext);

    async function fun(event) {
        await res.setvalues((prev) => {
            return { ...prev, name: event.target.name.value, contact: event.target.contact.value, address: event.target.address.value };
        })
        res.setpage(3);
    }

    // console.log(res.values);

    function backFun() {
        res.setpage(1);
    }

    return (
        <div className="card-part">
            <div className="top-part">
                <h1 onClick={backFun} ><BiArrowBack /></h1>
                <h2>Enter Contact Information</h2>
            </div>
            <form className="form-div" onSubmit={fun} >
                <input type="text" placeholder="Name" name="name" required ></input>
                <input type="tel" placeholder="Contact" name="contact" required></input>
                <input type="text" placeholder="Address" name="address" required ></input>
                <input type="submit" value='Next'  id="sub"></input>
            </form>
        </div>
    )
}
export default Detail