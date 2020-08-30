import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./InsuranceJoin.css";

class InsuranceJoin extends React.Component {
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
              <div className="main_title__text">Insurance Applicance</div>
            </div>
            <div className="join_main">
              <div className="join_main__que">
                <div className="join_que__insurance">Insurance</div>
                <div className="join_que__name">NAME</div>
                <div className="join_que__address">Address</div>
                <div className="join_que__phone">Phone Number</div>
                <div className="join_que__period">Contract Period</div>
                <div className="join_que__price">Price</div>
              </div>
              <div className="join_main__var">
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
              </div>
              <div className="join_main__input">
                <div className="join_input__insurance" />
                <div className="join_input__name" />
                <div className="join_input__address" />
                <div className="join_input__phone" />
                <div className="join_input__period" />
                <div className="join_input__price" />
              </div>
            </div>
            <div className="join_complete">
              <Link className="join_complete__btn" to="/shop/product/payment">
                NEXT
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

export default InsuranceJoin;
