import React, { useState } from "react";
import logo from "../utils/images/paymentLogo.jpg";
import logo2 from "../utils/images/payU.jpg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { MutatingDots } from 'react-loader-spinner'
import { useHistory, useParams} from "react-router-dom";
import "../styles/User_info.css";
import axios from "axios"
function Userinfo() {
  const { id } = useParams()
  const [loginData, setloginData] = useState({
    cardName: "",
    cardNumber: "",
    CVV: "",
    expireDate: "",
    email:id
    
  })
  const [loader, setLoader] = useState(false)
  const history = useHistory()
  const [form_status, setForm_status] = useState({
    state: ""
  })
 
  const post = async () => {
    try {   
const res = await axios.post("http://localhost:5000/user_payment",loginData)
      if (res.status === 201) {
       
        history.push("/")
        setLoader(false)
        alert("Form Submission Successful")
          
        setForm_status({state:"Form Submission Failed Please Retry"})
    }
    } catch (err) {
      console.log(err)
       history.push("/payment_platform")
      setForm_status({ state: "Form Submission Failed Please Retry" })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)
    
    if(
      loginData.cardName !== "" &&
      loginData.cardNumber !== "" &&
      loginData.CVV !== "" &&
      loginData.expireDate !== "" 
    ) {
      post()
    }
   
  }
  return (loader ? <div className="spiner">
    <MutatingDots
    heigth="100"
    width="100"
    color='green'
    ariaLabel='loading'
  />
  </div>:(
    <div className="login_one">
      <div className="login_container">
      <h1>Payment Details</h1>
        <div className="logo2">
          <img src={logo} alt="logo" />
        </div>
        <form class="needs-validation" validate onSubmit={handleSubmit}>
        
            <div className="one">
              <div class="one_first">
                <label for="validationTooltip01">Name On Card</label>
                <input
                  type="text"
                  class="form-control name"
                  id="validationTooltip01"
                  placeholder="Enter Complete Name On the Card"
                  onChange={(e) => {
                    setloginData({ ...loginData, cardName: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
            <div className="one ">
              <div class="one_first cardNumber">
                <label for="validationTooltip01">Card Number</label>
                <input
                  type="Number"
                  class="form-control cardNumber"
                  id="validationTooltip01"
                  placeholder="0000.0000.0000.0000"
                  onChange={(e) => {
                    setloginData({ ...loginData, cardNumber: e.target.value });
                  }}
                  required
                />
              </div>
              <div class="one_second">
                <label for="validationTooltip02">CVV</label>
                <input
                  type="Number"
                  class="form-control"
                  id="validationTooltip02"
                  placeholder="&#9679;&#9679;&#9679;"
                  onChange={(e) => {
                    setloginData({ ...loginData, CVV: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
     
            <div className="one">
            <div class="one_first expire">
                <label for="validationTooltip01">Expiration Date</label>
                <input
                  type="text"
                  class="form-control expire"
                  id="validationTooltip01"
                  placeholder="MM/YY"
                  onChange={(e) => {
                    setloginData({ ...loginData, expireDate: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
          <button className="login_registerButton" type="submit" onSubmit={ handleSubmit}>
            Submit
          </button>
          <div className="false">{ form_status.state}</div>
          </form>
          <div className="logo3">
          <img src={logo2} alt="amazone logo" />
          </div>
          <small>PayU is the secure payment provider for Superb-clothings.com</small>
      </div>
      
    </div>)
  );
}

export default Userinfo;
