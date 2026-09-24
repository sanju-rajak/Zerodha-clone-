import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white border-bottom"
      style={{ padding: "15px 50px" }}
    >
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "130px" }}
          />
</Link>
        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link className="nav-link px-3" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">
                About
             </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/product">
                Products
             </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/pricing">
                Pricing
            </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/support">
                Support
              </Link>
            </li>

            {/* Menu Icon */}
            <li className="nav-item">
              <button
                className="btn btn-link nav-link px-3"
                style={{ fontSize: "22px" }}
              >
                ☰
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;