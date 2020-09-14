import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./SignUp.css";

class SignUp extends React.Component {
  state = {
    signup_name: "",
    signup_id: "",
    signup_password: "",
    signup_resident: "",
    signup_address: "",
    signup_phone: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.targetname]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    const {
      signup_name,
      signup_id,
      signup_password,
      signup_resident,
      signup_address,
      signup_phone,
    } = this.state;
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
                <input
                  className="signup_input__name"
                  value={this.state.signup_name}
                  onChange={this.handleChange}
                />
                <input
                  className="signup_input__id"
                  value={this.state.signup_id}
                  onChange={this.handleChange}
                />
                <input
                  className="signup_input__password"
                  value={this.state.signup_password}
                  onChange={this.handleChange}
                />
                <input
                  className="signup_input__resident"
                  value={this.state.signup_resident}
                  onChange={this.handleChange}
                />
                <input
                  className="signup_input__address"
                  value={this.state.signup_address}
                  onChange={this.handleChange}
                />
                <input
                  className="signup_input__phone"
                  value={this.state.signup_phone}
                  onChange={this.handleChange}
                />
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
