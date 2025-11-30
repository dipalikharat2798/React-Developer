import React from "react";
import { Main_LOGO, USER_LOGO } from "../../utils/constants/const";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <header className="header">
      <img src={Main_LOGO} alt="Cafe Logo" className="header__logo" />

      <nav className="nav">
        <ul className="nav-list">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/cart"}>Cart</Link>
        </ul>
      </nav>

      <img src={USER_LOGO} alt="User Icon" className="user-icon" />
    </header>
  );
};
