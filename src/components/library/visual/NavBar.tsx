import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../assets/logo-black 1.png";

export const NavBar = () => (
  <header>
    <div className="wrapper">
      <div className='logo'>
        <NavLink to="/MainPage">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className='titles'>
        <NavLink to="/Characters">Characters</NavLink>
        <NavLink to="">Locations</NavLink>
        <NavLink to="">Episodes</NavLink>
      </div>
      <div></div>
    </div>
  </header>
);
