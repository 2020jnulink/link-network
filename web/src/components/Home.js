import React from "react";
import "./Home.css";
import home_img from "./img/home.jpg";
import Navigation_var from "./Navigation_var";
import { Link } from "react-router-dom";



class Home extends React.Component {

  //props를 생성한다
    constructor(props) {
      super(props);
      this.state = {
        title: null
      }
    }

  componentDidMount() {
      fetch('http://localhost:3001/api')
        .then(res => res.json())
        .then(data => this.setState({title: data.title}));
  }


  render() {
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
            <div>{this.state.title? <h1>{this.state.title} </h1>:<h1>loading... </h1>}</div>
          </div>
          <div className="title_underline"></div>
          <div className="home_main">
            <div className="home_img__center">
              <img className="home_img" src={home_img} alt="img"></img>
            </div>
            <div className="home_main__link">
              <Link className="gotobuy_btn" to="/shop">
                <div className="gotobuy">Go To Buy</div>
              </Link>
              <Link className="insurance_btn" to="/insurance">
                <div className="gotobuy">Insurance</div>
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

export default Home;
