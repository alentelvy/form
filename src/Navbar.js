import React from "react";
import "./css/AccountInfo.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-3">
      <div className="navbar-nav">
        <NavLink
          exact
          to="/"
          className="nav-link border-bottom mx-2"
          activeClassName="active"
        >
          Factures à payer
        </NavLink>

        <NavLink
          exact
          to="/paid"
          className="nav-link border-bottom mx-2"
          activeClassName="active"
        >
          Factures payées
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
