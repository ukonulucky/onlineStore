import React from "react";
import logo from "../utils/images/logo.jpg";
import { Link, useHistory } from "react-router-dom";
import "../styles/User_info.css";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

function Payment() {
  const dispatch = useDispatch();
  const user = (user_email) => {
    return {
      type: "ASSIGN_USER",
      payload: user_email,
    };
  };

  const history = useHistory();
  const [cookies, setCookies] = useCookies(["user"]);

  const [loginData, setloginData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    streetAddress: "",
    addressLine: "",
  });

  const [errorText, seterrorText] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    phoneError: "",
    stateError: "",
    countryError: "",
    cityError: "",
    zipCodeError: "",
    streetAddressError: "",
    addressLineError: "",
  });

  const post = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user_create",
        { loginData },
        { withCredentials: true }
      );
      const { data } = response;
      console.log(response);
      if (response.status !== 201) {
        seterrorText({
          emailError: data.email,
          passwordError: data.password,
        });
      }
      if (response.status === 201) {
        console.log(response.data);
        dispatch(user(response.data.email)) && history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginData.email === "") {
      seterrorText({
        ...errorText,
        emailError: "Email is required",
      });
    } else if (loginData.firstName === "") {
      seterrorText({
        ...errorText,
        firstNameError: "First Name is required",
      });
    } else if (loginData.lastName === "") {
      seterrorText({
        ...errorText,
        lastNameError: "Last Name is required",
      });
    } else if (loginData.phone === "") {
      seterrorText({
        ...errorText,
        phoneError: "Phone Number is required",
      });
    } else if (loginData.state === "") {
      seterrorText({
        ...errorText,
        stateError: "State is required",
      });
    } else if (loginData.city === "") {
      seterrorText({
        ...errorText,
        cityError: "City is required",
      });
    } else if (loginData.zipCode === "") {
      seterrorText({
        ...errorText,
        zipCodeError: "Zip code is required",
      });
    } else if (loginData.country === "") {
      seterrorText({
        ...errorText,
        countryError: "Country is required",
      });
    } else if (loginData.streetAddress === "") {
      seterrorText({
        ...errorText,
        streetAddressError: "Street Address is required",
      });
    } else if (loginData.addressLine === "") {
      seterrorText({
        ...errorText,
        addresslineError: "Address Line is required",
      });
    } else if (
      loginData.firstName !== "" &&
      loginData.lastName !== "" &&
      loginData.phone !== "" &&
      loginData.state !== "" &&
      loginData.email !== "" &&
      loginData.city !== "" &&
      loginData.zipCode !== "" &&
      loginData.streetAddress !== "" &&
      loginData.addressLine !== ""
    ) {
      post();
    }
  };
  return (
    <div className="login_one_new">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="amazone logo" />
        </div>
      </Link>
      <div className="login_container">
        <h1>Shipping address</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="one">
            <div className="one_first">
              <h5>First Name</h5>
              <input
                type="text"
                placeholder="Please enter your first name."
                onChange={(e) => {
                  setloginData({ ...loginData, firstName: e.target.value });
                }}
                required={true}
              />
              <div className="error">{errorText.firstNameError}</div>
            </div>
            <div className="one_second">
              <h5>Last Name</h5>
              <input
                type="text"
                placeholder="Please enter your last name."
                onChange={(e) => {
                  setloginData({ ...loginData, lastName: e.target.value });
                }}
                required={true}
              />
              <div className="error">{errorText.lastNameError}</div>
            </div>
          </div>
          <div className="one">
            <div className="one_first">
              <h5>Phone Number</h5>
              <input
                type="Number"
                placeholder="Please enter your Phone Number."
                onChange={(e) => {
                  setloginData({ ...loginData, phone: e.target.value });
                }}
                required={true}
              />
              <div className="error">{errorText.phoneError}</div>
            </div>
            <div className="one_second">
              <h5>Email</h5>
              <input
                type="email"
                placeholder="Please enter your Email."
                onChange={(e) => {
                  setloginData({ ...loginData, email: e.target.value });
                }}
                required={true}
              />
              <div className="error">{errorText.emailError}</div>
            </div>
          </div>
          <div className="one">
            <div className="one_first">
              <h5>Country</h5>
              <input
                type="text"
                placeholder="Please Choose Your Country."
                onChange={(e) => {
                  setloginData({ ...loginData, country: e.target.value });
                }}
                required={true}
              />
              <div className="error">{errorText.countryError}</div>
            </div>
            <div className="one_second">
              <h5>State</h5>
              <input
                type="password"
                placeholder="Please Choose Your State."
                onChange={(e) => {
                  setloginData({ ...loginData, state: e.target.value });
                }}
                required={true}
              />
              <div className="error">{errorText.stateError}</div>
            </div>
          </div>
          <div className="one">
            <div className="one_first">
              <h5>City</h5>
              <input
                type="text"
                placeholder="Please enter your city."
                onChange={(e) => {
                  setloginData({ ...loginData, city: e.target.value });
                }}
                required={true}
              />
              <div className="error">{errorText.cityError}</div>
            </div>
            <div className="one_second">
              <h5>Zip Code</h5>
              <input
                type="text"
                placeholder="Please enter your Zip Code."
                onChange={(e) => {
                  setloginData({ ...loginData, zipCode: e.target.value });
                }}
                required={true}
              />
              <div className="error">{errorText.zipCodeError}</div>
            </div>
           </div>
          <div className="two">
                  <h5>Street Address</h5>
          <input
            type="text"
            placeholder="Please enter your Street Address."
            onChange={(e) => {
              setloginData({ ...loginData, streetAddress: e.target.value });
            }}
            required={true}
          />
          <div className="error">{errorText.streetAddressError}</div>
          
                  </div>
                  <div className="two">
                  <h5>Address Line</h5>
          <input
            type="text"
            placeholder="Please enter your Address Line."
            onChange={(e) => {
              setloginData({ ...loginData, addressLine: e.target.value });
            }}
            required={true}
          />
          <div className="error">{errorText.addressLineError}</div>


                  </div>
         <button
            className="login_registerButton"
            type="submit"
            onClick={handleSubmit}
          >
            Submit And Proceed
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
