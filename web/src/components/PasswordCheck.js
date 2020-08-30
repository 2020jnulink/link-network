import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./PasswordCheck.css";

class PasswordCheck extends React.Component {
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
              <div className="main_title__text">My Page</div>
            </div>
            <div className="password_check">
              <div className="password_check__text">Password Check :</div>
              <input className="password_check__input"></input>
            </div>
            <div className="password_btn">
              <Link className="password_check__btn" to="/mypage/myinform">
                Confirm
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

export default PasswordCheck;
