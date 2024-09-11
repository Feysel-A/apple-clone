import React, { Component } from "react";
import Nav from "./Nav";
import logo from "../../Resource/images/icons/logo-sm.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top ">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <Nav link="mac" menu="Mac" />
                <Nav link="iphone" menu="Iphone" />
                <Nav link="ipod" menu="Ipod" />
                <Nav link="watch" menu="Watch" />
                <Nav link="music" menu="music" />
                <Nav link="tv" menu="Tv" />
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">
                    <img src="images/icons/search-icon-sm.png" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">
                    <img src="images/icons/cart-sm.png" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
