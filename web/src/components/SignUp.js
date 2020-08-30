import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./SignUp.css";

class SignUp extends React.Component {
  render() {
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="main">
            <div className="main_title">
              <div className="main_title__text">Sign Up</div>
            </div>
            <div className="signup_main">
              <div className="signup_main__que">
                <div className="signup_que__name">NAME</div>
                <div className="signup_que__id">ID</div>
                <div className="signup_que__password">Password</div>
                <div className="signup_que__resident">
                  Resident Registration Number
                </div>
                <div className="signup_que__address">Address</div>
                <div className="signup_que__phone">Phone Number</div>
              </div>
              <div className="signup_main__var">
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
              </div>
              <div className="signup_main__input">
                <div className="signup_input__name" />
                <div className="signup_input__id" />
                <div className="signup_input__password" />
                <div className="signup_input__resident" />
                <div className="signup_input__address" />
                <div className="signup_input__phone" />
              </div>
            </div>
            <div className="signup_complete">
              <Link className="signup_complete__btn" to="/login">
                Sign Up
              </Link>
            </div>
          </div>
        </body>
        <div className="nav_var">
          <Navigation_var />
        </div>
      </div>
    );
  }
}

export default SignUp;
