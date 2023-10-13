import React, { useContext } from 'react'
import { AppContext } from '../Form';
import { BiArrowBack } from 'react-icons/bi';

const Thankyou = () => {

    let res = useContext(AppContext);

    function backFun() {
        res.setpage(0);
    }

  return (
      <div className="card-part">
          <div className="top-part">
              <h1 onClick={backFun} ><BiArrowBack /></h1>
          </div>
          <div className="thankyou">
              <h3>Thank you</h3>
              <h4>Sucessfully Registered!!</h4>
              <h4>You'll get a Callback soon</h4>
          </div>
    </div>
  )
}

export default Thankyou;