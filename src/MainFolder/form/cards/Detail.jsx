import { useState,useContext } from "react"
import { useLocation, Link } from "react-router-dom"
import { AppContext } from "../Form";

function Detail() {

    let res = useContext(AppContext);

    function fun(event){
    
        res.setvalues((prev)=>{
            return{...prev,name:event.target.name.value,contact:event.target.contact.value}
        })

        console.log(res.values)
        event.preventDefault()
    }

    return (
        <div>
        <div className="con1">
            <h2 id="conta">Enter Contact Information</h2>
            <form onSubmit={fun}>
                <input type="text" placeholder="Name" name="name"></input>
                <input type="tel" placeholder="Contact" name="contact"></input>
                <input type="submit" id="sub" ></input>
            </form>
        </div>
    </div>)
}
export default Detail