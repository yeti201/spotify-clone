import img from './spotify.png'
import React from "react";
import("./Navbar.css");
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={img} alt="" />
      </div>
      <input id="checkbox" type="checkbox" />
      <div id="bar">
        <label htmlFor="checkbox">
          <i class="fas fa-bars"></i>
        </label>
      </div>
      <ul className="nav-ul">
        <li>Premium</li>
        <li>Support</li>
        <li>Download</li>
        <li id='borderwala'></li>
        <li>Sign up</li>
        <li>Log in</li>
      </ul>
    </div>
  );
}
