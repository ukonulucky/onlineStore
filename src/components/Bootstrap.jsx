import React, { useState } from "react";
import logo from "../utils/images/logo.jpg";
import { Link,useHistory} from "react-router-dom";
import "../styles/shippingDetails.css";
import Countries from "./Countries";
import States from "./States";
function Bootstrap() {
  const [loginData, setloginData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    zipCode: "",
    streetAddress: "",
    addressLine: "",
  })
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      loginData.firstName !== "" &&
      loginData.lastName !== "" &&
      loginData.phoneNumber !== "" &&
      loginData.country !== "" &&
      loginData.email !== "" &&
      loginData.city !== "" &&
      loginData.zipCode !== "" &&
      loginData.streetAddress !== "" &&
      loginData.addressLine !== ""
    ) {
      history.push(`/payment_platform/${loginData.email}`)

    }
   
  }
  return (
    <div className="shipping">
       <div className="login_one_new">
      <Link  className= "logo_cont" to="/">
        <div className="logoShipping">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="login_container_shipping">
        <h1>Shipping address</h1>
        <form className="needs-validation form_new" validate onSubmit={handleSubmit}>
            <div className="one_new">
              <div className="first_child">
                <label for="validationTooltip01">First name</label>
                <input
                  type="text"
                  className="form-control text"
                  id="validationTooltip01"
                  placeholder="Enter Your First Name"
                  onChange={(e) => {
                    setloginData({ ...loginData, firstName: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="second_child">
                <label for="validationTooltip02">Last name</label>
                <input className="input_new"
                  type="text"
                  className="form-control text"
                  id="validationTooltip02"
                  placeholder="Enter Your Last name"
                  onChange={(e) => {
                    setloginData({ ...loginData, lastName: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
            <div className="one_new">
              <div class="first_child">
                <label for="validationTooltip01">Phone Number</label>
                <input className="input_new text"
                  type="text"
                  className="form-control"
                  id="validationTooltip01"
                  placeholder="Enter Phone Number"
                  onChange={(e) => {
                    setloginData({ ...loginData, phoneNumber: e.target.value });
                  }}
                  required
                />
              </div>
              <div class="second_child">
                <label for="validationTooltip02"> Email </label>
                <input className="input_new text"
                  type="email"
                  class="form-control"
                  id="validationTooltip02"
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setloginData({ ...loginData, email: e.target.value });
                  }}
                  required
                />
              </div>
         
          </div>
         
              <div class="one_new_city">
                <label for="validationTooltip04">Country</label>
              <div className="countries">
              <Countries loginData={ loginData } loginData1={ loginData.country } setloginData={ setloginData } />
                </div>
                <div class="invalid-tooltip">Please provide a valid state.</div>
              </div>
             
            
              <div className="one_new_city">
                <label for="validationTooltip03">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip03"
                  placeholder="Enter Your City"
                  onChange={(e) => {
                    setloginData({ ...loginData, city: e.target.value });
                  }}
                  required
                />
                <div class="invalid-tooltip">Please provide a valid city.</div>
            </div>
            
              <div class="one_new_city">
                <label for="validationTooltip05">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip05"
                  placeholder="Enter Zipcode"
                  onChange={(e) => {
                    setloginData({ ...loginData, zipCode: e.target.value });
                  }}
                  required
                />
                <div class="invalid-tooltip">Please provide a valid zip.</div>
              </div>
            
            <div className="one_new_city">
                <label for="validationTooltip05">Street Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip05"
                  placeholder="Enter Address"
                  onChange={(e) => {
                    setloginData({ ...loginData, streetAddress: e.target.value });
                  }}
                  required
                />
            </div>

            <div className="one_new_city">
                <label for="validationTooltip05">Address Line</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip05"
                  placeholder="Enter Address Line"
                  onChange={(e) => {
                    setloginData({ ...loginData, addressLine: e.target.value });
                  }}
                  required
                />
                <div class="invalid-tooltip">Please provide a valid zip.</div>
         
            </div>
        
          <button  className="Button_new" type="submit" onSubmit={ handleSubmit}>
            Proceed
          </button>
        </form>
      </div>
    </div>
      
    </div>
   
  );
}

export default Bootstrap;
