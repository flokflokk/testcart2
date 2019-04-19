import React from "react";
import { Link } from "react-router-dom";

const db = {
  name: "SalesMan"
};

const AppHeader = () => (
  <nav className="navbar colorBar" aria-label="main navigation" role="navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="#" target="_blank">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Devahoy LOGO"
          width="112"
          height="28"
        />
      </a>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-end">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/product" className="navbar-item">
          Catalog
        </Link>
        <Link to="/stock" className="navbar-item">
          Stock
        </Link>
        <Link to="/cart" className="navbar-item">
          Cart
        </Link>

        <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link">
          Hello {db.name}
        </Link>
        <div className="navbar-dropdown">
          <a className="navbar-item">
            Change Password
          </a>
          <hr className="navbar-divider"/>          
          <a className="navbar-item">
            Log Out
          </a>

        </div>
      </div>
      </div>
    </div>
  </nav>
);

export default AppHeader;
