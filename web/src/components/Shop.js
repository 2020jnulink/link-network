import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./Shop.css";

class Shop extends React.Component {
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
              <div className="main_title__text">Search</div>
              <input></input>
            </div>
            <Link className="conduct_list" to="/shop/product">
              <div className="conduct_list__text">img</div>
            </Link>
          </div>
        </body>
        <div className="nav_var">
          <Navigation_var />
        </div>
      </div>
    );
  }
}

export default Shop;
