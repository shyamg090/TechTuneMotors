import { useContext } from "react"
import { AppContext } from "../Form";

import { BiArrowBack } from 'react-icons/bi';

function Detail() {

    let res = useContext(AppContext);

    function fun(event){
    
        res.setvalues((prev)=>{
            return{...prev, name:event.target.name.value, contact:event.target.contact.value}
        })

        console.log(res.values);
        event.preventDefault()
    }

    function backFun(){
        res.setpage(1);
    }

    return (
        <div className="card-part">
            <div className="top-part">
                <h1 onClick={backFun} ><BiArrowBack /></h1>
                <h2>Enter Contact Information</h2>
            </div>
            <form className="form-div" onSubmit={()=> fun()}>
                <input type="text" placeholder="Name" name="name"></input>
                <input type="tel" placeholder="Contact" name="contact"></input>
                <input type="submit" id="sub" ></input>
            </form>
        </div>
    )
}
export default Detail