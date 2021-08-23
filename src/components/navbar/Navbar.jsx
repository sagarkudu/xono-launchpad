import React from "react";
import "./navbar.styles.css";

import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light  navbar-bg">
        <div className="container-fluid">
          <NavLink exact className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="logo-size"></img>
          </NavLink>

          <button className="btn btn-outline-success" type="submit">
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
