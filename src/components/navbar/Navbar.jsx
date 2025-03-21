import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="navtop">
          <div className="container">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <select name="select" id="select">
              <option value="eng">English</option>
              <option value="ru">Russian</option>
              <option value="uz">O'zbek</option>
            </select>
          </div>
        </div>
        <div className="mainNav">
          <div className="container">
            <Link to={"/"} className="logo">
              <h1>Exclusive</h1>
            </Link>
            <div className="navLinks">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/signup"}>Sign Up</NavLink>
            </div>
            <div className="navBtns">
              <form action="#">
                <input type="text" placeholder="What are you looking for?" />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <button><i className="fa-regular fa-heart"></i></button>
              <button><i className="fa fa-shopping-cart"></i></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
