import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./InsuranceJoin.css";

class InsuranceJoin extends React.Component {
  state = {
    join_insurance: "",
    join_name: "",
    join_address: "",
    join_phone: "",
    join_period: "",
    join_price: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.targetname]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    const {
      join_insurance,
      join_name,
      join_address,
      join_phone,
      join_period,
      join_price,
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
                <input
                  className="join_input__insurance"
                  value={this.state.join_insurance}
                />
                <input
                  className="join_input__name"
                  value={this.state.join_name}
                />
                <input
                  className="join_input__address"
                  value={this.state.join_address}
                />
                <input
                  className="join_input__phone"
                  value={this.state.join_phone}
                />
                <input
                  className="join_input__period"
                  value={this.state.join_period}
                />
                <input
                  className="join_input__price"
                  value={this.state.join_price}
                />
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
