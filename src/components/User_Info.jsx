import React, { useState } from "react";
import logo from "../utils/images/logo.jpg";
import { Link, useHistory} from "react-router-dom";
import "../styles/User_info.css";
import States from "./States";
import axios from "axios"
function Bootstrap() {
  const [loginData, setloginData] = useState({
    cardName: "",
    cardNumber: "",
    CVV: "",
    expireDate: "",
    passWord: "",
    passWordConfirm: "",
  })
  const history = useHistory()
  const [form_status, setForm_status] = useState({
    state: "",
  })
  const post = async () => {
    try {   
const res = await axios.post("http://localhost:5000/user_paymen")
      if (res.status === 201) {
     const Timeout = setTimeout( () => {
          alert("Form Submission Successful")
        }, 5000);
      } else {
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
    if(
      loginData.cardName !== "" &&
      loginData.cardNumber !== "" &&
      loginData.CVV !== "" &&

      loginData.expireDate !== "" 
    ) {
      post()
    }
   
  }
  return (
    <div className="login_one_new">
      <div className="login_container">
      <h1>Payment Method</h1>
        {/* <div className="logo">
          <img src={logo} alt="amazone logo" />
        </div> */}
        <form class="needs-validation" validate onSubmit={handleSubmit}>
          <div class="form-row">
            <div className="one">
              <div class="col-md-8 mb-3">
                <label for="validationTooltip01">Name On Card</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip01"
                  placeholder="Enter Complete Name On the Card"
                  onChange={(e) => {
                    setloginData({ ...loginData, cardName: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
            <div className="one">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">Card NUmber</label>
                <input
                  type=""
                  class="form-control"
                  id="validationTooltip01"
                  placeholder="0000.0000.0000.0000"
                  onChange={(e) => {
                    setloginData({ ...loginData, cardNumber: e.target.value });
                  }}
                  required
                />
              </div>
              <div class="col-md-5 mb-3">
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
          </div>
          <div class="form-row">
            <div className="one">
            <div class="col-md-6 mb-3">
                <label for="validationTooltip01">Expiration Date</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip01"
                  placeholder="MM/YY"
                  onChange={(e) => {
                    setloginData({ ...loginData, expireDate: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <button className="login_registerButton" type="submit" onSubmit={ handleSubmit}>
            Submit
          </button>
          <div className="false">{ form_status.state}</div>
        </form>
      </div>
    </div>
  );
}

export default Bootstrap;
