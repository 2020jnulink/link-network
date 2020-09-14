import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation_var.css";

class Navigation_var extends Component {
  state = {
    search: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.targetname]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    const { search } = this.state;
    return (
      <div className="navigation">
        <div className="link">
          <Link className="nav_signup" to="/signup">
            Sign Up{" "}
          </Link>{" "}
          <Link className="nav_login" to="/login">
            Log In{" "}
          </Link>{" "}
          <Link className="nav_mypage" to="/mypage">
            My Page{" "}
          </Link>{" "}
          <Link className="nav_home" to="/">
            Home{" "}
          </Link>{" "}
          <Link className="nav_shop" to="/shop">
            SHOP{" "}
          </Link>{" "}
          <Link className="nav_insurance" to="/insurance">
            INSURANCE{" "}
          </Link>{" "}
        </div>{" "}
        <div className="nav_search">
          <input
            className="search_input"
            value={this.state.search}
            onChange={this.handleChange}
            type="text"
            name="search"
          />
          <div className="search_text"> Search </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Navigation_var;
