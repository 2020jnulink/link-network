import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./MyInform.css";

class MyInform extends React.Component {
  state = {
    mypage_name: "",
    mypage_id: "",
    mypage_password: "",
    mypage_resident: "",
    mypage_address: "",
    mypage_phone: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.targetname]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    const {
      mypage_name,
      mypage_id,
      mypage_password,
      mypage_resident,
      mypage_address,
      mypage_phone,
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
              <div className="main_title__text">My Page</div>
            </div>
            <div className="myinform_main">
              <div className="myinform_main__que">
                <div className="myinform_que__name">NAME</div>
                <div className="myinform_que__id">ID</div>
                <div className="myinform_que__password">Password</div>
                <div className="myinform_que__resident">
                  Resident Registration Number
                </div>
                <div className="myinform_que__address">Address</div>
                <div className="myinform_que__phone">Phone Number</div>
              </div>
              <div className="myinform_main__var">
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
              </div>
              <div className="myinform_main__input">
                <input
                  className="myinform_input__name"
                  value={this.state.mypage_name}
                />
                <input
                  className="myinform_input__id"
                  value={this.state.mypage_id}
                />
                <input
                  className="myinform_input__password"
                  value={this.state.mypage_password}
                />
                <input
                  className="myinform_input__resident"
                  value={this.state.mypage_resident}
                />
                <input
                  className="myinform_input__address"
                  value={this.state.mypage_address}
                />
                <input
                  className="myinform_input__phone"
                  value={this.state.mypage_phone}
                />
              </div>
            </div>
            <div className="myinform_complete">
              <Link className="myinform_complete__btn" to="/mypage">
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

export default MyInform;
