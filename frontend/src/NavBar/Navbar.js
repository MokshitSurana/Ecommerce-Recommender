import React, { Component, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  useEffect(()=>{
    window. scrollTo(0, 0);
  })
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          ECOMS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FiMenu/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/#top-offers">
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/#trending">
                Trending
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
