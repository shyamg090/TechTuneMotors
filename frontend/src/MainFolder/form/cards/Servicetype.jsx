import React from 'react'
import { useContext } from "react"
import { AppContext } from "../Form";
import axios from 'axios';

import { BiArrowBack } from 'react-icons/bi';


const Servicetype = () => {
    let res = useContext(AppContext);

    async function fun(event) {
        event.preventDefault();

        await res.setvalues((prev) => {
            axios.post('https://techtunemotors-backend.onrender.com/form', {
                ...prev
                , date: event.target.date.value
                , type: event.target.service.value,
                price: event.target.price.value
            });
            return {
                ...prev
                , date : event.target.date.value
                , type: event.target.service.value,
                price: event.target.price.value
            }
        })

        await res.setpage(4);

    }


    // console.log(res.values);

    function backFun() {
        res.setpage(2);
    }

    return (
        <div className="card-part">
            <div className="top-part">
                <h1 onClick={backFun} ><BiArrowBack /></h1>
                <h2>Servive & Price Type</h2>
            </div>
            <form className="form-div" onSubmit={fun}>
                <input type="date" name="date" required />
                {/* <label>Service Type:</label> */}
                <select name="service" id="ser" required>
                    <option value="Detailing">Detailing</option>
                    <option value="Washing">Washing</option>
                    <option value="Battery">Battery</option>
                    <option value="others">others</option>
                </select>
                <select name="price" id="pri" required>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                </select>
                <input type="submit"  value='Submit' id="sub" ></input>
            </form>
        </div>
    )
}

export default Servicetype