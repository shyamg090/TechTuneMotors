import { useContext } from "react"
import { AppContext } from "../Form";
import axios from 'axios';

import { BiArrowBack } from 'react-icons/bi';

function Detail() {

    let res = useContext(AppContext);

    async function fun(event) {
        await res.setvalues((prev) => {
            axios.post('http://localhost:4000/form', {
                ...prev
                , name: event.target.name.value,
                contact : event.target.contact.value
            });
            return {
                ...prev
                , name: event.target.name.value,
                contact: event.target.contact.value
            }
        })

    }

    // async function addtodb(event) {
    //     event.preventDefault();
    //     await axios.post('http://localhost:4000/form', res.values);
    // }

    console.log(res.values);

    function backFun() {
        res.setpage(1);
    }

    return (
        <div className="card-part">
            <div className="top-part">
                <h1 onClick={backFun} ><BiArrowBack /></h1>
                <h2>Enter Contact Information</h2>
            </div>
            <form className="form-div" onSubmit={fun}>
                <input type="text" placeholder="Name" name="name"  ></input>
                <input type="tel" placeholder="Contact" name="contact" ></input>
                <input type="submit" id="sub" ></input>
            </form>
        </div>
    )
}
export default Detail