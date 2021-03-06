// import img from "./spotify.png";
import spotifyLogo from "../images/spotifyLogo.png"
import React from "react";
import "../Style/MainNavbar.css";

export const MainNavbar = ({ url }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={spotifyLogo}
          alt=""
        />
      </div>
      <input id="checkbox" type="checkbox" />
      <div id="bar">
        <label htmlFor="checkbox">
          <i className="fas fa-bars"></i>
        </label>
      </div>
      <ul className="nav-ul">
        <li>Premium</li>
        <li>Support</li>
        <li>Download</li>
        <li id="borderwala"></li>
        <li>
          <a href={url}>Sign up</a>
        </li>
        <li>
          <a href={url}>Log in</a>
        </li>
      </ul>
    </div>
  );
};
