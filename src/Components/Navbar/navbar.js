import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/hu2logo.png";
import HealthyU from "../../images/HealthyU.png";
import tagline from "../../images/hutagline.png";
import onClickOutside from "react-onclickoutside";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuShow: false,
    };
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
    return (
      <div>
        <div className="navbar fixed-top">
          <div className="company-container">
            <img className="c-logo" src={logo} alt="logo" />
            <div className="companywrapper">
              <img className="c-company" src={HealthyU} alt="Healthy U" />
              <img className="c-tag" src={tagline} alt="tag line" />
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
              <Link to="/nibble">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Nibbles
                </div>
              </Link>
              <Link to="/snack">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Snacks
                </div>
              </Link>
              <Link to="/dine">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Dine
                </div>
              </Link>
              <Link to="/feast">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Feast
                </div>
              </Link>
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
                  {" "}
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
            </div>
            <div className="navbar-column-link-box">
              <div className="navbar-column-title">All Access</div>
              <Link to="/autoimmune">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
            
                  Autoimmune
                </div>
              </Link>
              <Link to="/environment">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  {" "}
                  Environment
                </div>
              </Link>
              <Link to="/foodfocus">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  {" "}
                  Food Focus
                </div>
              </Link>
              <Link to="/foryourfamily">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  {" "}
                  For Your Family
                </div>
              </Link>
              <Link to="/level50">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  {" "}
                  Level 50+
                </div>
              </Link>
              <Link to="/men">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  {" "}
                  Men
                </div>
              </Link>
              <Link to="/pregnancy">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  {" "}
                  Pregnancy
                </div>
              </Link>
              <Link to="/recipes">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  {" "}
                  Recipes
                </div>
              </Link>
              <Link to="/vegan">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  {" "}
                  The Lonely Vegan
                </div>
              </Link>
              <Link to="/women">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  {" "}
                  Women
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Navbar);
