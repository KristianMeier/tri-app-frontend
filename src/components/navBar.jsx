import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w3-top">
      <div className="w3-row w3-large w3-light-grey">
        <div className="w3-col s4">
          <NavLink className="w3-button w3-block" to="/practices">
            Bookings
          </NavLink>
        </div>
        <div className="w3-col s4">
          <NavLink className="w3-button w3-block" to="/about-the-app">
            Info
          </NavLink>
        </div>
        <div className="w3-col s4">
          <NavLink className="w3-button w3-block" to="/myAccount">
            Account
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
