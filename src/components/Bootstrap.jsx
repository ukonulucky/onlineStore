import React, { useState } from "react";
import logo from "../utils/images/logo.jpg";
import { Link,useHistory} from "react-router-dom";
import "../styles/User_info.css";
import Countries from "./Countries";
import States from "./States";
function Bootstrap() {
  const [loginData, setloginData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
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
      loginData.state !== "" &&
      loginData.email !== "" &&
      loginData.city !== "" &&
      loginData.zipCode !== "" &&
      loginData.streetAddress !== "" &&
      loginData.addressLine !== ""
    ) {
      console.log(loginData)
      history.push("/payment_platform")

    }
   
  }
  return (
    <div className="login_one_new">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="amazone logo" />
        </div>
      </Link>
      <div className="login_container">
        <h1>Shipping address</h1>
        <form class="needs-validation" validate onSubmit={handleSubmit}>
          <div class="form-row">
            <div className="one">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip01"
                  placeholder="Enter Your First Name"
                  onChange={(e) => {
                    setloginData({ ...loginData, firstName: e.target.value });
                  }}
                  required
                />
              </div>
              <div class="col-md-5 mb-3">
                <label for="validationTooltip02">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip02"
                  placeholder="Enter Your Last name"
                  onChange={(e) => {
                    setloginData({ ...loginData, lastName: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
            <div className="one">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip01"
                  placeholder="Enter Your Phone Number"
                  onChange={(e) => {
                    setloginData({ ...loginData, phoneNumber: e.target.value });
                  }}
                  required
                />
              </div>
              <div class="col-md-5 mb-3">
                <label for="validationTooltip02"> Email </label>
                <input
                  type="email"
                  class="form-control"
                  id="validationTooltip02"
                  placeholder="Enter Your Last name"
                  onChange={(e) => {
                    setloginData({ ...loginData, email: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-row">
            <div className="one">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip04">Country</label>
                <Countries loginData={ loginData } loginData1={ loginData.country } setloginData={ setloginData } />
                <div class="invalid-tooltip">Please provide a valid state.</div>
              </div>
              <div class="col-md-5 mb-3 ">
                <label for="validationTooltip04">State</label>
                <States loginData ={ loginData } setloginData={ setloginData }/>
                <div class="invalid-tooltip">Please provide a valid state.</div>
              </div>
            </div>
            <div className="one">
              <div class="col-md-6 mb-3">
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
              <div class="col-md-5 mb-3">
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
            </div>
            <div className="one">
              <div class="col-md-6 mb-2">
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
            </div>
            <div className="one">
              <div class="col-md-6 mb-3">
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
            </div>
          </div>
          <button  className="login_registerButton" type="submit" onSubmit={ handleSubmit}>
            Proceed
          </button>
         
        </form>
      </div>
    </div>
  );
}

export default Bootstrap;
