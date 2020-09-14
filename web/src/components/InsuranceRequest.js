import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./InsuranceRequest.css";

class InsuranceRequest extends React.Component {
  state = {
    request_type: "",
    request_date: "",
    request_description: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.targetname]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    const { request_type, request_date, request_description } = this.state;
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="main">
            <div className="main_title">
              <div className="main_title__text">Insurance Request</div>
            </div>
            <div className="request_main">
              <div className="request_main__que">
                <div className="request_que__type">유형</div>
                <div className="request_que__date">사건 날짜</div>
                <div className="request_que__description">사건 경위 작성</div>
              </div>
              <div className="request_main__var">
                <div className="request_var__var">:</div>
                <div className="request_var__var">:</div>
                <div className="request_var__var">:</div>
              </div>
              <div className="request_main__input">
                <input
                  className="request_input__type"
                  value={this.state.request_type}
                />
                <input
                  className="request_input__date"
                  value={this.state.request_date}
                />
                <input
                  className="request_input__description"
                  value={this.state.request_description}
                />
              </div>
            </div>
            <div className="request_complete">
              <Link
                className="request_complete__btn"
                to="/insurance/requestcomplete"
              >
                Apply
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

export default InsuranceRequest;
