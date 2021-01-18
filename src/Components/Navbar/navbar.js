import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/hu2logo.png";
import HealthyU from "../../images/HealthyU.png";
import tagline from "../../images/hutagline.png";
import Login from "../Login/login";
import axios from "axios";
import onClickOutside from "react-onclickoutside";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuShow: false,
      memberShow:false
    };
  }

  componentDidMount(){

    axios.get("/api/member").then(purchases => {
      this.setState({ mypurchases: purchases.data[0]});
    });
  }

  showMenu() {
    let menuBtn = document.querySelector(".menu-btn");
    this.setState({
      menuShow: !this.state.menuShow,
    });
    if (!this.state.menuShow) {
      menuBtn.classList.add("close");
    } else {
      menuBtn.classList.remove("close");
    }
  }

  handleClickOutside() {
    let menuBtn = document.querySelector(".menu-btn");
    this.setState({ menuShow: false });
    menuBtn.classList.remove("close");
  }

  render() {
    console.log("Purchases", this.state.mypurchases)
    return (
      <div>
        <div className="navbar fixed-top">
          <div className="company-container">
            <img className="c-logo" src={logo} alt="logo" />
            <div className="companywrapper">
              <img className="c-company" src={HealthyU} alt="Healthy U" />
              <img className="c-tag" src={tagline} alt="tag line" />
            </div>
            <div className="login-box">
            <Login/>
            </div>
            <div className="menu-box">
              <div className="menu-items-holder">
                <div className="menu-btn" onClick={() => this.showMenu()}>
                  <div className="btn-line" />
                  <div className="btn-line" />
                  <div className="btn-line" />
                </div>
                <div
                  className="menu-header-word"
                  onClick={() => this.showMenu()}
                >
                  Menu
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            (this.state.menuShow ? "dropDownShow" : "dropDownNoShow") +
            " dropdown"
          }
        >
          <div className="navbar-column-link-wrapper">
            <div className="navbar-column-link-box">
              <div className="navbar-column-title">Programs & Services</div>
              <Link to="/pickyeaters">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  "Picky Eater" - Specific Topics
                </div>
              </Link>
              <Link to="/immune">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Immune
                </div>
              </Link>
            </div>
            <div className="navbar-column-link-box">
              <div className="navbar-column-title">About Us</div>
              <Link to="/about">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  About Healthy U2
                </div>
              </Link>
              <Link to="/aboutourfounder">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  About Our Founder
                </div>
              </Link>
            </div>
            <div className="navbar-column-link-box">
              <div className="navbar-column-title">Additional Services</div>
              <Link to="/resources">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Free Resources
                </div>
              </Link>
            </div>
            <div className="navbar-column-link-box">
     
              <div className="navbar-column-title">Home</div>
              <Link to="/">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
              
                  Home
                </div>
              </Link>
              {this.state.mypurchases ?
              <Link to="/member">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
              
                  My Access
                </div>
              </Link>: "" }
            </div>
           
             
          </div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Navbar);
