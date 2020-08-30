import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./LogIn.css";

class LogIn extends React.Component {
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
              <div className="main_title__text">Login</div>
            </div>
            <div className="login_main">
              <div className="login_main__que">
                <div className="login_que__id">ID</div>
                <div className="login_que__password">Password</div>
              </div>
              <div className="login_main__var">
                <div className="login_var__var">:</div>
                <div className="login_var__var">:</div>
              </div>
              <div className="login_main__input">
                <div className="login_input__id" />
                <div className="login_input__password" />
              </div>
            </div>
            <div className="login_btns">
              <Link className="login_signup__btn" to="/signup">
                Sign Up
              </Link>
              <div className="login_login__btn">Log In</div>
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

export default LogIn;
