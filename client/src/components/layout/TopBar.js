import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../authentication/SignOutButton";
//import "../../assets/scss/main.scss"

import "../../assets/scss/componentStyles/TopBar.scss";


const TopBar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-left">Marketplace</div>
      <div className="nav-right">
        <div className="sign-in">Sign in</div>
        <div className="sign-up"><button className="sign-up-btn">Sign up</button></div>
      </div>
    </nav>
  )
}

/**
 * const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in" className="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="signup-btn">
        Sign Up
      </Link>
    </li>,
  ];


  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    
     
    <div className="nav-bar">
      <div className="nav-bar-left">
        <ul className="left-menu">
            <li className="left-menu-text">App</li>
            <li className="left-menu-home">
              <Link to="/">Home</Link>
            </li>
        </ul>

      </div>
      <div className="nav-bar-right">
      <ul className="right-menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>

    </div>
  );
};
 */

export default TopBar;
